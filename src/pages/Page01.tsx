import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import pizzaBox from "../../public/assets/p01/pizza_box.png";
import bread1 from "../../public/assets/p01/dominos-bread.png";
import bread2 from "../../public/assets/p01/dominos-bread1.png";
import mobileApp1 from "../../public/assets/p01/domi-img1.png";
import mobileApp2 from "../../public/assets/p01/ux-strategy-for-mobile-app-devlopment.png";

function Page01() {
  return (
    <div className="bg-slate-900 h-screen grid grid-cols-5 text-white">
      {/* ** LEFT SIDE */}
      <div className="py-20 px-16 flex flex-col justify-between col-span-2">
        <div className="w-full bg-slate-900 flex items-center justify-between rounded-r-full ml-[200px] z-20">
          <div />

          <div className="flex items-center py-32 pr-36">
            <div className={`w-fit  animate__animated animate__fadeInDown`}>
              <p className="text-xl">Redefining</p>
              <h1 className="text-6xl font-semibold">UX Strategy</h1>
              <p className="text-xl text-right mt-2">and UI design</p>
            </div>
          </div>
        </div>

        {/**/}
        <div>
          <div className={`mb-10 animate__animated animate__fadeInUp`}>
            <h1 className="text-6xl font-semibold mb-3">Abc 456</h1>
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
      <div className="bg-slate-950 col-span-3 relative">
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
          className="absolute w-80 right-[150px] top-[100px] animate__animated animate__fadeInDown"
          src={mobileApp2}
          alt=""
        />
        <img
          className="absolute -bottom-24 -right-10 animate__animated animate__fadeInBottomRight"
          src={bread2}
          alt=""
        />
        <img
          className="absolute w-80 bottom-0 left-20 animate__animated animate__fadeInUp"
          src={mobileApp1}
          alt=""
        />
      </div>
    </div>
  );
}

export default Page01;
