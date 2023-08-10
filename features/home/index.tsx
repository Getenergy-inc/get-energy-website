import AmazingDiscount from "./amazing-discount";
import FAQs from "./faqs";
import FastestWay from "./fastest-way";
import GlobalBrands from "./global-brands";
import Landing from "./landing";
import OurService from "./our-services";
import WhoAreWe from "./who-are-we";
import Download from "./download";

export default function Home() {
  return (
    <div className="container mx-auto w-full bg-white">
      <Landing />
      <FastestWay />
      <WhoAreWe />
      <OurService />
      <AmazingDiscount />
      <GlobalBrands />
      <FAQs />
      <Download />
    </div>
  )
}
