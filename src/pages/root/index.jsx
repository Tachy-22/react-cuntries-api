/* eslint-disable react/prop-types */

import { Nav } from "./components/Nav";

const Root = ({ children }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Nav />
      {children}
    </div>
  );
};

export default Root;
