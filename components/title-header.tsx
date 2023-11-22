import Image from "next/image";
import Logo from "./logo";
import { TransitionOpacity, TransitionParentInViewSlow } from "@/lib/utils/transitions";

type TitleHeaderProps = {
  type: string;
  location: string;
  title: string;
};

export default function TitleHeader(props: TitleHeaderProps) {
  const pickImage = () => {
    switch (props.type) {
      case "1":
        return "/images/bg/about-us-cover.png";
      case "2":
        return "/images/bg/our-service.png";
      case "3":
        return "/images/bg/contact-us.png";
      default:
        return "";
    }
  };

  return (
    <TransitionParentInViewSlow className="w-full relative flex items-center justify-center">
      <div className="w-full relative -top-10">
        <Image
          src={pickImage()}
          alt="container-img"
          width={1024}
          height={304}
          className="w-full h-[400px] md:h-auto object-cover"
        />
      </div>

      <TransitionOpacity className="w-full hidden md:flex h-full absolute top-0 items-center justify-between container">
        <div></div>
        <div className="logo_shine">
          <Logo classnames="bg-white shadow-2xl p-3 px-10 rounded-2xl title_header_con" size={250} />
        </div>
      </TransitionOpacity>

      <TransitionOpacity className="absolute -bottom-14 container">
        <h1 className="p-4 md:p-0 text-6xl 2xl:text-7xl font-extrabold main-text title_header_con w-5/6 md:w-2/6 lg:w-1/6">
          {props.title}
        </h1>
      </TransitionOpacity>
    </TransitionParentInViewSlow>
  );
}
