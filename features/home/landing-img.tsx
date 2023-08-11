import { assets } from "@/constants";
import Image from "next/image";

export default function LandingImage() {
  return (
    <div className="md:w-3/5 lg:4/5 xl:w-4/5 2xl:w-4/6 h-full relative z-10">
      <>
        <Image
          src={assets.landing_2}
          alt="landing-img"
          className="w-full absolute -top-5 left-10"
        />
        <Image
          src={assets.landing_1}
          alt="landing-img"
          className="w-full relative z-20"
        />
      </>

      <>
        <Image
          src={assets.frame_1}
          alt="landing-img"
          className="w-2/4 absolute top-10 lg:top-20 -left-14 lg:-left-20 z-30"
        />

        <Image
          src={assets.frame_4}
          alt="landing-img"
          className="w-2/4 absolute top-44 lg:top-80 -left-14 lg:-left-20 z-30"
        />
      </>


      <>
        <Image
          src={assets.frame_5}
          alt="landing-img"
          className="w-2/4 absolute top-0 lg:top-10 -right-14 lg:-right-28 z-30"
        />

        <Image
          src={assets.frame_3}
          alt="landing-img"
          className="w-2/4 absolute top-32 lg:top-56 -right-14 lg:-right-28 z-30"
        />

        <Image
          src={assets.frame_2}
          alt="landing-img"
          className="w-2/4 absolute z-30 top-60 lg:top-96 -right-14 lg:-right-28 z-30"
        />
      </>
    </div>
  )
}
