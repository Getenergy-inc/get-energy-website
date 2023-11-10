"use client";
import { FC, PropsWithChildren } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import SmoothScroll from "@/features/smooth-scroll";
import { AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AnimatePresence>
      <SmoothScroll />
      {children}
    </AnimatePresence>
  );
};

export default Providers;
