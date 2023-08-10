import { assets } from "@/constants";
import React from "react";
import Image from "next/image";
import Logo from "./logo";

type TitleHeaderProps = {
  type: "1" | "2"
  location: string
  title: string
}

export default function TitleHeader(props: TitleHeaderProps) {
  return (
    <div className="w-full relative flex items-center justify-center">
      <Image
        src={assets.container_img}
        alt="container-img"
        className="w-full"
      />
      <div className="w-full h-full absolute top-0 flex items-center justify-between container">
        <h1 className="text-xl">
          Home/<span className="underline">{props.location}</span>
        </h1>
        <Logo
          classnames="bg-white shadow-2xl p-3 px-10 rounded-2xl"
          size={250}
        />
      </div>

      <div className="absolute -bottom-14 container">
        <h1 className="text-6xl 2xl:text-7xl font-bold main-text w-1/6">
          {props.title}
        </h1>
      </div>
    </div>
  )
}
