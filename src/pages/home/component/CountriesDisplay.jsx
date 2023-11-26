import FilterCountries from "./FilterCountries";
import SearchCountries from "./SearchCountries";
import Countries from "./Countries";
import { useMemo } from "react";
import Data from "../../../../data.json";

const CountriesDisplay = () => {
  const CountriesData = useMemo(() => Data, []);

  return (
    <section
      className={`" lg:px-[4rem] p-4 lg:py-[2rem]  gap-[1rem] flex flex-col justify-between  "`}
    >
      <div className="flex  w-full justify-between relative pb-[2rem]">
        <SearchCountries Countries={CountriesData} />

        <FilterCountries Countries={CountriesData} />
      </div>
      <Countries />
    </section>
  );
};

export default CountriesDisplay;
