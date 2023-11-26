import { Suspense, lazy } from "react";
const Content = lazy(() =>
  import("./CountriesDescriptionContent")
);

const CountryDescription = () => {
  return (
    <div className="flex flex-col gap-6 lg:gap-[4rem] lg:p-[3rem] p-3">
      <Suspense fallback={<p>Loading description</p>}>
        <Content />
      </Suspense>
    </div>
  );
};

export default CountryDescription;
