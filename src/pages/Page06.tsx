import { HiArrowNarrowRight } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import digitalAward from "../../public/assets/world-communication-awards-for-best-digital-experience.png";
import mobileUI1 from "../../public/assets/p06/developers-for-social-media-app.png";

function Page06() {
  return (
    <div className="bg-purple-800 h-[102vh] grid grid-cols-5 text-white 4bp:grid-cols-none">
      {/* ** LEFT SIDE */}
      <div className="py-20 px-16 flex flex-col justify-between col-span-2 4bp:p-0">
        <div className="w-full bg-purple-800 flex items-center justify-between rounded-r-full ml-[170px] z-20 4bp:hidden">
          <div />

          <div className="flex items-center py-32 pr-32 3bp:pr-28 progress">
            <div
              className={`w-fit animate__animated animate__fadeInDown relative`}
            >
              <h1 className="text-5xl 3bp:text-4xl font-semibold text-right">
                25M+ Downloads
              </h1>
              <p className="text-xl text-right mt-2">
                on appstore & google playstore
              </p>
              <div className="absolute right-[10rem] -top-[5rem] z-40">
                <div className="circle p6"></div>
                <div>
                  <NavLink to="/page-01" className="pageBtn active"></NavLink>
                  <NavLink to="/page-02" className="pageBtn active"></NavLink>
                  <NavLink to="/page-03" className="pageBtn active"></NavLink>
                  <NavLink to="/page-04" className="pageBtn active"></NavLink>
                  <NavLink to="/page-05" className="pageBtn active"></NavLink>
                  <NavLink to="/page-06" className="pageBtn active"></NavLink>
                  <NavLink to="/page-07" className="pageBtn"></NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/**/}
        <div className="4bp:py-20 4bp:px-16 5bp:px-7">
          <div className={`mb-10 animate__animated animate__fadeInUp`}>
            <img className="h-20 mb-4" src={digitalAward} alt="Award" />
            <h1 className="text-5xl 3bp:text-4xl font-semibold mb-3">
              Abc 123
            </h1>
            <div className="text-sm">
              <p>We are the best web development</p>
              <p>company in the world</p>
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
              to="/page-07"
              type="button"
              className="tracking-widest font-medium"
            >
              SKIP
            </Link>
          </div>
        </div>
      </div>

      {/* ** RIGHT SIDE */}
      <div className="bg-purple-500 col-span-3 relative 4bp:hidden">
        <div>
          <img
            className="w-80 absolute top-[180px] right-[150px] animate__animated animate__fadeInUp 2bp:right-[50px] 3p:right-[20px]"
            src={mobileUI1}
            alt=""
          />
          <img
            className="w-80 absolute top-[180px] left-[150px] animate__animated animate__fadeInUp 2bp:left-[100px] 3bp:-top-20"
            src={mobileUI1}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Page06;
