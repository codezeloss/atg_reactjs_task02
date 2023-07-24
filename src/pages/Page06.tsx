import svgPaths from "../../public/assets/svg_with_paths.svg";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import digitalAward from "../../public/assets/world-communication-awards-for-best-digital-experience.png";

function Page06() {
  return (
    <div className="bg-purple-800 h-screen grid grid-cols-5 text-white">
      {/* ** LEFT SIDE */}
      <div className="py-20 px-16 flex flex-col justify-between col-span-2">
        <div className="w-full bg-purple-800 flex items-center justify-between rounded-r-full ml-[170px] z-20">
          <div />

          <div className="flex items-center">
            <div className="w-fit py-20 pr-16">
              <h1 className="text-6xl font-semibold text-right">
                25M+ Downloads
              </h1>
              <p className="text-xl text-right mt-2">
                on appstore & google playstore
              </p>
            </div>
          </div>
        </div>

        {/**/}
        <div>
          <div className="mb-10">
            <img className="h-20 mb-4" src={digitalAward} alt="Award" />
            <h1 className="text-6xl font-semibold mb-3">Abc 123</h1>
            <div className="text-sm">
              <p>We are the best web development</p>
              <p>company in the world</p>
            </div>
          </div>

          <div className="flex justify-between items-center text-lg">
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
      <div className="bg-purple-500 col-span-3">
        <div className="h-screen w-full" />
      </div>
    </div>
  );
}

export default Page06;
