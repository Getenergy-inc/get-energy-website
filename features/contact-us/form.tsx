"use client";
import Image from "next/image";
import { assets } from "@/constants";
import { FaArrowCircleRight } from "react-icons/fa";
import { SubmitHandler, useForm } from "react-hook-form";

interface InputType {
  name: string;
  email: string;
  message: string;
}

export default function Form() {
  const data = [
    {
      _id: "contact-1",
      text: "info@getenergy.com.ng",
      icon: "/images/bg/get-energy-contact.png",
    },
    {
      _id: "contact-2",
      text: "+2349544343443",
      icon: assets.contact_icon_2,
    },
    {
      _id: "contact-3",
      text: "Lagos, Nigeria",
      icon: assets.contact_icon_3,
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputType>();

  const onSubmit: SubmitHandler<InputType> = (values) => {};

  return (
    <div className="w-full flex justify-center my-10">
      <div className="container shadow-lg bg-white grid-cols-5 lg:gap-24 md:gap-20 md:grid flex flex-col-reverse relative">
        <div className="col-span-2 px-8 w-full py-16 my-4 mx-2 bg-primaryBlue text-white rounded-lg p-4 relative overflow-hidden">
          <div className="flex flex-col gap-8">
            {data.map((item) => (
              <div className="flex items-center gap-1" key={item._id}>
                <Image src={item.icon} alt="contact-us" className="me-3" width={50} height={50} />
                <p className="text-white text-sm font-semibold">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center relative -right-1/2 -bottom-10">
            <div className="absolute top-0 left-0 flex items-center w-64 h-64 justify-center">
              <div className="bg-white/10 rounded-full w-full h-full"></div>
            </div>
            <div className="absolute top-[74px] left-[51px] flex items-center w-52 h-52 justify-center">
              <div className="bg-white/10 rounded-full w-full h-full"></div>
            </div>
          </div>
        </div>

        <div className="w-full col-span-3 mx-auto  rounded-2xl">
          <div className="w-full h-full p-10">
            <h2 className="text-5xl font-medium">Contact Us</h2>
            <p className="text-gray-700 my-4">We offer 24/7 Services to our customers</p>

            <form className="w-full" onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="w-full grid md:grid-cols-2 gap-3 mt-10">
                <div>
                  <input
                    className="py-3 px-4 bg-white border-transparent drop-shadow-2xl w-full outline-none rounded-md duration-200"
                    placeholder="Your name"
                    type="text"
                    required
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Please provide your name",
                      },
                    })}
                  />
                  {errors.name && <p className="text-sm font-semibold text-red-500">{errors.name.message}</p>}
                </div>
                <div>
                  <input
                    className="py-3 px-4 bg-white border-transparent drop-shadow-2xl w-full outline-none rounded-md duration-200"
                    placeholder="Your email address"
                    type="email"
                    required
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Please provide your email address",
                      },
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email format",
                      },
                    })}
                  />
                  {errors.email && <p className="text-sm font-semibold text-red-500">{errors.email.message}</p>}
                </div>
              </div>
              <div>
                <textarea
                  className="mt-6 h-[180px] w-full drop-shadow-2xl border-transparent resize-none duration-200 outline-none rounded-lg p-3"
                  placeholder="Enter your message here..."
                  {...register("message", {
                    required: {
                      value: true,
                      message: "Message cannot be empty",
                    },
                  })}
                />
                {errors.message && <p className="text-sm font-semibold text-red-500">{errors.message.message}</p>}
              </div>

              <button className="mt-5 flex items-center group rounded-full p-2 ps-3 main-bg text-white">
                <p className="me-3">Send</p>
                <div className="group-hover:translate-x-1 duration-300">
                  <FaArrowCircleRight size="30px" />
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
