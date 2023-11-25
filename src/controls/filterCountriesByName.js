const filterCountriesByName = (Countries, filterKey) => {
  try {
    const filteredCountries = Countries.filter((country) => {
      const sortedCountryName = country.name.toUpperCase();
      if (sortedCountryName.includes(filterKey.toUpperCase())) {
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

export default filterCountriesByName;
