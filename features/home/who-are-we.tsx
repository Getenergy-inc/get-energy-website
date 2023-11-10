import Image from "next/image";
import { assets } from "@/constants";
import { TransitionOpacity, TransitionOpacityAlone, TransitionParent } from "@/lib/utils/transitions";
import { useHomeStore } from ".";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { whoWeAreContent } from "../about-us";

export default function WhoAreWe() {
  const { homeRef } = useHomeStore();
  const [showmore, setShowmore] = useState(false);

  useEffect(() => {
    const cxt = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#who_we_are_container",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      tl.to("#panel_", { yPercent: -10 });

      return () => cxt.revert();
    }, homeRef);
  }, []);

  return (
    <div className="w-full rounded-xl p-4 lg:p-20 shadow-md mb-10 lg:mb-0" id="who_we_are_container">
      <div className="w-full p-4 md:p-10 lg:p-0">
        <div className="w-full flex justify-center mb-10">
          <TransitionOpacityAlone>
            <h3 className="text-5xl lg:text-6xl text-center font-bold main-text border-b-8 border-[#003B6D]">
              Who we are
            </h3>
          </TransitionOpacityAlone>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-8 items-center md:items-start">
          <div className="w-full lg:w-1/3 flex items-center justify-center">
            <TransitionOpacityAlone
              className="p-0 rounded-2xl flex items-center justify-center shadow-xl overflow-hidden"
              id="panel_"
            >
              <Image src={assets.landing_3} alt="get-energy" className="w-full h-full object-cover" />
            </TransitionOpacityAlone>
          </div>
          <div className="mt-10 lg:mt-0 w-full lg:w-2/3 p-4 lg:p-10 text-gray-600">
            <TransitionParent className="max-w-2xl space-y-4">
              {!showmore ? (
                <>
                  {whoWeAreContent.slice(0, 3).map((content, idx) => (
                    <TransitionOpacity key={idx}>
                      <p>{content}</p>
                    </TransitionOpacity>
                  ))}
                </>
              ) : (
                <>
                  {whoWeAreContent.map((content, idx) => (
                    <TransitionOpacity key={idx}>
                      <p>{content}</p>
                    </TransitionOpacity>
                  ))}
                </>
              )}
              <button
                className="border-[#003b6d] border-b-2 px-2 py-1 font-semibold"
                onClick={() => setShowmore(!showmore)}
              >
                Show {showmore ? "Less" : "More"}
              </button>
            </TransitionParent>
          </div>
        </div>
      </div>
    </div>
  );
}
