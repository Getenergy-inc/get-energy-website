"use client";

import Image from "next/image";
import { getFuelData } from "./data";
import { LeftToRightSVG } from "@/components/common/ltr";
import {
  TransitionFromBottomAlone,
  TransitionFromLeftAloneSlow,
  TransitionOpacity,
  TransitionOpacityAlone,
  TransitionParentInView,
} from "@/lib/utils/transitions";
import JoinWaitlistButton from "./join-waitlist-btn";
import Link from "next/link";
import { DASHBOARD_URL } from "@/constants/variables";

const GetFuel = () => {
  return (
    <section className="grid md:grid-cols-2 md:gap-10 gap-12 relative" id="energy-ecommerce">
      <div className="bg-[#fdfdfd] z-[50]">
        <TransitionFromLeftAloneSlow>
          <Image src={"/images/bg/truck.png"} alt="get energy fuel truck" width={600} height={600} draggable={false} />
        </TransitionFromLeftAloneSlow>
      </div>
      <div className="z-50">
        <div className="space-y-8">
          <TransitionOpacityAlone>
            <h3 className="font-bold text-3xl md:text-4xl">Get Fuel</h3>
          </TransitionOpacityAlone>
          <TransitionParentInView className="space-y-6">
            {getFuelData.map((data, i) => (
              <TransitionOpacity key={i} className="flex items-center gap-8">
                <div className="flex-shrink-0 w-12 rounded-full h-12 shadow-xl bg-white flex items-center justify-center">
                  <span className="font-bold text-2xl">{i + 1}.</span>
                </div>
                <div className="space-y-3 max-w-lg">
                  <p className="text-xl font-semibold">{data.title}</p>
                  <p className="text-zinc-400 leading-loose text-lg">{data.description}</p>
                </div>
              </TransitionOpacity>
            ))}
          </TransitionParentInView>

          <TransitionFromBottomAlone className="grid place-content-center">
            <div>
              <Link href={DASHBOARD_URL} target="_blank">
              <button className="font-bold text-primaryBlue px-6 py-3 rounded-xl bg-primaryBlue/20">
                Get Started
              </button>
              </Link>
             
            </div>
          </TransitionFromBottomAlone>
        </div>
      </div>

      <div className="absolute top-[60%] left-[4%]">
        <LeftToRightSVG />
      </div>
    </section>
  );
};

export default GetFuel;
