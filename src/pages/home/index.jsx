import { Suspense, lazy } from "react";

const Content = lazy(() => import("./component/CountriesDisplay"));
const Home = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading countries...</p>}>
        <Content />
      </Suspense>
    </div>
  );
};

export default Home;
