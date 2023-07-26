import { HiArrowNarrowRight } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import mobileUI1 from "../../public/assets/p05/veme-app-ui-design.png";
import mobileUI2 from "../../public/assets/p05/veme-blockchain-app-developed.png";

function Page05() {
  return (
    <div className="bg-violet-800 h-[102vh] grid grid-cols-5 text-white 4bp:grid-cols-none">
      {/* ** LEFT SIDE */}
      <div className="py-20 px-16 flex flex-col justify-between col-span-2 4bp:p-0">
        <div className="w-full bg-violet-800 flex items-center justify-between rounded-r-full ml-[170px] z-20 4bp:hidden">
          <div />

          <div className="flex items-center py-32 pr-32 3bp:pr-28 progress">
            <div
              className={`w-fit animate__animated animate__fadeInDown relative`}
            >
              <p className="text-xl">The Next </p>
              <h1 className="text-5xl 3bp:text-4xl font-semibold">
                Blockchain
              </h1>
              <p className="text-xl text-right mt-2">Revolution</p>
              <div className="absolute right-[10rem] -top-[4rem] z-40">
                <div className="circle p5"></div>
                <div>
                  <NavLink to="/page-01" className="pageBtn active"></NavLink>
                  <NavLink to="/page-02" className="pageBtn active"></NavLink>
                  <NavLink to="/page-03" className="pageBtn active"></NavLink>
                  <NavLink to="/page-04" className="pageBtn active"></NavLink>
                  <NavLink to="/page-05" className="pageBtn active"></NavLink>
                  <NavLink to="/page-06" className="pageBtn"></NavLink>
                  <NavLink to="/page-07" className="pageBtn"></NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/**/}
        <div className="4bp:py-20 4bp:px-16 5bp:px-7">
          <div className={`mb-10 animate__animated animate__fadeInUp`}>
            <h1 className="text-5xl 3bp:text-4xl font-semibold mb-3">
              Abc 234
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
              to="/page-06"
              type="button"
              className="tracking-widest font-medium"
            >
              SKIP
            </Link>
          </div>
        </div>
      </div>

      {/* ** RIGHT SIDE */}
      <div className="bg-violet-950 col-span-3 relative 4bp:hidden">
        <img
          className="w-80 absolute right-20 -top-24 animate__animated animate__fadeInDown 2bp:right-[100px] 2bp:w-72 3bp:-top-44"
          src={mobileUI1}
          alt=""
        />
        <img
          className="w-80 absolute bottom-0 left-[250px] animate__animated animate__fadeInUp 2bp:left-[110px] 2bp:w-72 3bp:-bottom-10"
          src={mobileUI2}
          alt=""
        />
      </div>
    </div>
  );
}

export default Page05;
