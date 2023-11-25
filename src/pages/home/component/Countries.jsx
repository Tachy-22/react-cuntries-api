import Loader from "../../../components/Loader";
import CountryCard from "./CountryCard";
import { useSelector } from "react-redux";
//import filterCountryByName from "../../../controls/filterCountryByName";

const Countries = () => {
  const { filteredCountries } = useSelector((state) => state.app);
  console.log("filteredCountries", filteredCountries);
  return (
    <>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-[3rem] w-full h-full ">
        {filteredCountries &&
          filteredCountries.map((country, i) => (
            <CountryCard key={i} country={country} />
          ))}
      </div>
      {filteredCountries && filteredCountries.length === 0 && (
        <div>No Country with that name</div>
      )}
      {!filteredCountries && <Loader />}
    </>
  );
};
export default Countries;
