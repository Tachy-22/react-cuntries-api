/* eslint-disable react/prop-types */
import { useCallback, useMemo, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useDispatch } from "react-redux";
import { updateFilteredCountries } from "../../../redux/appSlice";
import filterCountriesByRegion from "../../../controls/filterCountriesByRegion";

export const FilterCountries = ({ Countries }) => {
  const dispatch = useDispatch();
  const [showOptions, setShowOptions] = useState(false);
  const regions = useMemo(
    () => ["Africa", "America", "Europe", "Asia", "Oceania"],
    []
  );
  const handleShowOptions = useCallback(() => {
    try {
      setShowOptions((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleRegionSelection = useCallback(
    (e) => {
      try {
        dispatch(
          updateFilteredCountries(
            filterCountriesByRegion(Countries, e.target.textContent)
          )
        );
      } catch (error) {
        console.log(error);
      }
    },
    [Countries, dispatch]
  );

  return (
    <div className="overflow-hidden  bg-white dark:bg-gray-700 dark:text-white  flex flex-col absolute lg:right-0  lg:top-0 lg:translate-y-0 translate-y-12  z-20 lg:hover:shadow-xl transition-all duration-700 ">
      <div
        onClick={handleShowOptions}
        className="flex shadow-lg  w-[15rem] justify-between items-center px-4 py-3 bg-inherit z-10"
      >
        <p className="">Filter by region</p>
        <button type="button" id="dropdown" aria-label="dropdown">
          <IoMdArrowDropdown
            className={`text-2xl  transition-all duration-1000  ${
              showOptions ? "-rotate-180 " : ""
            } "`}
          />
        </button>
      </div>
      <div open={showOptions}>
        <ul
          onMouseLeave={() => {
            setShowOptions(false);
          }}
          className={` ${
            showOptions ? "translate-y-0 py-2 " : "-translate-y-[200%] h-0 py-0"
          } transition-all duration-1000 flex flex-col  bg-transparent -z-0   -lg  rounded-md `}
        >
          {regions.map((region, index) => (
            <li
              key={index}
              onClick={handleRegionSelection}
              className={` p-1 px-4 hover:underline underline-offset-4 cursor-pointer "`}
            >
              {region}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default FilterCountries;
