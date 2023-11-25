import { Nav } from "./components/Nav";

/* eslint-disable react/prop-types */
const Root = ({ children }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Nav />
      {children}
    </div>
  );
};

export default Root;
