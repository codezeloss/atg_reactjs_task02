import { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Page01 from "./Page01.tsx";
import Page02 from "./Page02.tsx";
import Page03 from "./Page03.tsx";
import Page04 from "./Page04.tsx";
import Page05 from "./Page05.tsx";
import Page06 from "./Page06.tsx";
import Page07 from "./Page07.tsx";

const Scrollable = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname;

  useEffect(() => {
    const handleTouchMove = () => {
      let scrollY = window.scrollY;
      console.log(scrollY);

      // Replace the numbers 500 and 1000 with the scroll positions where you want to change the route.
      if (scrollY >= 19 && location.pathname === "/page-01") {
        navigate("/page-02");
        window.scrollTo(0, 0);
      } else if (scrollY >= 19 && location.pathname === "/page-02") {
        navigate("/page-03");
        window.scrollTo(0, 0);
      } else if (scrollY >= 19 && location.pathname === "/page-03") {
        navigate("/page-04");
        window.scrollTo(0, 0);
      } else if (scrollY >= 19 && location.pathname === "/page-04") {
        navigate("/page-05");
        window.scrollTo(0, 0);
      } else if (scrollY >= 19 && location.pathname === "/page-05") {
        navigate("/page-06");
        window.scrollTo(0, 0);
      } else if (scrollY >= 19 && location.pathname === "/page-06") {
        navigate("/page-07");
        window.scrollTo(0, 0);
      } else if (scrollY >= 19 && location.pathname === "/page-07") {
        navigate("/page-01");
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener("scroll", handleTouchMove);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleTouchMove);
    };
  }, [currentPath]);

  return (
    <div className="">
      <Routes>
        <Route path="/page-01" element={<Page01 />} />
        <Route path="/page-02" element={<Page02 />} />
        <Route path="/page-03" element={<Page03 />} />
        <Route path="/page-04" element={<Page04 />} />
        <Route path="/page-05" element={<Page05 />} />
        <Route path="/page-06" element={<Page06 />} />
        <Route path="/page-07" element={<Page07 />} />
      </Routes>
    </div>
  );
};

export default Scrollable;
