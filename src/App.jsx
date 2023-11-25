import { Outlet } from "react-router-dom";
import Root from "./pages/root";

function App() {
  return (
    <Root>
      <Outlet />
    </Root>
  );
}

export default App;
