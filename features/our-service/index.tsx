import TitleHeader from "@/components/title-header";
import ServiceList from "./service-list";
import Info from "@/components/info";
import HowItWorks from "./how-it-works";
import Process from "./process";

export default function OurService() {
  const body = `
    Discover the power of Get Energy Services. 
    From electricity to solar, cooking gas, 
    and more, we offer a comprehensive range 
    of energy solutions tailored to your needs. 
    Experience convenience, sustainability, 
    and innovation through our user-friendly 
    platform. Join us and let's shape a 
    greener future together.
  `;

  return (
    <div className="w-full">
      <TitleHeader
        location="Our Services"
        type="1"
        title="Our Services"
      />
      <Info body={body} />
      <ServiceList />
      <HowItWorks />
      <Process />
    </div>
  )
}
