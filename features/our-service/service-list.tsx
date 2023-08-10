import { assets } from "@/constants";
import { service_data } from "./data";
import Image from "next/image";
import Link from "next/link";

export default function ServiceList() {
  return (
    <div className="w-full flex justify-center my-20">
      <div className="container px-20 flex flex-wrap p-2 justify-center">
        {service_data.map((item) => (
          <div className="w-[calc(95%/3)] m-2 bg-zinc-100 rounded-xl p-8 py-12 bg-white" key={item._id}>
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
    </div>
  )
}
