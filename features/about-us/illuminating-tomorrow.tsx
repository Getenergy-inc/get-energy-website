"use client";
import { FromBottomTransition } from "@/lib/utils/transitions";

export default function IlluminatingTomorrow() {
  return (
    <div className="w-full flex justify-center">
      <div className="container md:my-10 my-5 w-full">
        <div className="w-full grid md:grid-cols-3 items-center gap-8 md:p-12">
          <div className="overflow-hidden">
            <FromBottomTransition>
              <h3 className="font-bold text-2xl md:text-3xl lg:text-5xl">Illuminating Tomorrow, Today.</h3>
            </FromBottomTransition>
          </div>

          <div className="overflow-hidden md:col-span-2">
            <FromBottomTransition>
              <p className="mt-5 md:text-xl leading-8">
                At Get Energy, we&apos;re not just redefining the future of energy; we&apos;re powering it. Dive into
                our story of innovation, sustainability, and unyielding commitment to a greener, more efficient world.
                Join us in shaping the energy landscape of tomorrow.
              </p>
            </FromBottomTransition>
          </div>
        </div>
      </div>
    </div>
  );
}
