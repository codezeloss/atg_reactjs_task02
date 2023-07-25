import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import mobileUI1 from "../../public/assets/p03/developers-for-social-media-app.png";
import mobileUI2 from "../../public/assets/p03/karavan-social-networking-app-screen.png";
import mobileUI3 from "../../public/assets/p03/karavan-social-networking-app-screen-2.png";

function Page03() {
  return (
    <div className="bg-cyan-900 h-screen grid grid-cols-5 text-white">
      {/* ** LEFT SIDE */}
      <div className="py-20 px-16 flex flex-col justify-between col-span-2">
        <div className="w-full bg-cyan-900 flex items-center justify-between rounded-r-full ml-[170px] z-20">
          <div />

          <div className="flex items-center py-32 pr-36">
            <div className={`w-fit animate__animated animate__fadeInDown`}>
              <p className="text-xl">Text Headline</p>
              <h1 className="text-6xl font-semibold">Text Headline</h1>
              <p className="text-xl text-right mt-2">Footer headline</p>
            </div>
          </div>
        </div>

        {/**/}
        <div>
          <div className={`mb-10 animate__animated animate__fadeInUp`}>
            <h1 className="text-6xl font-semibold mb-3">Abc 567</h1>
            <div className="text-sm">
              <p>We are the best AR</p>
              <p>Development company</p>
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
              to="/page-04"
              type="button"
              className="tracking-widest font-medium"
            >
              SKIP
            </Link>
          </div>
        </div>
      </div>

      {/* ** RIGHT SIDE */}
      <div className="bg-cyan-500 col-span-3 relative">
        <img
          className="absolute  left-28 -top-32 animate__animated animate__fadeInDown"
          src={mobileUI2}
          alt=""
        />{" "}
        <img
          className="absolute  -top-5 right-[300px] animate__animated animate__fadeInDown"
          src={mobileUI3}
          alt=""
        />{" "}
        <img
          className="absolute  right-0 bottom-36 animate__animated animate__fadeInRight"
          src={mobileUI1}
          alt=""
        />{" "}
        <img
          className="absolute  -bottom-60 right-[300px] animate__animated animate__fadeInUp"
          src={mobileUI1}
          alt=""
        />{" "}
        <img
          className="absolute  left-28 -bottom-32 animate__animated animate__fadeInUp"
          src={mobileUI2}
          alt=""
        />
      </div>
    </div>
  );
}

export default Page03;
