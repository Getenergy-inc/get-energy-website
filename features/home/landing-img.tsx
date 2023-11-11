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
      const tl = gsap.timeline();
      tl.from(".main", { scale: 0, ease: "power3.out", duration: 1 })
        .from(".dash", { scale: 0, ease: "elastic.out(1,1)", duration: 2 }, 0.4)
        .from(".likkle", { opacity: 0, yPercent: 100, stagger: { amount: 1 } }, 0.4);

      const t2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#landingImgCon",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      t2.to(".likkle", { yPercent: -50, opacity: 0 });
    }, homeRef);

    return () => cxt.revert();
  }, []);

  return (
    <>
      <div className="relative z-20 floating-element" id="landingImgCon">
        <Image
          src={"/images/landing/landing-1.png"}
          width={400}
          height={500}
          alt="Landing Image"
          className="z-50 main"
        />

        <Image
          src={"/images/landing/landing-2.png"}
          width={400}
          height={500}
          alt="Landing Image"
          className="absolute -top-5 left-10 -z-10 dash"
        />

        <div className="w-2/4 absolute likkle top-0 lg:top-10 -right-14 lg:-right-28 z-30">
          <Image src={assets.frame_5} alt="landing-img" />
        </div>

        <div className="w-2/4 absolute likkle top-10 lg:top-20 -left-14 lg:-left-20 z-30">
          <Image src={assets.frame_1} alt="landing-img" />
        </div>

        <div className="w-2/4 absolute likkle top-32 lg:top-56 -right-14 lg:-right-28 z-30">
          <Image src={assets.frame_3} alt="landing-img" />
        </div>

        <div className="w-2/4 absolute likkle top-44 lg:top-80 -left-14 lg:-left-20 z-30">
          <Image src={assets.frame_4} alt="landing-img" />
        </div>

        <div className="w-2/4 absolute likkle z-30 top-60 lg:top-96 -right-14 lg:-right-28">
          <Image src={assets.frame_2} alt="landing-img" />
        </div>
      </div>
    </>
  );
}
