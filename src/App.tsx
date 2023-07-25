import { BrowserRouter } from "react-router-dom";
import "animate.css";
import Scrollable from "./pages/Scrollable.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Scrollable />
      </BrowserRouter>
    </>
  );
}

export default App;