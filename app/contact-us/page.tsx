import ContactUs from "@/features/contact-us";

export const metadata = {
  title: "Contact Us",
  description: `Connect with GetEnergy - Your Partner in Power. Reach out to our dedicated team for inquiries, collaborations, or any assistance you may need. We're here to power your queries and provide the energy solutions you seek. Contact us today for a brighter and more sustainable future.`,
  alternates: {
    canonical: "/contact-us",
  },
};

const Page = () => {
  return <ContactUs />;
};

export default Page;
