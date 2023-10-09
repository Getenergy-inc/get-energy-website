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
        <div className="p-5 my-10 py-10 px-0 bg-zinc-100 items-center overflow-hidden">
            <div className="w-full flex justify-center">
                <h1 className="border-b-4 border-sky-800 text-2xl lg:text-4xl font-bold">
                    Trusted by <span className="main-text">Global</span> Brands
                </h1>
            </div>

            <div className="mt-5 w-full flex overflow-hidden py-5 relative h-[200px]">
                <div className="m-scroll w-full flex items-center absolute">
                    {brands_data.map((brand, idx) => (
                        <div className="mx-10 cursor-pointer hover:scale-110"
                            style={{ transition: "0.4s ease-in-out all" }} key={idx}>
                            <Image
                                src={brand}
                                alt="brand"
                            />
                        </div>
                    ))}
                </div>

                <div className="n-scroll w-full flex items-center absolute">
                    {brands_data.map((brand, idx) => (
                        <div className="mx-10 cursor-pointer hover:scale-110"
                            style={{ transition: "0.4s ease-in-out all" }} key={idx + 20}>
                            <Image
                                src={brand}
                                alt="brand"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}