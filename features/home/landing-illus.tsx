"use client";
import Image from "next/image";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { useHomeStore } from ".";
import { assets } from "@/constants";

export default function LandingImage() {
  const { homeRef } = useHomeStore();

  useLayoutEffect(() => {
    const cxt = gsap.context(() => {
      // const tl = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: ".main",
      //     start: "top top",
      //     end: "bottom top",
      //     scrub: 1,
      //   },
      // });

      gsap
        .timeline()
        .from(".bulb", { opacity: 0, xPercent: 10 })
        .from(".likkle", { opacity: 0, stagger: { amount: 0.5 } });

      // tl.to(".likkle", { opacity: 0, stagger: { amount: 0.5 } });
    }, homeRef);

    return () => cxt.revert();
  }, []);

  return (
    <>
      <div className="w-full bg-transparent select-none main h-auto aspect-square col-span-2 animate-spin [animation-duration:40s] rounded-full relative">
        <div className="w-full h-full top-0 left-0 [animation-duration:40s] direction-reverse absolute animate-spin rounded-full">
          <Image
            src={"/images/bg/bulb_png.png"}
            alt="a bulb"
            width={585}
            height={585}
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>

        <div>
          <div className="w-2/4 absolute likkle animate-spin [animation-duration:40s] direction-reverse top-0 lg:-top-[2rem] -right-4 lg:-right-4 z-30">
            <Image src={assets.frame_5} alt="electricity badge" />
          </div>

          <div className="w-2/4 absolute likkle animate-spin [animation-duration:40s] direction-reverse top-8 lg:top-12 -left-14 lg:-left-20 z-30">
            <Image src={assets.frame_1} alt="electricity badge" />
          </div>

          <div className="w-2/4 absolute likkle animate-spin [animation-duration:40s] direction-reverse top-32 lg:top-[15rem] -right-14 lg:-right-28 z-30">
            <Image src={assets.frame_3} alt="electricity badge" />
          </div>

          <div className="w-2/4 absolute likkle animate-spin [animation-duration:40s] direction-reverse top-44 lg:top-80 -left-14 lg:-left-20 z-30">
            <Image src={assets.frame_4} alt="electricity badge" />
          </div>

          <div className="w-2/4 absolute likkle animate-spin [animation-duration:40s] direction-reverse z-30 top-60 lg:top-[30rem] -right-14 lg:right-[7rem]">
            <Image src={assets.frame_2} alt="electricity badge" />
          </div>
        </div>
      </div>
    </>
  );
}
