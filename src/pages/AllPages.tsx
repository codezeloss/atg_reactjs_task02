import { HiArrowNarrowRight } from "react-icons/hi";
import pizzaBox from "../../public/assets/p01/pizza_box.png";
import bread1 from "../../public/assets/p01/dominos-bread.png";
import mobileApp2 from "../../public/assets/p01/ux-strategy-for-mobile-app-devlopment.png";
import bread2 from "../../public/assets/p01/dominos-bread1.png";
import mobileApp1 from "../../public/assets/p01/domi-img1.png";
import { gsap } from "gsap";
import mobileAward from "../../public/assets/p02/mobile-app-of-the-year-by-entrepreneur.png";
import mobileUI1 from "../../public/assets/p02/melltoo-img1.png";
import mobileUI2 from "../../public/assets/p02/melltoo-img2.png";

let delSections = document.querySelectorAll(".delayed-section");

delSections.forEach((section) => {
  let imageAnim = gsap.to(section.querySelector("img"), {
    y: "-100vh",
    ease: "none",
    paused: true,
  });

  let progressTo = gsap.quickTo(imageAnim, "progress", {
    ease: "power3",
    duration: parseFloat(section.dataset.scrub) || 0.1,
  });

  gsap.to(section.querySelector(".innerContainer"), {
    y: "100vh",
    ease: "none",
    scrollTrigger: {
      scrub: true,
      trigger: section,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => progressTo(self.progress),
    },
  });
});

function AllPages() {
  return (
    <div className="">
      <div className="bg-slate-900 h-screen grid grid-cols-5 text-white delayed-section fixed">
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

      <div className="bg-green-900 h-screen grid grid-cols-5 text-white delayed-section fixed">
        {/* ** LEFT SIDE */}
        <div className="py-20 px-16 flex flex-col justify-between col-span-2">
          <div className="w-full bg-green-900 flex items-center justify-between rounded-r-full ml-[170px] z-20">
            <div />

            <div className="flex items-center py-32 pr-36">
              <div className={`w-fit animate__animated animate__fadeInDown`}>
                <p className="text-xl">Biggest Classifieds</p>
                <h1 className="text-6xl font-semibold">East Asia</h1>
                <p className="text-xl text-right mt-2">Countries</p>
              </div>
            </div>
          </div>

          {/**/}
          <div>
            <div className={`mb-10 animate__animated animate__fadeInUp`}>
              <img className="h-20 mb-4" src={mobileAward} alt="Award" />
              <h1 className="text-6xl font-semibold mb-3">Abc 234778</h1>
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
            </div>
          </div>
        </div>

        {/* ** RIGHT SIDE */}
        <div className="bg-green-500 col-span-3 relative">
          <img
            className="absolute w-[340px] -bottom-12 right-24 animate__animated animate__fadeInUp"
            src={mobileUI1}
            alt=""
          />
          <img
            className="absolute w-[390px] -bottom-20 right-[330px] animate__animated animate__fadeInUp"
            src={mobileUI2}
            alt=""
          />
        </div>
      </div>

      <div className="bg-slate-900 h-screen grid grid-cols-5 text-white delayed-section fixed">
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
    </div>
  );
}

export default AllPages;
