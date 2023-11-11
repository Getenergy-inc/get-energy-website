"use client";
import Info from "@/components/info";
import TitleHeader from "@/components/title-header";
import { faq_data } from "./general_data";
import FAQ from "./faq";

export default function FAQS() {
  const body = `
    Have questions? We've got answers. 
    Welcome to the Get Energy FAQ section, 
    where we address common inquiries 
    about our services, billing, and 
    more. Find solutions, troubleshoot 
    issues, and gain a deeper understanding 
    of how we can meet your energy needs. 
    Explore our FAQ to discover the 
    information you're looking for.
  `;

  return (
    <div className="w-full border">
      <TitleHeader location="FAQ" type="1" title="FAQ" />
      <Info body={body} />
      <div className="w-full flex justify-center my-20">
        <div className="container mt-10 bg-zinc-100 rounded p-4 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {faq_data.map((item) => (
            <FAQ key={item._id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
