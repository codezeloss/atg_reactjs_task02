import svgPaths from "../../public/assets/svg_with_paths.svg";
import { Link } from "react-router-dom";
import mobileAward from "../../public/assets/mobile-app-of-the-year-by-entrepreneur.png";

function Page02() {
  return (
    <div className="bg-green-900 h-screen grid grid-cols-5 text-white">
      {/* ** LEFT SIDE */}
      <div className="py-20 px-16 flex flex-col justify-between col-span-2">
        <div className="w-full bg-green-900 flex items-center justify-between rounded-r-full ml-[170px] z-20">
          <div />

          <div className="flex items-center">
            <div className="w-fit py-20 pr-16">
              <p className="text-xl">Biggest Classifieds</p>
              <h1 className="text-6xl font-semibold">East Asia</h1>
              <p className="text-xl text-right mt-2">Countries</p>
            </div>
          </div>
        </div>

        {/**/}
        <div>
          <div className="mb-10">
            <img className="h-20 mb-4" src={mobileAward} alt="Award" />
            <h1 className="text-6xl font-semibold mb-3">Abc 234778</h1>
            <div className="text-sm">
              <p>We are the</p>
              <p>web development company</p>
              <p>in the world</p>
            </div>
          </div>

          <div className="flex justify-between items-center text-lg">
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
      <div className="bg-green-500 col-span-3">
        <div className="h-screen w-full" />
      </div>
    </div>
  );
}

export default Page02;
