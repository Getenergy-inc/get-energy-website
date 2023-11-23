"use client";
import { assets } from "@/constants";
import { TransitionOpacity, TransitionParentInView, TransitionParentInViewSlow } from "@/lib/utils/transitions";
import Image from "next/image";

const data = [
  {
    _id: "01",
    title: "Explore Categories",
    body: "Dive into our diverse range of energy products.",
  },
  {
    _id: "02",
    title: "Connect with Manufacturer",
    body: "Learn about the creators behind the energy revolution.",
  },
  {
    _id: "03",
    title: "Shop Securely",
    body: "Experience a secure and seamless shopping journey",
  },
  {
    _id: "04",
    title: "Annual Energy Expo",
    body: "Don't miss our grand showcase of innovation and energy excellence!",
  },
];

const EnergyEcomProcess = () => {
  return (
    <div className="w-full flex justify-center my-20 py-20">
      <TransitionParentInView className="container relative grid grid-cols-1 md:grid-cols-4 gap-2 lg:gap-12">
        {data.map((item) => (
          <TransitionOpacity className="lg:pe-10 text-center md:text-start mb-10 md:mb-0" key={item._id}>
            <div className="flex items-center mb-3 justify-center md:justify-start">
              <h4 className="main-text font-bold text-3xl me-2">{item._id}</h4>
              <h5 className="font-bold text-xl">{item.title}</h5>
            </div>
            <p className="text-gray-600 text-sm leading-[25px]">{item.body}</p>
          </TransitionOpacity>
        ))}

        <TransitionParentInViewSlow>
          <TransitionOpacity>
            <Image src={assets.arrow_u} alt="arrow" className="hidden lg:block absolute -bottom-32 left-20" />
          </TransitionOpacity>

          <TransitionOpacity>
            <Image src={assets.arrow_n} alt="arrow" className="hidden lg:block absolute -top-32 left-96" />
          </TransitionOpacity>

          <TransitionOpacity>
            <Image src={assets.arrow_u} alt="arrow" className="hidden lg:block absolute -bottom-32 right-52" />
          </TransitionOpacity>
        </TransitionParentInViewSlow>
      </TransitionParentInView>
    </div>
  );
};

export default EnergyEcomProcess;
