"use client";
import { assets, variables } from "@/constants";
import Link from "next/link";
import { Dropdown } from "flowbite-react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { useHomeStore } from ".";
import dynamic from "next/dynamic";
import { montserrat } from "@/lib/utils/fonts";
import Image from "next/image";

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
    loading: () => (
      <div className="w-16 h-16 border-primaryBlue border-8 border-t-transparent animate-spin rounded-full"></div>
    ),
  });

  return (
    <div className="w-full flex flex-col md:grid grid-cols-5 mt-[6rem] gap-2 items-center">
      <div className="w-full col-span-3 space-y-10">
        <div className="space-y-5 max-w-[50rem]">
          <div className="overflow-hidden pb-2">
            <h1
              className={`${montserrat} lg:text-start jumbo_text lg:text-5xl md:text-4xl text-3xl font-black text-center md:text-start md:leading-[52px] leading-[40px]`}
            >
              <span>Unlocking Sustainable Energy Solutions, Discover the Power of</span>
              <span className="main-text ms-3 jumbo_gtext">GetEnergy</span>
            </h1>
          </div>
          <div className="overflow-hidden pb-2">
            <p className="w-full md:text-start text-center lg:text-start jumbo_text text-black/80 text-sm md:text-lg lg:pe-72 mb-2">
              We are a leading provider of energy trading solutions, offering a comprehensive range of services to
              clients in the energy sector.
            </p>
          </div>
        </div>
        <div className="flex justify-center lg:justify-start">
          <Link
            className="bg-primaryBlue text-white px-10 font-semibold transition-colors py-4 p-3 rounded-2xl"
            href={variables.GET_STARTED_ADDRESS}
          >
            Get Started
          </Link>
        </div>
      </div>

      <LandingIllus />
    </div>
  );
}
