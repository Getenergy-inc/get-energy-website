"use client";
import * as React from "react";
import { assets } from "@/constants";
import { service_data } from "./data";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import PopoverList from "./popover-list";

export default function ServiceList() {
  return (
    <React.Fragment>
      <div className="w-full flex justify-center my-20">
        <div className="container px-4 lg:px-20 flex flex-wrap p-2 justify-center">
          {service_data.map((item) => (
            <div
              className="w-full md:w-[calc(94%/2)] lg:w-[calc(95%/3)] m-2 rounded-xl p-8 py-12 bg-white"
              key={item._id}
            >
              <Image alt="our-service-img" src={item.icon} className="mb-4" />
              <h3 className="w-full font-bold text-xl">{item.title}</h3>
              <p className="w-full text-gray-600 text-sm mt-2">{item.body}</p>
              <Link className="mt-6 flex items-center hover:underline" href={item.link.url}>
                <Image src={assets.arrow_right} alt="arrow-right" className="me-2" />
                <p>{item.link.title}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant={"ghost"} className="main-text font-bold shadow-xl">
              <span className="me-2">See all</span>
              <Image src={assets.see_all} alt="see-all" width={20} />
            </Button>
          </PopoverTrigger>
          <PopoverList />
        </Popover>
      </div>
    </React.Fragment>
  );
}
