import { useCallback, useEffect, useState } from "react";

const useInfiniteScroll = (lastElementRef) => {
  const [numberOfCountriesInView, setNumberOfCountriesInView] = useState(8);

  const addCountries = useCallback(() => {
    if (lastElementRef.current) {
      const bounding = lastElementRef.current.getBoundingClientRect();
      const condition =
        bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight);
      condition && setNumberOfCountriesInView((prev) => prev + 10);
    }
  }, [lastElementRef]);

  useEffect(() => {
    const handleScroll = () => {
      addCountries();
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [addCountries]);

  return numberOfCountriesInView;
};

export default useInfiniteScroll;
