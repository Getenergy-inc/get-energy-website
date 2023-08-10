import { assets } from "@/constants";
import { faq_data } from '../faq/data'
import Image from "next/image";
import FAQ from "../faq/faq";

export default function FAQs() {
  return (
    <div className="w-full my-10 p-5 py-10 border border-red-500">
      <div className="w-full flex items-center justify-center">
        <Image src={assets.faq} alt="faq" />
      </div>
      <div className="w-full mt-10 bg-zinc-100 rounded p-10 grid grid-cols-2 gap-4">
        {faq_data.map((item) => (
          <FAQ key={item._id} {...item} />
        ))}
      </div>
    </div>
  )
}