const includes = (str1, str2) => str1.toLowerCase().includes(str2.toLowerCase());

export const selectCountriesInfo = ({ countries: { status, error, list } }) => ({
  status,
  error,
  qty: list.length,
});

export const selectAllCountries = ({ countries: { list } }) => list;

export const selectVisibleCountries = ({ countries: { list } }, { search = '', region = '' }) =>
  list.filter((country) => includes(country.name, search) && includes(country.region, region));
