import { assets } from "@/constants";
import Image from "next/image";

export default function GlobalBrands() {
  const brands_data = [
    assets.brand1,
    assets.brand2,
    assets.brand3,
    assets.brand4,
    assets.brand5,
    assets.brand6,
  ];

  return (
    <div className="p-5 my-10 py-10 bg-zinc-100 flex items-center">
      <div className="w-1/2 flex justify-center">
        <h1 className="border-b-4 border-sky-800 text-4xl font-bold">
          Trusted by <span className="main-text">Global</span> Brands
        </h1>
      </div>

      <div className="w-1/2 grid grid-cols-3 gap-4">
        {brands_data.map((brand, idx) => (
          <Image
            src={brand}
            key={idx}
            alt="brand"
          />
        ))}
      </div>
    </div>
  )
}