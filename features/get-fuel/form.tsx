"use client";

import { TransitionOpacityAlone } from "@/lib/utils/transitions";
import { useForm } from "react-hook-form";
import { FormEvent } from "react";
import { DASHBOARD_URL } from "@/constants/variables";

interface Inputs {
  communityName: string;
  fullName: string;
  communityAddress: string;
  city: string;
  country: string;
  phone: string;
  email: string;
}

const GetFuelForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    window.open(`${DASHBOARD_URL}`, "");
  };

  return (
    <div className="relative flex py-5 md:py-10 md:pl-10 justify-center max-w-3xl mx-auto ">
      <TransitionOpacityAlone className="w-full space-y-4 h-full p-6 bg-white border rounded-xl shadow-xl z-20">
        <TransitionOpacityAlone>
          <p className="font-bold text-xl">Get Fuel Swiftly!!</p>
        </TransitionOpacityAlone>
        <form onSubmit={onSubmit}>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="font-medium text-sm" htmlFor="communityName">
                  Name of Company/ Individual
                </label>
                <input
                  type="text"
                  className="w-full outline-none p-3 rounded-sm border border-zinc-200"
                  placeholder="Enter Buyer Name"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="font-medium text-sm" htmlFor="fullName">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="w-full outline-none p-3 rounded-sm border border-zinc-200"
                  placeholder="Enter Phone Number"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="font-medium text-sm" htmlFor="cityOrTown">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full outline-none p-3 rounded-sm border border-zinc-200"
                  placeholder="Enter Email"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="font-medium text-sm" htmlFor="country">
                  Address
                </label>
                <input
                  type="text"
                  className="w-full outline-none p-3 rounded-sm border border-zinc-200"
                  placeholder="Enter Address"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="font-medium text-sm" htmlFor="phoneNumber">
                  Select Fuel
                </label>
                <select
                  name=""
                  id=""
                  className="w-full outline-none text-zinc-500 p-3 rounded-sm border border-zinc-200"
                >
                  <option value="diesel">Diesel</option>
                  <option value="diesel">Gasoline</option>
                  <option value="diesel">Kerosene</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-medium text-sm" htmlFor="email">
                  Choose Liters
                </label>
                <input type="text" className="w-full outline-none p-3 rounded-sm border border-zinc-200" required />
              </div>
            </div>
          </div>

          <div className="flex item-center mt-5 justify-center">
            <button className="w-1/2 rounded-full text-white bg-primaryBlue transition-colors duration-200 hover:bg-primaryBlueHover py-3">
              Proceed
            </button>
          </div>
        </form>

        {/* <div className="absolute top-[60%] -left-[30%] -z-[1]">
          <svg xmlns="http://www.w3.org/2000/svg" width="1064" height="671" viewBox="0 0 1064 671" fill="none">
            <path
              d="M1015.32 2L1047.09 2V2C1055.33 2 1062 8.67388 1062 16.9065L1062 136.648L1062 181.832L1062 230.719L1062 295C1062 311.569 1048.57 325 1032 325L71.1592 325L31.9999 325C15.4314 325 1.99996 338.431 1.99996 355L1.99995 519L1.99994 671"
              stroke="url(#paint0_linear_6225_57957)"
              stroke-width="3.73"
            />
            <defs>
              <linearGradient
                id="paint0_linear_6225_57957"
                x1="1062.04"
                y1="150.842"
                x2="1061.21"
                y2="150.842"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#003B6D" />
                <stop offset="0.0001" stop-color="#014A87" stop-opacity="0.880208" />
                <stop offset="1" stop-color="#003B6D" />
              </linearGradient>
            </defs>
          </svg>
        </div> */}
      </TransitionOpacityAlone>
    </div>
  );
};

export default GetFuelForm;
