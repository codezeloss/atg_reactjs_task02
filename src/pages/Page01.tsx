import { HiArrowNarrowRight } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import pizzaBox from "../../public/assets/p01/pizza_box.png";
import bread1 from "../../public/assets/p01/dominos-bread.png";
import bread2 from "../../public/assets/p01/dominos-bread1.png";
import mobileApp1 from "../../public/assets/p01/domi-img1.png";
import mobileApp2 from "../../public/assets/p01/ux-strategy-for-mobile-app-devlopment.png";

function Page01() {
  return (
    <div className="bg-slate-900 h-[102vh] grid grid-cols-5 text-white 4bp:grid-cols-none">
      {/* ** LEFT SIDE */}
      <div className="py-20 px-16 flex flex-col justify-between col-span-2 4bp:p-0">
        <div className="w-full bg-slate-900 flex items-center justify-between rounded-r-full ml-[200px] z-20 4bp:hidden">
          <div />

          <div className="flex items-center py-32 pr-28 3bp:pr-28 progress">
            <div
              className={`w-full  animate__animated animate__fadeInDown relative`}
            >
              <p className="text-xl">Redefining</p>
              <h1 className="text-5xl 3bp:text-4xl font-semibold">
                UX Strategy
              </h1>
              <p className="text-xl text-right mt-2">and UI design</p>
              <div className="absolute right-[11rem] -top-[4rem] z-40">
                <div className="circle p1"></div>
                <div>
                  <NavLink to="/page-01" className="pageBtn active"></NavLink>
                  <NavLink to="/page-02" className="pageBtn"></NavLink>
                  <NavLink to="/page-03" className="pageBtn"></NavLink>
                  <NavLink to="/page-04" className="pageBtn"></NavLink>
                  <NavLink to="/page-05" className="pageBtn"></NavLink>
                  <NavLink to="/page-06" className="pageBtn"></NavLink>
                  <NavLink to="/page-07" className="pageBtn"></NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/**/}
        <div className="4bp:py-20 4bp:px-16 5bp:px-7">
          <div className={`mb-10 animate__animated animate__fadeInUp `}>
            <h1 className="text-5xl 3bp:text-4xl font-semibold mb-3">
              Abc 456
            </h1>
            <div className="text-sm">
              <p>We are the</p>
              <p>web development company</p>
              <p>in the world</p>
            </div>
          </div>

          <div
            className={`flex justify-between items-center text-lg animate__animated animate__fadeInUp`}
          >
            <button type="button" className="flex items-center gap-2">
              <p className="">View Case Study</p>
              <HiArrowNarrowRight />
            </button>

            <Link
              to="/page-02"
              type="button"
              className="tracking-widest font-medium"
            >
              SKIP
            </Link>
          </div>
        </div>
      </div>

      {/* ** RIGHT SIDE */}
      <div className="bg-slate-950 col-span-3 relative 4bp:hidden">
        <img
          className="absolute left-0 -top-20 animate__animated animate__fadeInDown"
          src={pizzaBox}
          alt=""
        />
        <img
          className="absolute -top-32 right-10 animate__animated animate__fadeInDown"
          src={bread1}
          alt=""
        />
        <img
          className="absolute w-80 right-[150px] top-[100px] animate__animated animate__fadeInDown 2bp:w-64 3bp:right-[100px]"
          src={mobileApp2}
          alt=""
        />
        <img
          className="absolute -bottom-24 -right-10 animate__animated animate__fadeInBottomRight"
          src={bread2}
          alt=""
        />
        <img
          className="absolute w-80 bottom-0 left-20 animate__animated animate__fadeInUp 2bp:w-64 2bp:left-32 3bp:left-16"
          src={mobileApp1}
          alt=""
        />
      </div>
    </div>
  );
}

export default Page01;
