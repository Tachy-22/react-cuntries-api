const filterCountriesByRegion = (Countries, filterKey) => {
  try {
    const filteredCountries = Countries.filter((country) => {
      const sortedCountries = country.region.toUpperCase();
      if (sortedCountries.includes(filterKey.toUpperCase())) {
        return country;
      } else {
        return;
      }
    });
    return filteredCountries;
  } catch (error) {
    console.log(error);
  }
};

export default filterCountriesByRegion;
