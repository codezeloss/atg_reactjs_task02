import { HiArrowNarrowRight } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import mobileUI1 from "../../public/assets/p07/nasa-fitness-tracking-mobile-app.png";
import mobileUI2 from "../../public/assets/p07/measure-total-body-weight-through-fitness-app.png";
import nasa from "../../public/assets/p07/nasa-mobile-app.png";

function Page07() {
  return (
    <div className="bg-indigo-950 h-[102vh] grid grid-cols-5 text-white 4bp:grid-cols-none">
      {/* ** LEFT SIDE */}
      <div className="py-20 px-16 flex flex-col justify-between col-span-2 4bp:p-0">
        <div className="w-full bg-indigo-950 flex items-center justify-between rounded-r-full ml-[170px] z-20 4bp:hidden">
          <div />

          <div className="flex items-center py-32 pr-32 3bp:pr-28 progress">
            <div
              className={`w-fit animate__animated animate__fadeInDown relative`}
            >
              <p className="text-xl mb-1">Powered by advance</p>
              <img className="w-52" src={nasa} alt="" />
              <p className="text-xl text-right mt-0">algorithms</p>
              <div className="absolute right-[10rem] -top-[4rem] z-40">
                <div className="circle p7"></div>
                <div>
                  <NavLink to="/page-01" className="pageBtn active"></NavLink>
                  <NavLink to="/page-02" className="pageBtn active"></NavLink>
                  <NavLink to="/page-03" className="pageBtn active"></NavLink>
                  <NavLink to="/page-04" className="pageBtn active"></NavLink>
                  <NavLink to="/page-05" className="pageBtn active"></NavLink>
                  <NavLink to="/page-06" className="pageBtn active"></NavLink>
                  <NavLink to="/page-07" className="pageBtn active"></NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/**/}
        <div className="4bp:py-20 4bp:px-16 5bp:px-7">
          <div className={`mb-10 animate__animated animate__fadeInUp`}>
            <h1 className="text-5xl 3bp:text-4xl font-semibold mb-3">
              Abc 345
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
              to="/"
              type="button"
              className="tracking-widest font-medium"
            >
              SKIP
            </Link>
          </div>
        </div>
      </div>

      {/* ** RIGHT SIDE */}
      <div className="bg-indigo-900 col-span-3 relative 4bp:hidden">
        <img
          className="w-72 absolute -top-20 right-32 animate__animated animate__fadeInDown 2bp:right-16 3bp:-top-32"
          src={mobileUI2}
          alt=""
        />
        <img
          className="w-[370px] absolute left-[180px] bottom-10 animate__animated animate__fadeInUp 2bp:left-[80px] 3bp:left-[50px] 3bp:-bottom-5"
          src={mobileUI1}
          alt=""
        />
      </div>
    </div>
  );
}

export default Page07;
