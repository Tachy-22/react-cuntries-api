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
      className="border shadow-lg bg-white flex gap-4 px-3 py-2 justify-between items-center h-fit"
      onSubmit={handleCountrySearch}
    >
      <button name={`submit`} type="submit">
        <BsSearch />
      </button>
      <search>
        {" "}
        <label htmlFor="search-Text"></label>
        <input
          name="search-Text"
          id="search-Text"
          ref={countryRef}
          type="text"
          className="outline-none h-fit"
          autoFocus={true}
        />
      </search>
    </form>
  );
};
export default SearchCountries;
