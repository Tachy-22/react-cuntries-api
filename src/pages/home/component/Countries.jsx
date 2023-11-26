import CountryCard from "./CountryCard";
import { useSelector } from "react-redux";

const Countries = () => {
  const { filteredCountries } = useSelector((state) => state.app);

  return (
    <>
      <section className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-[3rem] w-full h-full ">
        {filteredCountries &&
          filteredCountries.map((country, i) => (
            <CountryCard key={i} country={country} />
          ))}
      </section>
      {filteredCountries && filteredCountries.length === 0 && (
        <p>No Country with that name</p>
      )}
    </>
  );
};
export default Countries;
