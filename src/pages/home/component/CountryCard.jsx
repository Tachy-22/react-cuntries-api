/* eslint-disable react/prop-types */
import { memo, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateCountryInView } from "../../../redux/appSlice";
import { useNavigate } from "react-router-dom";

const CountryCardMemoised = ({ country, countryCardRef }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    setShowCard(true);
  }, []);

  const handleDescriptionPageNavigation = useCallback(() => {
    try {
      dispatch(updateCountryInView(country));
      navigate(`/country/${country.name}`);
    } catch (error) {
      console.error(error);
    }
  }, [country, dispatch, navigate]);

  return (
    <div
      ref={countryCardRef}
      className={`" flex flex-col translate-y-[2rem] bg-white dark:bg-gray-700 dark:text-white w-full transition-all duration-[3s] rounded-md  ${
        showCard && country.flag
          ? "opacity-1 translate-y-0"
          : "opacity-0 -translate-y-[2rem]"
      }  "`}
    >
      <img
        onClick={handleDescriptionPageNavigation}
        src={country.flag}
        alt=""
        className="w-full h-[15rem] flex-grow object-cover hover:border hover:border-yellow-300 "
      />
      <div className="p-2 flex flex-col gap-2 shadow-xl">
        <p className="font-bold capitalize text-xl"> {country.name}</p>
        <p className="font-semibold">
          Population: <span className="font-medium">{country.population}</span>
        </p>
        <p className="font-semibold">
          Region: <span className="font-medium">{country.region}</span>
        </p>
        <p className="font-semibold">
          Capital: <span className="font-medium"> {country.capital}</span>
        </p>
      </div>
    </div>
  );
};
const CountryCard = memo(CountryCardMemoised);
export default CountryCard;
