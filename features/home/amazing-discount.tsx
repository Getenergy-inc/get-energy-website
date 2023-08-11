import { assets } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function AmazingDiscount() {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center py-10">
      <div className="w-full lg:w-1/2 p-2 lg:p-0 flex justify-center lg:justify-start">
        <Image src={assets.map} alt="map" />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col p-4 lg:p-10">
        <p className="font-bold self-start p-2 mb-5 rounded-full px-4 text-sm bg-violet-200 main-text">
          Up To 25% Off
        </p>
        <h1 className="font-bold text-3xl leading-[40px]">
          Get Amazing Discount on Energy Equipment
        </h1>
        <p className="mt-5 text-gray-600 leading-[30px]">
          Discover a wide range of energy equipment,
          including renewable energy technologies,
          energy-efficient solutions, smart meters,
          and more. We partner with trusted suppliers
          to offer high-quality equipment that meets
          industry standards. Whether you are seeking
          energy-efficient solutions for your business
          or looking to invest in renewable energy
          technologies, we have the products you need.
        </p>

        <Link href="/" className="main-text hover:underline mt-5 text-sm">
          Get Started
        </Link>
      </div>
    </div>
  )
}
