import App from "../App";
import Error from "../pages/error";
import Home from "../pages/home";
import CountryDescription from "../pages/countryDescription/CountryDescription";

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/country/:countryName",
        element: <CountryDescription />,
      },
    ],
  },
];
