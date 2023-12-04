import GetElectricitySection from "./get-elect";
import UpdateMarquee from "./update-marquee";
import Landing from "./landing";
import Services from "./services";
import HowItWorks from "./how-it-works";

import Features from "./feature";
import KnowUsMore from "./know-us-more";
import "react-tooltip/dist/react-tooltip.css";
import PayBills from "./pay-bills";
import EnergyEcommerce from "./energy-ecommerce";
import InvestIn from "./invest-in";
import CommunityElectricityVending from "./community-electricity";
import HomeWrapper from "./wrapper";

export default function Home() {
  return (
    <main className="w-full bg-[#fdfdfd]">
      <HomeWrapper>
        <Landing />
        <UpdateMarquee />
        <div className="container mx-auto md:space-y-72 space-y-40 md:mt-40 mt-20">
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
      </HomeWrapper>
    </main>
  );
}
