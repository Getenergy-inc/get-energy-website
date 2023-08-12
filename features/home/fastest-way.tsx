import { assets } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function FastestWay() {
  return (
    <div className="hidden lg:flex py-20 w-full items-center">
      <div className="w-7/12">
        <h1 className="text-5xl font-bold pe-60 leading-[50px] mb-10">
          Fastest Way To Buy Airtime Or Data
        </h1>
        <Link href="/quick-buy" className="main-button p-3 px-10 rounded-full">
          Get Recharged
        </Link>
      </div>
      <div className="w-5/12">
        <div className="w-3/4 relative">
          <Image
            src={assets.frame_6}
            alt="landing-img"
            className="w-full"
          />

          <Image
            src={assets.frame_7}
            alt="landing-img"
            className="absolute top-32 -left-52"
          />

          <Image
            src={assets.frame_8}
            alt="landing-img"
            className="absolute bottom-0 -right-20"
          />
        </div>
      </div>
    </div>
  )
}
