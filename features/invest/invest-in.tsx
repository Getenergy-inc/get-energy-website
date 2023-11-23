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
    <div className="grid grid-cols-2" id="what-to-invest">
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

export default InvestIn;
