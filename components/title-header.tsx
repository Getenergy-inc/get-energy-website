import Image from "next/image";
import Logo from "./logo";
import { TransitionOpacity, TransitionParentInViewSlow } from "@/lib/utils/transitions";

type TitleHeaderProps = {
  type: "1" | "2";
  location: string;
  title: string;
};

export default function TitleHeader(props: TitleHeaderProps) {
  return (
    <TransitionParentInViewSlow className="w-full relative flex items-center justify-center">
      <Image
        src={props.type === "1" ? "/images/bg/container-img-1.png" : "/images/bg/quick-buy-img-1.png"}
        alt="container-img"
        width={1024}
        height={304}
        className="w-full h-[400px] md:h-auto object-cover"
      />

      <TransitionOpacity className="w-full hidden md:flex h-full absolute top-0 items-center justify-between container">
        <div></div>
        <Logo classnames="bg-white shadow-2xl p-3 px-10 rounded-2xl title_header_con" size={250} />
      </TransitionOpacity>

      <TransitionOpacity className="absolute -bottom-14 container">
        <h1 className="p-4 md:p-0 text-6xl 2xl:text-7xl font-extrabold main-text title_header_con w-5/6 md:w-2/6 lg:w-1/6">
          {props.title}
        </h1>
      </TransitionOpacity>
    </TransitionParentInViewSlow>
  );
}
