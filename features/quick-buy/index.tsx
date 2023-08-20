import TitleHeader from "@/components/title-header";
import { assets } from '@/constants';
import { buttons, screens as DataScreens } from "./data";
import Image from "next/image";
import Link from "next/link";
import useMultiScreens from "./hooks/use-multi-screens";
import classNames from "classnames";
import React from "react";

export default function QuickBuy() {
  const screens: React.ReactElement[] = DataScreens;
  const { currentStep, goto, currentScreen } = useMultiScreens(screens);

  const buttonsOutput = buttons.map((item) => {
    const button_classnames = classNames([
      {
        "border-b-4 border-sky-800 main-text": currentStep === item.screen,
        "border-b-4 border-white main-text": currentStep !== item.screen
      },
      "text-md"
    ]);

    return (
      <button
        className={button_classnames}
        type="button"
        key={item._id}
        onClick={() => goto(item.screen)}
      >
        {item.title}
      </button>
    );
  });

  return (
    <div className="w-full">
      <TitleHeader
        location="Quick Buy"
        type="2"
        title="Quick Buy"
      />
      <div className="w-full flex justify-center my-20">
        <div className="container flex flex-col items-center px-4 md:px-0">
          <div className="p-2 px-4 w-full md:w-2/3 lg:w-1/3 rounded-xl shadow-xl flex items-center justify-between">
            {buttonsOutput}
          </div>

          <div className="w-full md:w-3/5 my-10 p-6 px-10 text-white main-bg rounded-xl">
            <p>
              Register on the GetEnergy Platform and Download the <Link className="underline" href="/">app</Link> to enjoy more discounted features, in-app features, pay on credit, etc.
            </p>
          </div>

          <div className="w-4/5 lg:w-3/5 mb-5">
            {currentScreen}
          </div>

          <div className="relative w-full md:w-3/5 p-3 main-bg rounded-xl h-[300px]">
            <Image
              src={assets.quick_buy_img_2}
              className="w-full h-full object-cover absolute top-0 left-0 z-10 rounded-xl "
              alt="background-img"
            />
            <div className="absolute top-0 left-0 w-full h-full z-20 bg-[#003B6D] rounded-xl opacity-50" />
            <div className="absolute top-0 left-0 w-full h-full z-30  flex flex-col items-center justify-center">
              <h1 className="text-white text-xl">
                Get More Services from Get Energy
              </h1>
              <button className="mt-8 p-3 px-10 rounded-xl text-black bg-white hover:scale-[1.03]" type="button">
                Take me There
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
