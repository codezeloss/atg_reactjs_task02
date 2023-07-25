import { BrowserRouter, Route, Routes } from "react-router-dom";
import "animate.css";
import Page01 from "./pages/Page01.tsx";
import Page02 from "./pages/Page02.tsx";
import Page03 from "./pages/Page03.tsx";
import Page04 from "./pages/Page04.tsx";
import Page05 from "./pages/Page05.tsx";
import Page06 from "./pages/Page06.tsx";
import Page07 from "./pages/Page07.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/page-01" element={<Page01 />} />
          <Route path="/page-02" element={<Page02 />} />
          <Route path="/page-03" element={<Page03 />} />
          <Route path="/page-04" element={<Page04 />} />
          <Route path="/page-05" element={<Page05 />} />
          <Route path="/page-06" element={<Page06 />} />
          <Route path="/page-07" element={<Page07 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
