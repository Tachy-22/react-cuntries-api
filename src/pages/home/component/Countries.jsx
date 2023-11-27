import { memo, useMemo, useRef } from "react";
import CountryCard from "./CountryCard";
import { useSelector } from "react-redux";
import useInfiniteScroll from "../../../controls/hooks/useInfiniteScroll";

const CountriesMemoised = () => {
  const { filteredCountries } = useSelector((state) => state.app);
  const lastElementRef = useRef(null);
  const numberOfCountriesInView = useInfiniteScroll(lastElementRef);
  const maxImageNumber = useMemo(
    () => numberOfCountriesInView,
    [numberOfCountriesInView]
  );

  return (
    <>
      <section className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-[3rem] w-full h-full pb-6">
        {filteredCountries?.slice(0, maxImageNumber).map((country, i) => (
          <CountryCard
            countryCardRef={lastElementRef}
            key={i}
            country={country}
          />
        ))}
      </section>
      {filteredCountries?.length === 0 && <p>No Country with that name</p>}
    </>
  );
};

const Countries = memo(CountriesMemoised);
export default Countries;
