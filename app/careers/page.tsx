import CareersContent from "@/features/careers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: `Embark on a rewarding career journey with GetEnergy! Explore diverse opportunities, from innovative roles to collaborative team environments. Check out our latest job openings and join us in powering the future of energy solutions. Your next career adventure awaits!`,
  alternates: {
    canonical: "/careers",
  },
};

const Careers = () => <CareersContent />;
export default Careers;
