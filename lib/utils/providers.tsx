"use client";
import { FC, PropsWithChildren } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GsapContain: FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};

export default GsapContain;
