"use client";
import dynamic from "next/dynamic";
import TitleHeader from "@/components/title-header";
import OurFunctions from "./our-functions";
import IlluminatingTomorrow from "./illuminating-tomorrow";
import Info from "@/components/info";
import OurValues from "./our-values";
import OurTeamSection from "./our-team-sect";

const WhoWeAreVideo = dynamic(() => import("./who-we-are-video"), { ssr: false });

export const whoWeAreContent = [
  `
  GETenergy operates as a B2B and B2I digital brokerage service. We are a leading green fintech energy service
  focused on the digitalization of smart renewable electricity distribution. Through our platform, we offer
  our clients real-time and fully "traceable green certificates" (platform users only). These
  certificates are a testament to the quality and reliability of our renewable energy solutions.`,
  `With our cashless digital platform, we provide businesses and individuals with a wide range of energy
  solutions, including renewable and nonrenewable energy solutions. We are dedicated to providing reliable and
  efficient energy solutions.`,
  `Our non-renewable energy services include diesel trading, where we offer access to diesel fuel on credit,
  with payment guarantees to suppliers, through our online trading platform. This solution is tailored to the
  diverse needs of industries that require a steady supply of diesel fuel.`,
  `Our Fintech energy services include electricity payment services, internet, and voice services, which cater
  to a wide range of client needs. By offering businesses the option to buy electricity on credit, we simplify
  payouts, and our platform offers reminders to make sure that they never run out of electricity.`,
  `Our Fintech energy services include electricity payment services, internet, and voice services, which cater
  to a wide range of client needs. By offering businesses the option to buy electricity on credit, we simplify
  payouts, and our platform offers reminders to make sure that they never run out of electricity.`,
  `In our renewable energy category, we provide solar energy solutions that include installation, maintenance,
  and repair of solar panels, providing eco-friendly and sustainable energy solutions. Our solar energy
  services also offer the flexibility of payment through our monthly payment scheme, making it an affordable
  and convenient solution for businesses and individuals.`,
  `We also offer cooking gas services that provide a reliable and efficient
  cooking solution for households and businesses. Our service is designed
  to offer convenience and accessibility to cooking gas, providing refill
  services and cylinder purchases.`,
  `At GETenergy, we are committed to providing innovative and efficient
  energy solutions to our clients. We leverage our partnerships with
  electricity distribution companies, internet and telecommunication
  companies, alternative energy distribution companies, and LPG retailers
  to provide comprehensive energy solutions through our digital platform.
  Our team of experts in the energy trading and renewable development
  sectors is committed to providing unparalleled customer support and
  continuous improvements to our technology solutions using Market
  Analysis and Insights, Risk Management, Trading strategies, Regulatory
  compliance etc.`,
];

export default function AboutUs() {
  const body = `
  Getenergy your comprehensive hub for all your energy needs! 
  As a leading energy service provider in Nigeria, we are dedicated to delivering innovative and efficient energy solutions to businesses and individuals.
    `;

  return (
    <div className="w-full bg-white">
      <TitleHeader title="Who we are" type="1" location="About Us" />
      <Info body={body} />
      <IlluminatingTomorrow />
      <OurValues />
      <div className="h-[10rem]"></div>
      {/* <OurTeamSection /> */}
    </div>
  );
}
