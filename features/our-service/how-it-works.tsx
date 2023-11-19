import {
  TransitionFromRight,
  TransitionOpacity,
  TransitionParentInView,
  TransitionParentInViewFast,
} from "@/lib/utils/transitions";
import { User2Icon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { investInEnergyData } from "../home/data";

export default function HowItWorks() {
  const [selectedStep, setSelectedStep] = useState(1);
  const stepsData = [
    { label: "Create account", id: 1 },
    { label: "Explore Services", id: 2 },
    { label: "Buy, Trade, Recharge", id: 3 },
  ];

  const renderStepViewer = () => {
    switch (selectedStep) {
      case 1:
        return (
          <TransitionParentInView className="mt-16 grid grid-cols-2 gap-10 px-16">
            <TransitionOpacity className="space-y-10">
              <div className="flex gap-6">
                <div className="w-24 h-24 flex-shrink-0 bg-white/60 p-4 rounded-2xl">
                  <div className="w-full h-full bg-primaryBlue rounded-full grid place-content-center">
                    <User2Icon size={34} />
                  </div>
                </div>
                <p className="text-4xl font-semibold">
                  Create your <br /> account
                </p>
              </div>
              <p className="text-lg leading-relaxed max-w-[30rem]">
                Create an account and join our community of energy traders, investors, and suppliers. For amazing energy
                products
              </p>
              <button className="px-6 py-3 rounded-full border-2 border-white/50 hover:bg-white hover:text-primaryBlue transition-colors duration-300">
                Get Started
              </button>
            </TransitionOpacity>

            <TransitionOpacity>
              <div className="w-full bg-white rounded-[2rem] h-full">
                <div className="w-11/12 h-auto rounded-lg mx-auto overflow-hidden relative -bottom-10 shadow-xl">
                  <Image
                    src={"/images/bg/register.png"}
                    alt="get energy register page screenshot"
                    width={600}
                    height={400}
                    className="w-full h-full"
                    draggable={false}
                  />
                </div>
              </div>
            </TransitionOpacity>
          </TransitionParentInView>
        );
      case 2:
        return (
          <div>
            <TransitionParentInView className="mt-16 grid grid-cols-2 gap-10 px-16">
              <TransitionOpacity className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-24 h-24 flex-shrink-0 bg-white/60 p-4 rounded-2xl">
                    <div className="w-full h-full bg-primaryBlue rounded-full grid place-content-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path
                          d="M20.4258 3.00504C20.2564 3.02932 20.1096 3.14037 20.0391 3.30387L17.0391 10.3039C16.9741 10.4589 16.989 10.6355 17.082 10.7765C17.174 10.9165 17.332 11.0011 17.5 11.0011H20V15.5011C20 15.7381 20.1664 15.9434 20.3984 15.9914C20.4334 15.9984 20.467 16.0011 20.5 16.0011C20.697 16.0011 20.8809 15.8854 20.9609 15.6984L23.9609 8.6984C24.0259 8.5434 24.011 8.36574 23.918 8.22574C23.826 8.08474 23.668 8.00113 23.5 8.00113H21V3.50113C21 3.26413 20.8336 3.0589 20.6016 3.0109C20.5418 2.9984 20.4822 2.99694 20.4258 3.00504ZM8 15.0011C7.61994 15.0018 7.24347 15.0747 6.89062 15.216H6.88672L2 17.0011V25.0011L6.2207 23.1671C6.7187 22.9511 7.28216 22.9436 7.78516 23.1496L16.8496 26.8527C16.8503 26.8527 16.8509 26.8527 16.8516 26.8527C17.0539 26.9501 17.2755 27.0008 17.5 27.0011C17.7597 27.0006 18.0147 26.9326 18.2402 26.8039C18.2403 26.8038 18.2441 26.8039 18.2441 26.8039L27.2188 21.8175C27.2227 21.8156 27.2266 21.8136 27.2305 21.8117C27.5208 21.65 27.7492 21.3966 27.8799 21.0911C28.0106 20.7856 28.0361 20.4454 27.9525 20.1238C27.869 19.8022 27.681 19.5175 27.4181 19.3143C27.1552 19.1111 26.8323 19.001 26.5 19.0011C26.2797 19.002 26.0623 19.0513 25.8633 19.1457V19.1437L19 22.0011H17.5C17.8568 22.0009 18.2019 21.8734 18.4732 21.6416C18.7445 21.4098 18.9243 21.0889 18.9803 20.7365C19.0363 20.3841 18.9648 20.0233 18.7787 19.7188C18.5926 19.4143 18.304 19.1862 17.9648 19.0753V19.0734L9.27148 15.2824H9.26758C8.87065 15.0972 8.43799 15.0012 8 15.0011Z"
                          fill="#E1E3F9"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-4xl font-semibold">Explore Services</p>
                </div>
                <p className="text-lg leading-relaxed max-w-[30rem]">
                  Explore a range of energy solutions at GetEnergy.
                </p>
                <button className="px-6 py-3 rounded-full border-2 border-white/50 hover:bg-white hover:text-primaryBlue transition-colors duration-300">
                  Get Started
                </button>
              </TransitionOpacity>

              <TransitionOpacity>
                <div className="w-full px-6 py-8 bg-white text-black rounded-[2rem] h-full">
                  <TransitionParentInViewFast className="space-y-6">
                    {investInEnergyData.map((data, i) => (
                      <TransitionFromRight key={i} className="flex items-center gap-8">
                        <div className="flex-shrink-0 w-12 rounded-full h-12 shadow-xl bg-white flex items-center justify-center">
                          <span className="font-bold text-2xl">{i + 1}.</span>
                        </div>
                        <div className="space-y-3 max-w-lg">
                          <p className="text-xl font-semibold">{data.title}</p>
                          <p className="text-zinc-400 leading-loose text-lg">{data.description}</p>
                        </div>
                      </TransitionFromRight>
                    ))}
                  </TransitionParentInViewFast>
                </div>
              </TransitionOpacity>
            </TransitionParentInView>
          </div>
        );
      case 3:
        return (
          <TransitionParentInView className="mt-16 grid grid-cols-2 gap-10 px-16">
            <TransitionOpacity className="space-y-10">
              <div className="flex gap-6">
                <div className="w-24 h-24 flex-shrink-0 bg-white/60 p-4 rounded-2xl">
                  <div className="w-full h-full bg-primaryBlue rounded-full grid place-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                      <path
                        d="M16.4375 3.83594C15.575 3.83594 14.875 4.53594 14.875 5.39844V5.71094V14.9236L16.75 13.7236V7.58594C17.7856 7.58594 18.625 6.74656 18.625 5.71094H24.25C24.25 6.74656 25.0894 7.58594 26.125 7.58594V22.5859C25.0894 22.5859 24.25 23.4253 24.25 24.4609H18.625C18.625 23.5734 18.012 22.836 17.187 22.636L16.75 23.1047L14.9629 25.0176V25.0188L14.9067 25.0798C15.0505 25.7986 15.6812 26.3359 16.4375 26.3359H16.75H26.125H26.4375C27.3 26.3359 28 25.6359 28 24.7734V24.4609V5.71094V5.39844C28 4.53594 27.3 3.83594 26.4375 3.83594H26.125H16.75H16.4375ZM21.4375 7.58594C21.106 7.58594 20.788 7.71763 20.5536 7.95205C20.3192 8.18647 20.1875 8.50442 20.1875 8.83594C20.1875 9.16746 20.3192 9.4854 20.5536 9.71982C20.788 9.95424 21.106 10.0859 21.4375 10.0859C21.769 10.0859 22.087 9.95424 22.3214 9.71982C22.5558 9.4854 22.6875 9.16746 22.6875 8.83594C22.6875 8.50442 22.5558 8.18647 22.3214 7.95205C22.087 7.71763 21.769 7.58594 21.4375 7.58594ZM13.625 9.38647L9.4624 10.667C8.71865 10.8982 8.0563 11.3604 7.5813 11.9854L2.63135 18.499C2.4626 18.7178 2.375 18.9859 2.375 19.2546V25.0859C2.375 25.7734 2.9375 26.3359 3.625 26.3359L9.86279 26.3298C11.2503 26.3298 12.5689 25.7542 13.5127 24.7417L19.9434 17.8545C20.3121 17.467 20.4939 16.9676 20.4939 16.4739C20.4939 15.9301 20.2747 15.3857 19.8372 14.9919C19.1809 14.3919 18.1996 14.2986 17.4434 14.7673L14.2817 16.7864V16.7925L12.3811 18.0608C12.2936 18.117 12.1941 18.1604 12.1003 18.1792L12.0625 18.2048L12.0808 18.1865C12.0121 18.2053 11.9433 18.2109 11.8745 18.2109C11.5683 18.2109 11.2622 18.0613 11.0872 17.78C10.8059 17.3425 10.9316 16.7611 11.3691 16.4861L13.625 15.042V9.38647ZM21.4375 12.0293C20.325 12.0293 19.3315 12.498 18.719 13.2292C19.4502 13.2792 20.1369 13.5729 20.6807 14.0667C21.3557 14.6729 21.7439 15.5551 21.7439 16.4739C21.7439 17.0676 21.5874 17.6365 21.2874 18.1365C21.3374 18.1427 21.3875 18.1426 21.4375 18.1426C23.3375 18.1426 24.875 16.7734 24.875 15.0859C24.875 13.3984 23.3375 12.0293 21.4375 12.0293ZM21.4375 20.0859C21.106 20.0859 20.788 20.2176 20.5536 20.4521C20.3192 20.6865 20.1875 21.0044 20.1875 21.3359C20.1875 21.6675 20.3192 21.9854 20.5536 22.2198C20.788 22.4542 21.106 22.5859 21.4375 22.5859C21.769 22.5859 22.087 22.4542 22.3214 22.2198C22.5558 21.9854 22.6875 21.6675 22.6875 21.3359C22.6875 21.0044 22.5558 20.6865 22.3214 20.4521C22.087 20.2176 21.769 20.0859 21.4375 20.0859Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-4xl font-semibold">Buy, Trade, Recharge</p>
              </div>
              <p className="text-lg leading-relaxed max-w-[30rem]">
                Experience the power of convenience with GetEnergy&apos;s streamlined Buy, Trade, Recharge services for
                a hassle-free and efficient experience in purchasing electricity tokens, trading energy assets, and
                recharging utilities like airtime, data, or cable TV.
              </p>
              <button className="px-6 py-3 rounded-full border-2 border-white/50 hover:bg-white hover:text-primaryBlue transition-colors duration-300">
                Get Started
              </button>
            </TransitionOpacity>

            <TransitionOpacity>
              <div className="w-full bg-white overflow-hidden rounded-[2rem] h-full">
                <div className="w-11/12 h-auto mx-auto relative -bottom-5">
                  <Image
                    src={"/images/bg/you.png"}
                    alt="a man pointing forward"
                    width={600}
                    height={400}
                    className="w-full h-full"
                    draggable={false}
                  />
                </div>
              </div>
            </TransitionOpacity>
          </TransitionParentInView>
        );
      default:
        return null;
    }
  };

  return (
    <section className="bg-primaryBlue py-[4rem] text-white mt-40">
      <div className="w-full container mx-auto">
        <TransitionParentInViewFast className="max-w-3xl text-center mx-auto space-y-3 text-white">
          <TransitionOpacity>
            <p className="text-primaryBlue font-bold px-7 py-4 w-fit mx-auto rounded-full bg-white/90">How it Works</p>
          </TransitionOpacity>
          <TransitionOpacity>
            <h3 className="font-bold text-white text-4xl">
              Our Working Process helps you to get the best from our platform
            </h3>
          </TransitionOpacity>
        </TransitionParentInViewFast>

        <TransitionParentInViewFast className="grid grid-cols-3 gap-12 mt-10">
          {stepsData.map((data) => (
            <TransitionOpacity key={data.id}>
              <button
                className={`${
                  selectedStep === data.id ? "bg-white text-primaryBlue" : "hover:bg-white hover:text-primaryBlue"
                } py-5 text-lg font-semibold border-2 w-full rounded-xl transition-colors duration-300`}
                onClick={() => setSelectedStep(data.id)}
              >
                0{data.id}. {data.label}
              </button>
            </TransitionOpacity>
          ))}
        </TransitionParentInViewFast>

        {renderStepViewer()}
      </div>
    </section>
  );
}
