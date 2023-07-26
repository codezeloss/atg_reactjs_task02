import { HiArrowNarrowRight } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import interior from "../../public/assets/p04/interior.jpg";
import tabletUI from "../../public/assets/p04/erp-app-development-service.png";

function Page04() {
  return (
    <div className="bg-blue-900 h-[102vh] grid grid-cols-5 text-white 4bp:grid-cols-none">
      {/* ** LEFT SIDE */}
      <div className="py-20 px-16 flex flex-col justify-between col-span-2 z-30 4bp:p-0">
        <div className="w-full bg-blue-900 flex items-center justify-between rounded-r-full ml-[170px] z-20 4bp:hidden">
          <div />

          <div className="flex items-center py-32 pr-32 3bp:pr-28 progress">
            <div
              className={`w-fit animate__animated animate__fadeInDown relative`}
            >
              <p className="text-xl">Developing ERP Solution for</p>
              <h1 className="text-5xl 3bp:text-4xl font-semibold">
                Text Headline
              </h1>
              <p className="text-xl text-right mt-2">in furniture industry</p>
              <div className="absolute right-[10rem] -top-[4rem] z-40">
                <div className="circle p4"></div>
                <div>
                  <NavLink to="/page-01" className="pageBtn active"></NavLink>
                  <NavLink to="/page-02" className="pageBtn active"></NavLink>
                  <NavLink to="/page-03" className="pageBtn active"></NavLink>
                  <NavLink to="/page-04" className="pageBtn active"></NavLink>
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
          <div className={`mb-10 animate__animated animate__fadeInUp`}>
            <h1 className="text-5xl 3bp:text-4xl font-semibold mb-3">
              Abc 678
            </h1>
            <div className="text-sm">
              <p>Best since 2017</p>
              <p>We offer wide range of</p>
              <p>web development and app development.</p>
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
              to="/page-05"
              type="button"
              className="tracking-widest font-medium"
            >
              SKIP
            </Link>
          </div>
        </div>
      </div>

      {/* ** RIGHT SIDE */}
      <div className="bg-blue-500 col-span-3 relative 4bp:hidden">
        <img
          className="w-full h-full object-cover absolute z-10"
          src={interior}
          alt=""
        />
        <img
          className="object-cover absolute z-20 animate__animated animate__fadeInUp"
          src={tabletUI}
          alt=""
        />
      </div>
    </div>
  );
}

export default Page04;
