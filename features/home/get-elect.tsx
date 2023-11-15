"use client";
import { billsData, ecommerceData, electricityData, investInEnergyData, vendingData } from "./data";
import PhoneIcon from "@/components/common/icons/phone.icon";
import WifiIcon from "@/components/common/icons/wifi.icon";
import GovernmentPaymentIcon from "@/components/common/icons/government-payment.icon";
import CableIcon from "@/components/common/icons/cable.icon";
import ReligiousInstitutionsIcon from "@/components/common/icons/religious-institutions.icon";
import ExamsPaymentIcon from "@/components/common/icons/exams-payment.icon";
import WaterPaymentIcon from "@/components/common/icons/water-payment.icon";
import BettingLotteryIcon from "@/components/common/icons/betting-lottery.icon";
import { useState } from "react";
import { ArrowUp, ArrowUpIcon } from "lucide-react";
import Image from "next/image";

export default function GetElectricitySection() {
  const billsAction = [
    { label: "Airtime", icon: <PhoneIcon /> },
    { label: "Data", icon: <WifiIcon /> },
    { label: "Government Payments", icon: <GovernmentPaymentIcon /> },
    { label: "Cable TV", icon: <CableIcon /> },
    { label: "Religious Institutions", icon: <ReligiousInstitutionsIcon /> },
    { label: "Exams Payment", icon: <ExamsPaymentIcon /> },
    { label: "Water Payment", icon: <WaterPaymentIcon /> },
    { label: "Betting & Lottery", icon: <BettingLotteryIcon /> },
  ];

  const [selectedAction, setSelectedAction] = useState<number | null>(null);
  const selectAction = (id: number) => {
    if (selectedAction && id === selectedAction) {
      setSelectedAction(null);
      return;
    }

    setSelectedAction(id);
  };

  return (
    <div className="space-y-52 mt-40">
      <div className="grid grid-cols-2 gap-6">
        <div className="w-full h-full relative">
          <div className="w-full h-full absolute top-0 left-0">
            {/* Balls */}
            <div className="w-20 h-20 bg-primaryBlue rounded-full left-[7rem] top-10 absolute"></div>
            <div className="w-6 h-6 bg-primaryBlue/60 rounded-full left-[15rem] -top-[.5rem] absolute"></div>
          </div>
          <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center">
            <div className="shadow-xl rounded-xl my-auto p-8 ml-auto bg-white z-50 w-3/5 min-h-3/5 m-auto">
              <div className="space-y-16">
                <div className="space-y-6">
                  <h3 className="font-bold text-xl">Buy Electricity Swiftly</h3>
                  <div className="">
                    <label htmlFor="meterNumber">Meter Number</label>
                    <input
                      type="text"
                      className="w-full border bg-transparent text-sm p-3 outline-none focus:border-zinc-500 transition-colors duration-300 rounded-lg border-zinc-200"
                      placeholder="Enter Meter Number"
                    />
                    <p className="text-zinc-400 text-sm">Must be between 7-11 digits</p>
                  </div>
                </div>

                <button className="w-full rounded-full text-white bg-primaryBlue transition-colors duration-200 hover:bg-primaryBlueHover py-3">
                  Proceed
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="space-y-8">
            <h3 className="font-bold text-4xl">Get Electricity</h3>
            <div className="space-y-6">
              {electricityData.map((data, i) => (
                <div key={i} className="flex items-center gap-8">
                  <div className="flex-shrink-0 w-12 rounded-full h-12 shadow-xl bg-white flex items-center justify-center">
                    <span className="font-bold text-2xl">{i + 1}.</span>
                  </div>
                  <div className="space-y-3 max-w-lg">
                    <p className="text-xl font-semibold">{data.title}</p>
                    <p className="text-zinc-400 leading-loose text-lg">{data.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-20">
        <div>
          <div className="space-y-8">
            <h3 className="font-bold text-4xl">Pay Bills</h3>
            <div className="space-y-6">
              {billsData.map((data, i) => (
                <div key={i} className="flex items-center gap-8">
                  <div className="flex-shrink-0 w-12 rounded-full h-12 shadow-xl bg-white flex items-center justify-center">
                    <span className="font-bold text-2xl">{i + 1}.</span>
                  </div>
                  <div className="space-y-3 max-w-lg">
                    <p className="text-xl font-semibold">{data.title}</p>
                    <p className="text-zinc-400 leading-loose text-lg">{data.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8">
          <div className="relative w-full h-full">
            {/* <div className="absolute top-0 left-0 w-full h-full -z-10 bg-red-800 scale-125"></div> */}
            <div className="w-11/12 h-full bg-white border shad-lg rounded-md px-12 py-8 relative">
              {/* Logos */}
              <div className="absolute -top-10 left-10 w-16 h-16 rounded-xl border bill-action grid place-content-center bg-white/50 p-2 backdrop-blur-md -rotate-12">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src={"/images/logos/mtn.png"}
                    alt="mtn logo"
                    width={50}
                    height={50}
                    className="w-full h-full object-cover select-none"
                    draggable={false}
                  />
                </div>
              </div>
              <div className="absolute top-1/2 -right-[87px] w-16 h-16 rounded-xl border shadow-2xl grid place-content-center p-2 backdrop-blur-md -rotate-12">
                <div className="w-full border aspect-square rounded-xl overflow-hidden bill-action">
                  <Image
                    src={"/images/logos/dstv.png"}
                    alt="mtn logo"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover select-none"
                    draggable={false}
                  />
                </div>
              </div>

              {/* Content */}
              <p className="font-bold text-xl">Buy Bills Swiftly</p>

              <div className="grid grid-cols-4 gap-x-10 gap-y-8 py-6">
                {billsAction.map((action, i) => (
                  <div key={i}>
                    <div className="flex items-center select-none w-full h-auto aspect-square justify-center">
                      <div className="w-[70%] flex items-center justify-center h-auto aspect-square">
                        <div
                          className={`${
                            selectedAction === i + 1 ? "bg-[#c4c9d3]" : "bg-transparent"
                          } bill-action w-full h-full flex cursor-pointer backdrop-blur-sm items-center transition-colors justify-center aspect-square rounded-2xl`}
                          onClick={() => selectAction(i + 1)}
                        >
                          <div className="w-[70%] bg-[#98A2B3] rounded-2xl flex items-center justify-center aspect-square">
                            <span>{action.icon}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-center text-sm">{action.label}</p>
                  </div>
                ))}
              </div>
              <div className="w-1/2 mx-auto mt-5">
                <button
                  className={`${
                    selectedAction && "animate-bounce [animation-duration:1s]"
                  } rounded-full text-white bg-primaryBlue transition-colors duration-200 hover:bg-primaryBlueHover py-3 text-sm w-full`}
                >
                  Proceed
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div></div>
        <div>
          <div className="space-y-8">
            <h3 className="font-bold text-4xl">Energy E-commerce</h3>
            <div className="space-y-6">
              {ecommerceData.map((data, i) => (
                <div key={i} className="flex items-center gap-8">
                  <div className="flex-shrink-0 w-12 rounded-full h-12 shadow-xl bg-white flex items-center justify-center">
                    <span className="font-bold text-2xl">{i + 1}.</span>
                  </div>
                  <div className="space-y-3 max-w-lg">
                    <p className="text-xl font-semibold">{data.title}</p>
                    <p className="text-zinc-400 leading-loose text-lg">{data.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid place-content-center">
              <button className="font-bold text-primaryBlue px-6 py-3 rounded-xl bg-primaryBlue/20">
                Join Wait List
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-20">
        <div className="relative">
          {/* Boxes */}
          <div className="w-6 h-6 bg-primaryBlue rounded rotate-45 absolute -top-32 left-10"></div>
          <div className="w-3 h-3 bg-primaryBlue/40 rounded rotate-45 absolute -top-40 left-1/2"></div>
          <div className="w-3 h-3 bg-primaryBlue rounded absolute top-1/2 right-10"></div>

          <div className="space-y-8">
            <h3 className="font-bold text-4xl">Invest in:</h3>
            <div className="space-y-6">
              {investInEnergyData.map((data, i) => (
                <div key={i} className="flex items-center gap-8">
                  <div className="flex-shrink-0 w-12 rounded-full h-12 shadow-xl bg-white flex items-center justify-center">
                    <span className="font-bold text-2xl">{i + 1}.</span>
                  </div>
                  <div className="space-y-3 max-w-lg">
                    <p className="text-xl font-semibold">{data.title}</p>
                    <p className="text-zinc-400 leading-loose text-lg">{data.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid place-content-center">
              <button className="font-bold text-primaryBlue px-6 py-3 rounded-xl bg-primaryBlue/20">
                Join Wait List
              </button>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center -mt-10">
          <div className="absolute bottom-20 py-4 px-8 text-sm bg-white shadow-xl -left-10 rounded-xl">
            <div className="flex items-center gap-16 justify-between">
              <p className="font-medium">Investment</p>
              <p className="flex items-center gap-2 text-green-500">
                <ArrowUpIcon /> <span>12%</span>
              </p>
            </div>

            <div className="mt-2">
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="flex items-center justify-between text-zinc-400">
                  <p>N200,000</p>
                  <p>May 29, 2023</p>
                </div>
              ))}
            </div>
          </div>

          <Image
            src={"/images/bg/man-holding-piggy-bank.png"}
            alt="a guy holding a piggy bank"
            width={400}
            height={600}
            draggable={false}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-20">
        <div className="relative flex justify-center -mt-8"></div>

        <div className="relative">
          {/* <div className="w-6 h-6 bg-primaryBlue rounded rotate-45 absolute -top-32 left-10"></div>
          <div className="w-3 h-3 bg-primaryBlue/40 rounded rotate-45 absolute -top-40 left-1/2"></div>
          <div className="w-3 h-3 bg-primaryBlue rounded absolute top-1/2 right-10"></div> */}

          <div className="space-y-8">
            <h3 className="font-bold text-4xl">Community Electricity Vending</h3>
            <div className="space-y-6">
              {vendingData.map((data, i) => (
                <div key={i} className="flex items-center gap-8">
                  <div className="flex-shrink-0 w-12 rounded-full h-12 shadow-xl bg-white flex items-center justify-center">
                    <span className="font-bold text-2xl">{i + 1}.</span>
                  </div>
                  <div className="space-y-3 max-w-lg">
                    <p className="text-xl font-semibold">{data.title}</p>
                    <p className="text-zinc-400 leading-loose text-lg">{data.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid place-content-center">
              <button className="font-bold text-primaryBlue px-6 py-3 rounded-xl bg-primaryBlue/20">
                Join Wait List
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
