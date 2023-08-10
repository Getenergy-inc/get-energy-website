import { service_data } from '../our-service/data';
import { assets } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function OurService() {
  return (
    <div className="w-full main-bg rounded-xl p-12 flex items-center my-10">
      <div className="w-1/3 flex items-center justify-center">
        <h1 className="text-white text-5xl border-b-4 border-white">Our Service</h1>
      </div>
      <div className="w-2/3">
        <div className="w-full grid grid-cols-2 gap-10">
          {service_data.filter((item) => item._id !== "service-3").map((item) => (
            <div className="w-full rounded-xl p-8 py-12 bg-white" key={item._id}>
              <Image
                alt="our-service-img"
                src={item.icon}
                className="mb-4"
              />
              <h1 className="w-full font-bold text-xl">{item.title}</h1>
              <p className="w-full text-gray-600 text-sm mt-2">{item.body}</p>
              <Link className="mt-6 flex items-center hover:underline" href={item.link.url}>
                <Image
                  src={assets.arrow_right}
                  alt="arrow-right"
                  className="me-2"
                />
                <p>{item.link.title}</p>
              </Link>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center my-10">
          <Link className="rounded-full border border-white p-3 px-10 text-white hover:bg-white hover:text-sky-800" href="/">
            See More
          </Link>
        </div>
      </div>
    </div>
  )
}