import { Outlet } from "react-router-dom";
//import Root from "./pages/root";
import { Suspense, lazy } from "react";

const Root = lazy(() => import("./pages/root"));

function App() {
  return (
    <Suspense fallback={<div>Loading root ...</div>}>
      <Root>
        <Outlet />
      </Root>
    </Suspense>
  );
}

export default App;
