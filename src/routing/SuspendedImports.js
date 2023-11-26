import { lazy } from "react";

export const App = lazy(() => {
  import("../App");
});
export const Home = lazy(() => {
  import("../pages/home");
});
const CountryDescription = lazy(() => {
  import("../pages/countryDescription/CountryDescription");
});

export default CountryDescription;
