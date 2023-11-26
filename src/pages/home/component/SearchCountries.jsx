/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useCallback, useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { updateFilteredCountries } from "../../../redux/appSlice";
import filterCountriesByName from "../../../controls/filterCountriesByName";

export const SearchCountries = ({ Countries }) => {
  const dispatch = useDispatch();

  const [searchKey, setSearchKey] = useState(null);

  const countryRef = useRef(null);

  const handleCountrySearch = useCallback((e) => {
    e.preventDefault();
    try {
      setSearchKey(countryRef.current.value);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (searchKey === null) {
      dispatch(updateFilteredCountries(Countries));
      return;
    } else {
      const FilteredCountries = filterCountriesByName(Countries, searchKey);
      FilteredCountries && dispatch(updateFilteredCountries(FilteredCountries));
    }
  }, [searchKey, dispatch, Countries]);

  return (
    <form
      action=""
      autoComplete="on"
      className="border w-full  sm:w-[20rem]  shadow-lg bg-white flex gap-4 px-3 py-2 justify-between items-center h-fit"
      onSubmit={handleCountrySearch}
    >
      <button id="search" aria-label="search" type="submit">
        <BsSearch className="md:text-base text-lg" />
      </button>

      <label htmlFor="countryInput" className="hidden">
        Search
      </label>
      <search className="w-full">
        <input
          name="countryInput"
          id="countryInput"
          ref={countryRef}
          type="text"
          className="outline-none h-fit "
          autoFocus={true}
          aria-labelledby="countryInput"
        />
      </search>
    </form>
  );
};
export default SearchCountries;
