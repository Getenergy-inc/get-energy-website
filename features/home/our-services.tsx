import { service_data } from "../our-service/data";
import { assets } from "@/constants";
import { TransitionOpacity, TransitionParent, TransitionParentInView } from "@/lib/utils/transitions";
import Image from "next/image";
import Link from "next/link";

export default function OurService() {
  return (
    <div className="w-full p-2 lg:p-0">
      <div className="w-full main-bg rounded-xl p-5 md:p-12 flex flex-col lg:flex-row items-center my-10">
        <TransitionOpacity className="w-full lg:w-1/3 flex items-center justify-center">
          <h4 className="text-white text-3xl lg:text-5xl border-b-4 pb-1 border-white font-bold">Our Service</h4>
        </TransitionOpacity>
        <div className="mt-10 lg:mt-0 w-full lg:w-2/3">
          <TransitionParentInView className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-10">
            {service_data
              .filter((item) => item._id !== "service-3")
              .map((item) => (
                <TransitionOpacity className="w-full rounded-xl p-4 md:p-8 py-12 bg-white" key={item._id}>
                  <Image alt="our-service-img" src={item.icon} className="mb-4" />
                  <h4 className="w-full font-bold text-xl">{item.title}</h4>
                  <p className="w-full text-gray-600 text-sm mt-2">{item.body}</p>
                  <Link className="mt-6 flex items-center hover:underline" href={item.link.url}>
                    <Image src={assets.arrow_right} alt="arrow-right" className="me-2" />
                    <p>{item.link.title}</p>
                  </Link>
                </TransitionOpacity>
              ))}
          </TransitionParentInView>
          <div className="w-full flex justify-center my-10">
            <Link
              className="rounded-full border border-white p-3 px-10 text-white hover:bg-white hover:text-sky-800"
              href="/our-services"
            >
              See More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
