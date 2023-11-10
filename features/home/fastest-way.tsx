"use client";
import { assets } from "@/constants";
import Image from "next/image";
import { useHomeStore } from ".";
import { useEffect } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

export default function FastestWay() {
  const { homeRef } = useHomeStore();
  const GsapContain = dynamic(() => import("@/lib/utils/gsap-client"), { ssr: false });

  useEffect(() => {
    const cxt = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#fastest_way_container",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      tl.to(".img_illus_el", { yPercent: -60 });

      return () => cxt.revert();
    }, homeRef);
  }, []);

  return (
    <GsapContain>
      <div className="hidden lg:flex py-20 w-full items-center" id="fastest_way_container">
        <div className="w-7/12">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
            viewport={{ once: true }}
            className="text-5xl font-bold pe-60 leading-[50px] mb-10"
          >
            Fastest Way To Buy Airtime Or Data
          </motion.h3>
          {/*
          <Link href="/quick-buy" className="main-button p-3 px-10 rounded-full">
            Get Recharged
          </Link>
          */}
        </div>
        <div className="w-5/12">
          <div className="w-3/4 relative">
            <Image src={assets.frame_6} alt="Landing Image" className="w-full" />
            <Image src={assets.frame_7} alt="illustration" className="absolute img_illus_el top-36 -left-52" />
            <Image src={assets.frame_8} alt="illustration" className="absolute img_illus_el -bottom-8 -right-20" />
          </div>
        </div>
      </div>
    </GsapContain>
  );
}
