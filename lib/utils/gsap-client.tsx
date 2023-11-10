"use client";
import { FC, PropsWithChildren } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const GsapContain: FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};

export default GsapContain;
