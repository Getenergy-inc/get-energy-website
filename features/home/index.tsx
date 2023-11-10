"use client";
import AmazingDiscount from "./amazing-discount";
import FAQs from "./faqs";
import FastestWay from "./fastest-way";
import GlobalBrands from "./global-brands";
import Landing from "./landing";
import OurService from "./our-services";
import WhoAreWe from "./who-are-we";
import Download from "./download";
import HowItWorks from "../our-service/how-it-works";
import Process from "../our-service/process";
import "react-tooltip/dist/react-tooltip.css";
import { RefObject, useRef } from "react";
import { create } from "zustand";

interface HomeStore {
  homeRef: RefObject<HTMLDivElement>;
  updateRef: (ref: RefObject<HTMLDivElement>) => void;
}

export const useHomeStore = create<HomeStore>((set) => ({
  homeRef: null as unknown as RefObject<HTMLDivElement>,
  updateRef: (ref: RefObject<HTMLDivElement>) => set(() => ({ homeRef: ref })),
}));

export default function Home() {
  const { homeRef } = useHomeStore();

  return (
    <div className="container mx-auto w-full bg-white" ref={homeRef}>
      <Landing />
      <FastestWay />
      <WhoAreWe />
      <OurService />
      <AmazingDiscount />
      <GlobalBrands />
      {/* <FAQs /> */}
      <HowItWorks />
      <Process />
      <Download />
    </div>
  );
}
