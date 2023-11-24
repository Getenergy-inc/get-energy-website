"use client";
import BeforeFooterAction from "@/components/common/before-footer";
import Logo from "@/components/logo";
import { DASHBOARD_URL } from "@/constants/variables";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const GetElectricity = () => {
  const vendingTypes = [
    "Community Vending",
    "Green Energy",
    "Power generation",
    "Solar powered system",
    "Distribution of Meters communities. ",
    "CNG Gas Generator",
  ];

  const benefits = [
    "Empowering Communities",
    "Enhanced Accessibility",
    "Convenient Payment Methods",
    "Quick Issue Resolution",
  ];

  const whyReasons = [
    "Seamless Transactions: Quick, secure, and easy electricity token purchases.",
    "Community-Focused: Tailored solutions for estates and gated communities.",
    "Smart Metering: Take control of your energy consumption with our advanced meters.",
    "Green Power Options: Embrace a sustainable future with our green energy solutions.",
  ];

  const [meterNumber, setMeterNumber] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    window.open(`${DASHBOARD_URL}`, "");
  };

  return (
    <>
      <header>
        <div className="w-full relative">
          <div className="w-full relative max-h-[35rem] overflow-hidden lg:-top-10">
            <Image
              src={"/images/bg/get-elect.png"}
              alt="container-img"
              width={1400}
              height={490}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative w-full h-full container mx-auto">
            <div className="md:absolute -bottom-8 mt-10 md:mt-0 left-0 container mx-auto">
              <div className="md:shadow-xl shadow-lg rounded-xl p-8 bg-white max-w-[30rem] z-50">
                <div className="space-y-16">
                  <div className="space-y-6">
                    <h3 className="font-bold text-xl">Get Electricity Swiftly!!</h3>
                    <div className="">
                      <label htmlFor="meterNumber">Meter Number</label>
                      <input
                        type="text"
                        className="w-full border bg-transparent text-sm p-3 outline-none focus:border-zinc-500 transition-colors duration-300 rounded-lg border-zinc-200"
                        placeholder="Enter Meter Number"
                        value={meterNumber}
                        onChange={(e) => setMeterNumber(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    {meterNumber.length > 5 ? (
                      <Link href={`${DASHBOARD_URL}/dashboard/get-energy`} target="_blank">
                        <button className="w-full rounded-full text-white bg-primaryBlue transition-colors duration-200 hover:bg-primaryBlueHover py-3">
                          Proceed
                        </button>
                      </Link>
                    ) : (
                      <button className="w-full rounded-full text-white bg-primaryBlue/50 transition-colors duration-200 hover:bg-primaryBlueHover/50 py-3">
                        Proceed
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex h-full z-[100] -mt-[32rem] md:-mt-0 absolute md:static items-center justify-between container">
              <div></div>
              <div className="shadow-2xl rounded-2xl">
                <Logo classnames="bg-white shadow-2xl p-3 px-10 rounded-2xl " size={200} />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="space-y-32 my-32">
          <div className="grid md:grid-cols-2 gap-4 container mx-auto items-center">
            <div className="space-y-4">
              <h1 className="md:text-5xl text-4xl font-bold">Electricity Vending with a Difference</h1>
              <p className="leading-relaxed text-lg">
                At GetEnergy, we redefine the way you power up your life. Say goodbye to the hassle and hello to
                convenience! <br />
                With our cutting-edge app, purchasing electricity tokens for your DISCO has never been smoother. Fast,
                secure, and hassle-free. That&apos;s the GetEnergy promise!
              </p>

              <button
                className="flex items-center gap-2 bg-primaryBlue rounded-md px-4 py-2 text-white"
                onClick={() => window.open(`${DASHBOARD_URL}/dashboard/get-energy`, "")}
              >
                <span>Get Started</span>
                <ArrowRight size={20} />
              </button>
            </div>
            <div className="grid place-content-center">
              <Image
                src={"/images/bg/our-s-round.svg"}
                alt="spiral showing get energy's motive"
                width={500}
                height={500}
                // className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="md:grid flex flex-col-reverse grid-cols-2 gap-10 container mx-auto items-center">
            <div className="grid place-content-center">
              <Image src={"/images/bg/get-com.png"} alt="spiral showing get energy's motive" width={700} height={700} />
            </div>
            <div className="space-y-4">
              <h2 className="text-5xl font-bold">Community Energy Management </h2>
              <p className="leading-relaxed text-lg">
                Transform your community with our Community Electricity Vending service, ensuring reliable power access
                for all. Together, let&apos;s empower communities, light up lives, and build a sustainable future.{" "}
                <br />
                Below are what we offer to communities:-
              </p>

              <div className="space-y-4">
                {vendingTypes.map((data, id) => (
                  <div key={id} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full shadow-lg bg-white text-xl font-bold grid place-content-center">
                      {id + 1}
                    </div>
                    <p className="font-semibold">{data}</p>
                  </div>
                ))}
              </div>

              <button
                className="flex items-center gap-2 bg-primaryBlue rounded-md px-4 py-2 text-white"
                onClick={() => window.open(`${DASHBOARD_URL}/dashboard/get-energy`, "")}
              >
                <span>Get Started</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          <div className="bg-primaryBlue text-white">
            <div className="grid-cols-2 grid md:gap-20 gap-2">
              <div className="flex items-center md:pl-28 pl-4 justify-center text-center py-8">
                <div className="space-y-4">
                  <p className="md:text-2xl text-[100%] leading-relaxed font-semibold">
                    Revitalize your power routine with <span className="font-bold">GetEnergy</span>! Vend seamlessly and
                    unlock the door to monthly surprises.
                  </p>

                  <button
                    className="gap-2 bg-white text-primaryBlue rounded-xl px-4 py-3 font-bold"
                    onClick={() => window.open(`${DASHBOARD_URL}/dashboard/get-energy`, "")}
                  >
                    Get Started
                  </button>
                </div>
              </div>
              <div>
                <Image
                  src={"/images/bg/happy-family.png"}
                  alt="happy family"
                  width={500}
                  height={500}
                  draggable={false}
                  className="z-50 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 container mx-auto">
            <div className="space-y-5">
              <h3 className="text-4xl font-bold">Benefits from Community Electricity Vending</h3>
              <p className="leading-relaxed text-lg">
                You can explore the benefits we offer to various <br /> communities
              </p>

              <div className="space-y-4">
                {benefits.map((data, id) => (
                  <div key={id} className="flex items-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="39" viewBox="0 0 38 39" fill="none">
                      <path
                        d="M18.8376 3.69531C10.1823 3.69531 3.14062 10.737 3.14062 19.3923C3.14062 28.0476 10.1823 35.0893 18.8376 35.0893C27.4929 35.0893 34.5346 28.0476 34.5346 19.3923C34.5346 10.737 27.4929 3.69531 18.8376 3.69531ZM15.6998 26.3194L10.982 21.6117C10.3686 20.9997 10.3674 20.0063 10.9792 19.3928C11.5914 18.7788 12.5855 18.7777 13.1991 19.3902L15.6966 21.8834L22.8968 14.6832C23.5097 14.0703 24.5035 14.0703 25.1164 14.6832C25.7293 15.2961 25.7293 16.2898 25.1164 16.9027L15.6998 26.3194Z"
                        fill="#2FAB73"
                      />
                    </svg>
                    <p className="font-semibold">{data}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full space-y-4 border rounded-xl p-6 bg-white shadow-2xl z-20">
              <div>
                <p className="font-bold text-xl">Community Electricity Vending</p>
              </div>
              <form onSubmit={onSubmit}>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="font-medium text-sm" htmlFor="communityName">
                        Community Name
                      </label>
                      <input
                        type="text"
                        className="w-full outline-none p-3 rounded-sm border border-zinc-200"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-medium text-sm" htmlFor="fullName">
                        Representative Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full outline-none p-3 rounded-sm border border-zinc-200"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-medium text-sm" htmlFor="communityAddress">
                      Community Address
                    </label>
                    <input type="text" className="w-full outline-none p-3 rounded-sm border border-zinc-200" required />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="font-medium text-sm" htmlFor="cityOrTown">
                        City/Town
                      </label>
                      <input
                        type="text"
                        className="w-full outline-none p-3 rounded-sm border border-zinc-200"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-medium text-sm" htmlFor="country">
                        Country
                      </label>
                      <input
                        type="text"
                        className="w-full outline-none p-3 rounded-sm border border-zinc-200"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="font-medium text-sm" htmlFor="phoneNumber">
                        Mobile Number
                      </label>
                      <input
                        type="text"
                        className="w-full outline-none p-3 rounded-sm border border-zinc-200"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-medium text-sm" htmlFor="email">
                        Email address
                      </label>
                      <input
                        type="text"
                        className="w-full outline-none p-3 rounded-sm border border-zinc-200"
                        required
                      />
                    </div>
                  </div>
                </div>

                <Link href={`${DASHBOARD_URL}/dashboard/get-energy`} target="_blank">
                  <div className="flex item-center mt-5 justify-center">
                    <button className="w-full rounded-full text-white bg-primaryBlue transition-colors duration-200 hover:bg-primaryBlueHover py-3">
                      Proceed
                    </button>
                  </div>
                </Link>
              </form>
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-4 gap-12 container mx-auto items-center">
            <div className="grid place-content-center">
              <Image src={"/images/bg/why-get.png"} alt="why choose get energy" width={500} height={500} />
            </div>
            <div className="space-y-6">
              <h3 className="text-4xl font-bold">Why Choose GetEnergy?</h3>
              <p className="leading-relaxed text-lg">
                You can explore why to Choose GetEnergy for your <br /> Electricity Services
              </p>

              <div className="space-y-4 pr-8">
                {whyReasons.map((data, id) => (
                  <div key={id} className="flex items-center gap-4 max-w-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="39" viewBox="0 0 38 39" fill="none">
                      <path
                        d="M18.8376 3.69531C10.1823 3.69531 3.14062 10.737 3.14062 19.3923C3.14062 28.0476 10.1823 35.0893 18.8376 35.0893C27.4929 35.0893 34.5346 28.0476 34.5346 19.3923C34.5346 10.737 27.4929 3.69531 18.8376 3.69531ZM15.6998 26.3194L10.982 21.6117C10.3686 20.9997 10.3674 20.0063 10.9792 19.3928C11.5914 18.7788 12.5855 18.7777 13.1991 19.3902L15.6966 21.8834L22.8968 14.6832C23.5097 14.0703 24.5035 14.0703 25.1164 14.6832C25.7293 15.2961 25.7293 16.2898 25.1164 16.9027L15.6998 26.3194Z"
                        fill="#2FAB73"
                      />
                    </svg>
                    <p className="font-semibold text-lg">{data}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <BeforeFooterAction text="Ready to experience the future of power? Let’s get started with GetEnergy!" />
        </div>
      </main>
    </>
  );
};

export default GetElectricity;
