"use client";
import { TransitionFromBottom, TransitionFromLeft, TransitionParentInView } from "@/lib/utils/transitions";
import { ArrowUpIcon } from "lucide-react";
import Image from "next/image";
import { useHomeStore } from "../home";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";

const whatToInvestData = [
  {
    heading: "Diesel Investment",
    body: "From logistics to sales, be a part of the diesel energy journey. Fuel the future with your investments!",
  },
  {
    heading: "Electricity Bulk Purchase",
    body: "Unlock exclusive opportunities to invest in bulk electricity purchases. Power up your returns!!",
  },
];

const InvestIn = () => {
  const { homeRef } = useHomeStore();

  useLayoutEffect(() => {
    const cxt = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#what-to-invest",
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
    <div className="grid md:grid-cols-2 gap-10 md:gap-0 relative" id="what-to-invest">
      {/* line */}
      <Line />

      <div className="space-y-6">
        <h3 className="text-4xl font-bold">What Can You Invest In?</h3>

        <div className="space-y-6 pr-8">
          {whatToInvestData.map((data, id) => (
            <div key={id} className="flex items-center gap-4 max-w-lg">
              <div className="w-12 h-12 flex-shrink-0 rounded-full shadow-lg bg-white text-xl font-bold grid place-content-center">
                {id + 1}
              </div>
              <p className="text-xl tracking-wide leading-relaxed">
                <span className="font-semibold">{data.heading}:</span> {data.body}
              </p>
            </div>
          ))}
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
    </div>
  );
};

const Line = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1053"
    height="499"
    viewBox="0 0 1053 499"
    fill="none"
    className="absolute right-28 top-56 hidden md:block"
  >
    <path
      d="M1007.52 2L1037.11 2V2C1044.78 2 1051 8.21693 1051 15.8859L1051 136.648L1051 181.832L1051 230.719L1051 295C1051 311.569 1037.57 325 1021 325L128 325L93.5758 325C77.0072 325 63.5758 338.431 63.5758 355L63.5758 466.41C63.5758 489.642 38.3051 504.058 18.3067 492.233L0.999979 482"
      stroke="url(#paint0_linear_5768_39632)"
      strokeWidth="3.73"
    />
    <defs>
      <linearGradient
        id="paint0_linear_5768_39632"
        x1="1051.04"
        y1="150.842"
        x2="1050.27"
        y2="150.842"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#003B6D" />
        <stop offset="0.0001" stopColor="#014A87" stop-opacity="0.880208" />
        <stop offset="1" stopColor="#003B6D" />
      </linearGradient>
    </defs>
  </svg>
);

export default InvestIn;
