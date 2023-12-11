"use client";
import {
  TransitionFromBottomAlone,
  TransitionFromLeftAloneSlow,
  TransitionOpacity,
  TransitionOpacityAlone,
  TransitionParentInView,
} from "@/lib/utils/transitions";
import { getFuelData } from "@/lib/store/lists";
import Image from "next/image";
import { LeftToRightSVG } from "@/components/common/ltr";
import Link from "next/link";
import { DASHBOARD_URL } from "@/constants/variables";

const FuelDescription = () => {
  return (
    <div className="relative container mx-auto">
      <div className="grid md:grid-cols-2 md:gap-10 gap-12 relative" id="energy-ecommerce">
        <div className="z-[50]">
          <TransitionFromLeftAloneSlow>
            <Image
              src={"/images/bg/truck.png"}
              alt="get energy fuel truck"
              width={600}
              height={600}
              draggable={false}
            />
          </TransitionFromLeftAloneSlow>
        </div>
        <div className="z-50">
          <div className="space-y-8">
            <TransitionOpacityAlone>
              <h3 className="text-4xl font-bold">What&apos;s In Store for You?</h3>
            </TransitionOpacityAlone>
            <TransitionParentInView className="space-y-6">
              {getFuelData.map((data, id) => (
                <TransitionOpacity key={id} className="flex items-center gap-8">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full shadow-lg bg-white text-xl font-bold grid place-content-center">
                    {id + 1}
                  </div>
                  <p className="text-lg leading-relaxed">
                    <span className="font-semibold">{data.heading}:</span> {data.body}
                  </p>
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
      </div>

      <div className="absolute top-[60%] left-[10%] -z-[1]">
        <LeftToRightSVG />
      </div>
    </div>
  );
};

export default FuelDescription;
