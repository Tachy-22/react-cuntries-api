/* eslint-disable react/prop-types */

import { Nav } from "./components/Nav";

const Root = ({ children }) => {
  return (
    <main className="bg-gray-100 min-h-screen">
      <Nav />
      {children}
    </main>
  );
};

export default Root;
