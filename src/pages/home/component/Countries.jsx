import { useEffect, useMemo, useRef, useState } from "react";
import CountryCard from "./CountryCard";
import { useSelector } from "react-redux";

const Countries = () => {
  const [numberOfCountriesInView, setNumberOfCountriesInView] = useState(8);
  const { filteredCountries } = useSelector((state) => state.app);
  const countriesContainerRef = useRef(null);

  const lastElementRef = useRef(null);

  const checkLastElementInView = () => {
    if (lastElementRef.current) {
      const bounding = lastElementRef.current.getBoundingClientRect();
      const condition =
        bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight);
      condition && setNumberOfCountriesInView((prev) => prev + 10);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      checkLastElementInView();
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(numberOfCountriesInView);

  const maxImageNumber = useMemo(
    () => numberOfCountriesInView,
    [numberOfCountriesInView]
  );

  return (
    <>
      <section
        ref={countriesContainerRef}
        className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-[3rem] w-full h-full pb-6"
      >
        {filteredCountries &&
          filteredCountries
            .slice(0, maxImageNumber)
            .map((country, i) => (
              <CountryCard
                countryCardRef={lastElementRef}
                key={i}
                country={country}
              />
            ))}
      </section>
      {filteredCountries && filteredCountries.length === 0 && (
        <p>No Country with that name</p>
      )}
    </>
  );
};
export default Countries;
