import { Suspense, lazy, memo } from "react";

const Content = lazy(() => import("./component/CountriesDisplay"));
const HomeMemoised = () => {
  return (
    <Suspense fallback={<p>Loading countries...</p>}>
      <Content />
    </Suspense>
  );
};
const Home = memo(HomeMemoised);
export default Home;
