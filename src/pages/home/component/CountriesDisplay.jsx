import FilterCountries from "./FilterCountries";
import SearchCountries from "./SearchCountries";
import { Suspense, lazy, useMemo } from "react";
import Data from "../../../../data.json";

const Content = lazy(() => import("./Countries"));

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
      <section className="">
        <Suspense fallback={<p>Loading Countries</p>}>
          <Content />
        </Suspense>
      </section>
    </section>
  );
};

export default CountriesDisplay;
