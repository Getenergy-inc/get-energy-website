import AboutUs from "@/features/about-us";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: `GetEnergy.ng: Growing force in Nigerian energy market, focusing on DISCO token trading and innovative financial services. Committed to tech-driven solutions and excellent customer service.`,
  alternates: {
    canonical: "/about",
  },
};

const Page = () => {
  return <AboutUs />;
};

export default Page;
