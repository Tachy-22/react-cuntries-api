//import { Suspense } from "react";
import { Suspense } from "react";
import { Nav } from "./components/Nav";

/* eslint-disable react/prop-types */
const Root = ({ children }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="bg-gray-100 min-h-screen">
        <Nav />
        {children}
      </div>
    </Suspense>
  );
};

export default Root;
