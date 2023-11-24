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
      case "4":
        return "/images/bg/career.png";
      case "5":
        return "/images/bg/faq.jpg";
      default:
        return "";
    }
  };

  return (
    <TransitionParentInViewSlow className="w-full relative flex min-h-[20rem] items-center justify-center">
      <div className="w-full absolute top-0 left-0 h-full">
        <Image src={pickImage()} alt="container-img" width={1024} height={304} className="w-full h-full object-cover" />
      </div>

      <div className="bg-black/30 w-full absolute top-0 left-0 h-full"></div>

      <div className="w-full absolute top-0 left-0 h-full flex md:hidden items-center">
        <h1 className="p-4 md:p-0 text-shadow text-6xl 2xl:text-7xl text-white font-extrabold title_header_con">
          {props.title}
        </h1>
      </div>

      <div className="absolute top-0 w-full left-0 h-full hidden md:block">
        <TransitionOpacity className="hidden w-full h-full md:flex items-center justify-between container mx-auto">
          <h1 className="p-4 md:p-0 text-shadow text-6xl 2xl:text-7xl text-white font-extrabold title_header_con">
            {props.title}
          </h1>

          <div className="logo_shine rounded-2xl">
            <Logo classnames="bg-white shadow-2xl p-3 px-10 rounded-2xl title_header_con" size={250} />
          </div>
        </TransitionOpacity>
      </div>
    </TransitionParentInViewSlow>
  );
}
