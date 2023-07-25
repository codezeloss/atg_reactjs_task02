import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import mobileUI1 from "../../public/assets/p07/nasa-fitness-tracking-mobile-app.png";
import mobileUI2 from "../../public/assets/p07/measure-total-body-weight-through-fitness-app.png";
import nasa from "../../public/assets/p07/nasa-mobile-app.png";

function Page07() {
  return (
    <div className="bg-indigo-950 h-screen grid grid-cols-5 text-white">
      {/* ** LEFT SIDE */}
      <div className="py-20 px-16 flex flex-col justify-between col-span-2">
        <div className="w-full bg-indigo-950 flex items-center justify-between rounded-r-full ml-[170px] z-20">
          <div />

          <div className="flex items-center py-32 pr-36">
            <div className={`w-fit animate__animated animate__fadeInDown`}>
              <p className="text-xl mb-1">Powered by advance</p>
              <img className="" src={nasa} alt="" />
              <p className="text-xl text-right mt-0">algorithms</p>
            </div>
          </div>
        </div>

        {/**/}
        <div>
          <div className={`mb-10 animate__animated animate__fadeInUp`}>
            <h1 className="text-6xl font-semibold mb-3">Abc 345</h1>
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
              to="/page-01"
              type="button"
              className="tracking-widest font-medium"
            >
              SKIP
            </Link>
          </div>
        </div>
      </div>

      {/* ** RIGHT SIDE */}
      <div className="bg-indigo-900 col-span-3 relative">
        <img
          className="w-72 absolute -top-20 right-32 animate__animated animate__fadeInDown"
          src={mobileUI2}
          alt=""
        />
        <img
          className="w-[370px] absolute left-[180px] bottom-10 animate__animated animate__fadeInUp"
          src={mobileUI1}
          alt=""
        />
      </div>
    </div>
  );
}

export default Page07;
