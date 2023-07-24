import svgPaths from "../../public/assets/svg_with_paths.svg";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

function Page07() {
  return (
    <div className="bg-orange-900 h-screen grid grid-cols-5 text-white">
      {/* ** LEFT SIDE */}
      <div className="py-20 px-16 flex flex-col justify-between col-span-2">
        <div className="w-full bg-orange-900 flex items-center justify-between rounded-r-full ml-[170px] z-20">
          <div />

          <div className="flex items-center">
            <div className="w-fit py-20 pr-16">
              <p className="text-xl">Redefining</p>
              <h1 className="text-6xl font-semibold">UX Strategy</h1>
              <p className="text-xl text-right mt-2">and UI design</p>
            </div>
          </div>
        </div>

        {/**/}
        <div>
          <div className="mb-10">
            <h1 className="text-6xl font-semibold mb-3">Abc 456</h1>
            <div className="text-sm">
              <p>We are the</p>
              <p>web development company</p>
              <p>in the world</p>
            </div>
          </div>

          <div className="flex justify-between items-center text-lg">
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
      <div className="bg-orange-500 col-span-3">
        <div className="h-screen w-full" />
      </div>
    </div>
  );
}

export default Page07;
