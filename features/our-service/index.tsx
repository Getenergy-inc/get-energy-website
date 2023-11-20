"use client";
import TitleHeader from "@/components/title-header";
import ServiceList from "./service-list";
import Info from "@/components/info";
import HowItWorksServices from "./how-it-works";

export default function OurService() {
  const body = `
        Discover the power of Get Energy Services. 
        From electricity to solar, cooking gas, 
        and more, we offer a comprehensive range 
        of energy solutions tailored to your needs. 
        Experience convenience, sustainability, 
        and innovation through our user-friendly 
        platform. 
        
        Join us and let's shape a 
        greener future together.
    `;

  return (
    <div className="w-full">
      <TitleHeader location="Our Service" type="2" title="Our Service" />
      <Info body={body} />
      <ServiceList />
      <HowItWorksServices />
    </div>
  );
}
