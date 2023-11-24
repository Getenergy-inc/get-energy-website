import Image from "next/image";
import PhoneIcon from "@/components/common/icons/phone.icon";
import WifiIcon from "@/components/common/icons/wifi.icon";
import GovernmentPaymentIcon from "@/components/common/icons/government-payment.icon";
import CableIcon from "@/components/common/icons/cable.icon";
import ReligiousInstitutionsIcon from "@/components/common/icons/religious-institutions.icon";
import ExamsPaymentIcon from "@/components/common/icons/exams-payment.icon";
import WaterPaymentIcon from "@/components/common/icons/water-payment.icon";
import BettingLotteryIcon from "@/components/common/icons/betting-lottery.icon";
import { billsData } from "./data";
import { useState } from "react";
import { RightToLeftSVG } from "@/components/common/ltr";
import {
  TransitionFromBottom,
  TransitionFromRightAloneSlow,
  TransitionOpacity,
  TransitionOpacityAlone,
  TransitionParentInView,
  TransitionParentInViewFast,
  TransitionParentInViewSlow,
} from "@/lib/utils/transitions";
import Link from "next/link";
import { DASHBOARD_URL } from "@/constants/variables";

const PayBills = () => {
  const [selectedAction, setSelectedAction] = useState<number | null>(null);
  const selectAction = (id: number) => {
    if (selectedAction && id === selectedAction) {
      setSelectedAction(null);
      return;
    }

    setSelectedAction(id);
  };

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

  return (
    <section className="grid md:grid-cols-2 gap-20 relative" id="pay-bills">
      <div>
        <div className="space-y-8">
          <TransitionOpacityAlone>
            <h3 className="font-bold text-4xl">Pay Bills</h3>
          </TransitionOpacityAlone>
          <TransitionParentInView className="space-y-6">
            {billsData.map((data, i) => (
              <TransitionOpacity key={i} className="flex items-center gap-8">
                <div className="flex-shrink-0 w-12 rounded-full h-12 md:shadow-xl shadow-lg bg-white flex items-center justify-center">
                  <span className="font-bold text-2xl">{i + 1}.</span>
                </div>
                <div className="space-y-3 max-w-lg">
                  <p className="text-xl font-semibold">{data.title}</p>
                  <p className="text-zinc-400 leading-loose text-lg">{data.description}</p>
                </div>
              </TransitionOpacity>
            ))}
          </TransitionParentInView>
        </div>
      </div>

      <TransitionFromRightAloneSlow className="pt-8 z-50">
        <div className="relative w-full h-full">
          {/* Logos and shapes */}
          <TransitionParentInViewSlow>
            <TransitionOpacity className="absolute -top-16 left-10 w-16 h-16 rounded-xl border bill-action grid place-content-center bg-white/50 p-2 backdrop-blur-md -rotate-12">
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
            </TransitionOpacity>
            <TransitionOpacity className="absolute top-1/2 -right-[48px] w-16 h-16 rounded-xl border shadow-2xl grid place-content-center p-2 backdrop-blur-md -rotate-12">
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
            </TransitionOpacity>
            <TransitionOpacity className="absolute -top-5 left-40 w-32 h-32 rounded-full bg-primaryBlue"></TransitionOpacity>
            <TransitionOpacity className="absolute -top-10 right-60 w-5 h-5 rounded-full bg-primaryBlue/60"></TransitionOpacity>
            <TransitionOpacity className="absolute bottom-20 right-10 w-2 h-2 rounded-full bg-primaryBlue/30"></TransitionOpacity>
            <TransitionOpacity className="absolute bottom-10 right-8 w-2 h-2 rounded-full bg-primaryBlue/30"></TransitionOpacity>
          </TransitionParentInViewSlow>

          {/* Content */}
          <div className="w-11/12 h-full bg-white z-50 border shad-lg rounded-md md:px-12 px-6 md:py-8 py-4 relative">
            <p className="font-bold text-xl">Buy Bills Swiftly</p>

            <TransitionParentInViewFast className="grid grid-cols-4 md:gap-x-10 gap-x-5 md:gap-y-8 gap-y-4 py-6">
              {billsAction.map((action, i) => (
                <TransitionFromBottom key={i}>
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

                  <p className="text-center md:text-sm text-xs">{action.label}</p>
                </TransitionFromBottom>
              ))}
            </TransitionParentInViewFast>
            <div className="w-1/2 mx-auto md:mt-5 mt-3">
              {selectedAction ? (
                <Link href={`${DASHBOARD_URL}/dashboard/get-energy`} target="_blank">
                  <button
                    className={`${
                      selectedAction && "animate-bounce [animation-duration:1s]"
                    } rounded-full text-white bg-primaryBlue text-xs transition-colors duration-200 hover:bg-primaryBlueHover py-3 md:text-sm w-full`}
                  >
                    Proceed
                  </button>
                </Link>
              ) : (
                <button
                  className={`${
                    selectedAction && "animate-bounce [animation-duration:1s]"
                  } rounded-full text-white bg-primaryBlue/50 text-xs transition-colors duration-200 py-3 md:text-sm w-full`}
                >
                  Proceed
                </button>
              )}
            </div>
          </div>
        </div>
      </TransitionFromRightAloneSlow>

      <div className="absolute top-[30%] left-[4%] z-10">
        <RightToLeftSVG />
      </div>
    </section>
  );
};

export default PayBills;
