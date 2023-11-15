"use client";
import AmazingDiscount from "./amazing-discount";
import GetElectricitySection from "./get-elect";
import GlobalBrands from "./global-brands";
import Landing from "./landing";
import OurService from "./our-services";
import Services from "./services";
import Download from "./download";
import HowItWorks from "../our-service/how-it-works";
import Process from "../our-service/process";
import "react-tooltip/dist/react-tooltip.css";
import { RefObject } from "react";
import { create } from "zustand";
import Features from "./feature";
import KnowUsMore from "./know-us-more";

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
    <div className="w-full bg-[#fdfdfd]" ref={homeRef}>
      <div className="container mx-auto ">
        <Landing />
      </div>
      <GlobalBrands />
      <div className="container mx-auto ">
        <GetElectricitySection />
      </div>
      <Services />
      <Features />
      <HowItWorks />
      <KnowUsMore />
    </div>
  );
}
