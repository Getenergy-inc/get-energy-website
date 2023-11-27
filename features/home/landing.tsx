"use client";
import { variables } from "@/constants";
import Link from "next/link";
import { useEffect } from "react";
import { gsap } from "gsap";
import { useHomeStore } from ".";
import dynamic from "next/dynamic";
import { MouseIcon } from "lucide-react";
import { DASHBOARD_URL } from "@/constants/variables";

export default function Landing() {
  const { homeRef } = useHomeStore();

  useEffect(() => {
    const cxt = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".jumbo_text", {
        opacity: 0,
        delay: 0.5,
        ease: "circ",
        yPercent: 100,
        stagger: { amount: 0.2 },
      })
        .from(".jumbo_gtext", { opacity: 0 })
        .from(".jumbo_action", {
          opacity: 0,
          stagger: { amount: 0.1 },
        });
    }, homeRef);

    return () => cxt.revert();
  }, []);

  const LandingIllus = dynamic(() => import("./landing-illus"), {
    loading: () => <div className="w-16 h-16 border-primaryBlue border-t-transparent animate-spin rounded-full"></div>,
  });

  return (
    <header id="landing-header" className="relative overflow-hidden pb-20">
      <div className="absolute lg:top-10 md:top-8 md:flex hidden text-xs md:text-base top-5 left-0 w-full items-center justify-center">
        <span>
          We are hiring!!{" "}
          <Link href={"/careers"} className="font-semibold text-primaryBlue border-b">
            Check Now
          </Link>
        </span>
      </div>
      <div className="w-full flex flex-col md:grid z-[50] container mx-auto grid-cols-5 mt-[3rem] gap-6 items-center">
        <div className="w-full col-span-3 space-y-10">
          <div className="space-y-5">
            <div className="overflow-hidden pb-2">
              <h1
                className={`lg:text-start jumbo_text max-w-[40rem] lg:text-5xl text-[1.8rem] md:font-black font-extrabold lg:leading-[65px] md:leading-[50px]`}
              >
                <span>Unlocking Sustainable Energy Solutions, Discover the Power of</span>
                <span className="main-text ms-3 jumbo_gtext">GetEnergy</span>
              </h1>
            </div>
            <div className="overflow-hidden pb-2">
              <p className="w-full lg:text-start jumbo_text max-w-[45rem] text-sm md:text-lg md:font-semibold mb-2">
                We are a leading provider of energy trading solutions, offering a comprehensive range of services to
                clients in the energy sector.
              </p>
            </div>
          </div>
          <div className="flex md:justify-center justify-start lg:justify-start -mt-2">
            <Link
              className="bg-primaryBlue text-white md:px-10 px-5 py-3 text-sm md:text-base jumbo_action font-semibold transition-colors md:rounded-2xl rounded-xl"
              href={DASHBOARD_URL}
            >
              Get Started
            </Link>
          </div>

          <div>
            <p className="block md:hidden text-center">
              We are hiring!!{" "}
              <Link href={"/careers"} className="font-semibold text-primaryBlue border-b">
                Check Now
              </Link>
            </p>
            <div className="w-full md:hidden grid mt-4 place-content-center animate-bounce [animation-duration:1s] text-primaryBlue">
              <MouseIcon />
            </div>
          </div>
        </div>

        <LandingIllus />
      </div>

      <div className="w-full md:grid hidden place-content-center animate-bounce [animation-duration:1s] text-primaryBlue">
        <MouseIcon />
      </div>
    </header>
  );
}
