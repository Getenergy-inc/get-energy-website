"use client";
import Image from "next/image";
import { investInEnergyData } from "./data";
import { ArrowUpIcon } from "lucide-react";
import { RightToLeftSVG } from "@/components/common/ltr";
import {
  TransitionFromBottom,
  TransitionFromBottomAlone,
  TransitionFromLeft,
  TransitionFromRight,
  TransitionOpacityAlone,
  TransitionParentInView,
} from "@/lib/utils/transitions";
import { useLayoutEffect } from "react";
import { useHomeStore } from ".";
import { gsap } from "gsap";

const InvestIn = () => {
  const { homeRef } = useHomeStore();

  useLayoutEffect(() => {
    const cxt = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#invest-in-energy",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      tl.to("#investCard", { yPercent: -100 });

      return () => cxt.revert();
    }, homeRef);
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-20 relative" id="invest-in-energy">
      <div className="relative">
        {/* Boxes */}
        <div className="w-6 h-6 bg-primaryBlue rounded rotate-45 absolute -top-32 left-10"></div>
        <div className="w-3 h-3 bg-primaryBlue/40 rounded rotate-45 absolute -top-40 left-1/2"></div>
        <div className="w-3 h-3 bg-primaryBlue rounded absolute top-1/2 right-10"></div>

        <div className="space-y-8">
          <TransitionOpacityAlone>
            <h3 className="font-bold text-4xl">Invest in:</h3>
          </TransitionOpacityAlone>
          <TransitionParentInView className="space-y-6">
            {investInEnergyData.map((data, i) => (
              <TransitionFromRight key={i} className="flex items-center gap-8">
                <div className="flex-shrink-0 w-12 rounded-full h-12 shadow-xl bg-white flex items-center justify-center">
                  <span className="font-bold text-2xl">{i + 1}.</span>
                </div>
                <div className="space-y-3 max-w-lg">
                  <p className="text-xl font-semibold">{data.title}</p>
                  <p className="text-zinc-400 leading-loose text-lg">{data.description}</p>
                </div>
              </TransitionFromRight>
            ))}
          </TransitionParentInView>

          <TransitionFromBottomAlone className="grid place-content-center">
            <button className="font-bold text-primaryBlue px-6 py-3 rounded-xl bg-primaryBlue/20">
              Join Wait List
            </button>
          </TransitionFromBottomAlone>
        </div>
      </div>

      <TransitionParentInView className="relative flex justify-center -mt-10 z-50">
        <TransitionFromLeft className="z-[100] absolute bottom-20 -left-10">
          <div className="py-4 px-8 text-sm bg-white shadow-xl rounded-xl" id="investCard">
            <div className="flex items-center gap-16 justify-between">
              <p className="font-medium">Investment</p>
              <p className="flex items-center gap-2 text-green-500">
                <ArrowUpIcon /> <span>12%</span>
              </p>
            </div>
            <div className="mt-2">
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="flex items-center justify-between text-zinc-400">
                  <p>N200,000</p>
                  <p>May 29, 2023</p>
                </div>
              ))}
            </div>
          </div>
        </TransitionFromLeft>

        <TransitionFromBottom className="z-50">
          <Image
            src={"/images/bg/man-holding-piggy-bank.png"}
            alt="a guy holding a piggy bank"
            width={400}
            height={600}
            draggable={false}
            className="z-50"
          />
        </TransitionFromBottom>
      </TransitionParentInView>

      <div className="absolute top-[30%] left-[4%] z-0">
        <RightToLeftSVG />
      </div>
    </div>
  );
};

export default InvestIn;
