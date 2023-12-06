import FAQS from "@/features/faq";

export const metadata = {
  title: "FAQs",
  description: `Explore answers to common questions at GetEnergy. Our FAQ page provides clarity on various topics, helping you navigate our services seamlessly. Find solutions to queries, understand our processes, and enhance your experience with GetEnergy.`,
  alternates: {
    canonical: "/faq",
  },
};

const Page = () => {
  return <FAQS />;
};

export default Page;
