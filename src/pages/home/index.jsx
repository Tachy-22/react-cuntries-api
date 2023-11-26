import { Suspense, lazy } from "react";

const Content = lazy(() => import("./component/CountriesDisplay"));
const Home = () => {
  return (
    <Suspense fallback={<p>Loading countries...</p>}>
      <Content />
    </Suspense>
  );
};

export default Home;
