import { Link, NavLink } from "react-router-dom";
import mobileUI1 from "../../public/assets/p02/melltoo-img1.png";
import mobileUI2 from "../../public/assets/p02/melltoo-img2.png";
import mobileAward from "../../public/assets/p02/mobile-app-of-the-year-by-entrepreneur.png";

function Page02() {
  return (
    <div className="bg-green-900 h-[102vh] grid grid-cols-5 text-white 4bp:grid-cols-none">
      {/* ** LEFT SIDE */}
      <div className="py-20 px-16 flex flex-col justify-between col-span-2 4bp:p-0">
        <div className="w-full bg-green-900 flex items-center justify-between rounded-r-full ml-[170px] z-20 4bp:hidden">
          <div />

          <div className="flex items-center py-32 pr-32 3bp:pr-28 progress">
            <div
              className={`w-fit animate__animated animate__fadeInDown relative`}
            >
              <p className="text-xl">Biggest Classifieds</p>
              <h1 className="text-5xl 3bp:text-4xl font-semibold">East Asia</h1>
              <p className="text-xl text-right mt-2">Countries</p>
              <div className="absolute right-[10rem] -top-[4rem] z-40">
                <div className="circle p2"></div>
                <div>
                  <NavLink to="/page-01" className="pageBtn active"></NavLink>
                  <NavLink to="/page-02" className="pageBtn active"></NavLink>
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
          <div className={`mb-10 animate__animated animate__fadeInUp`}>
            <img className="h-20 mb-4" src={mobileAward} alt="Award" />
            <h1 className="text-5xl 3bp:text-4xl font-semibold mb-3">
              Abc 234778
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
            <p className="text-gray">Coming Soon</p>
            <Link
              to="/page-03"
              type="button"
              className="tracking-widest font-medium"
            >
              SKIP
            </Link>
          </div>
        </div>
      </div>

      {/* ** RIGHT SIDE */}
      <div className="bg-green-500 col-span-3 relative 4bp:hidden">
        <img
          className="absolute w-[340px] -bottom-12 right-24 animate__animated animate__fadeInUp 2bp:w-[300px] 2bp:right-18 3bp:right-[64px]"
          src={mobileUI1}
          alt=""
        />
        <img
          className="absolute w-[390px] -bottom-20 right-[330px] animate__animated animate__fadeInUp 2bp:w-[320px] 2bp:right-[310px] 3bp:right-[250px]"
          src={mobileUI2}
          alt=""
        />
      </div>
    </div>
  );
}

export default Page02;
