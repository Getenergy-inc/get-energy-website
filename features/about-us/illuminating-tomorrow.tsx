"use client";
import Image from "next/image";
import { assets } from "@/constants";
import { FromBottomTransition } from "@/lib/utils/transitions";

export default function IlluminatingTomorrow() {
  return (
    <div className="w-full flex justify-center">
      <div className="container my-10 w-full">
        <div className="flex flex-col md:flex-row bg-[#00597833] rounded-xl">
          <div className="w-full md:w-1/2 p-12">
            <div className="overflow-hidden">
              <FromBottomTransition>
                <h3 className="font-bold text-2xl md:text-3xl lg:text-5xl">Illuminating Tomorrow, Today.</h3>
              </FromBottomTransition>
            </div>
            <div className="overflow-hidden">
              <FromBottomTransition>
                <p className="mt-5 md:text-xl leading-8">
                  At Get Energy, we&apos;re not just redefining the future of energy; we&apos;re powering it. Dive into
                  our story of innovation, sustainability, and unyielding commitment to a greener, more efficient world.
                  Join us in shaping the energy landscape of tomorrow.
                </p>
              </FromBottomTransition>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <Image src={assets.about_us_1} alt="get-energy" className="w-full h-full object-cover rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
