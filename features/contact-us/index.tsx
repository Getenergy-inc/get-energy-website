"use client";
import TitleHeader from "@/components/title-header";
import Info from "@/components/info";
import Form from "./form";

export default function ContactUs() {
  const body = `
  Whether you have questions, feedback, or need assistance, our dedicated team is ready to assist you. Reach out to us through our contact form, phone, or email, and we'll ensure a prompt and helpful response. We value your satisfaction and look forward to hearing from you.
  `;

  return (
    <div className="w-full">
      <TitleHeader location="Contact Us" type="3" title="Contact Us" />
      <Info body={body} />
      <Form />
    </div>
  );
}
