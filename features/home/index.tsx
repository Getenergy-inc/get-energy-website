"use client";
import GetElectricitySection from "./get-elect";
import UpdateMarquee from "./update-marquee";
import Landing from "./landing";
import Services from "./services";
import HowItWorks from "./how-it-works";
import { RefObject } from "react";
import { create } from "zustand";
import Features from "./feature";
import KnowUsMore from "./know-us-more";
import "react-tooltip/dist/react-tooltip.css";
import PayBills from "./pay-bills";
import EnergyEcommerce from "./energy-ecommerce";
import InvestIn from "./invest-in";
import CommunityElectricityVending from "./community-electricity";

interface HomeStore {
  homeRef: RefObject<HTMLDivElement>;
}

export const useHomeStore = create<HomeStore>((set) => ({
  homeRef: null as unknown as RefObject<HTMLDivElement>,
}));

export default function Home() {
  const { homeRef } = useHomeStore();

  return (
    <div className="w-full bg-[#fdfdfd]" ref={homeRef}>
      <Landing />
      <UpdateMarquee />
      <div className="container mx-auto space-y-64 mt-40">
        <GetElectricitySection />
        <PayBills />
        <EnergyEcommerce />
        <InvestIn />
        <CommunityElectricityVending />
      </div>
      <Services />
      <Features />
      <HowItWorks />
      <KnowUsMore />
    </div>
  );
}
