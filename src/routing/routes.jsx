import App from "../App";
import Error from "../pages/error";
import Home from "../pages/home";
//import CountriesDisplay from "../pages/home/component/CountriesDisplay";

//import Home from "../pages/home";
import CountryDescription from "../pages/countryDescription/CountryDescription";


const routes = [
  {
    path: "/",
    element: <App />,
    // lazy: () => import("../App"),
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        // lazy: () => import("../pages/home"),
      },
      {
        path: "/country/:countryName",
        element: <CountryDescription />,
      },
    ],
  },
];

export default routes;
