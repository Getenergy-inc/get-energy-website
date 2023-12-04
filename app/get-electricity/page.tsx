import BeforeFooterAction from "@/components/common/before-footer";
import Image from "next/image";
import MeterInput, { ElectMeterInput2 } from "@/features/get-electricity/get-electricity-form";
import ElectVending from "@/features/get-electricity/electricity-vending";
import { benefits, vendingTypes, whyReasons } from "@/lib/store/lists";
import GetStartedBtn from "@/features/get-electricity/get-started-btn";

const GetElectricity = () => {
  return (
    <>
      <header>
        <div className="w-full relative">
          <div className="w-full relative min-h-[20rem] md:min-h-[34rem] overflow-hidden lg:-top-10 pb-10 grid place-content-center">
            <div className="absolute top-0 left-0 w-full h-full">
              <Image
                src={"/images/bg/get-elect.png"}
                alt="container-img"
                width={1400}
                height={490}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 md:hidden flex items-center justify-center text-center">
              <p className="text-shadow font-extrabold space-y-1">
                <span className={`text-white lg:text-5xl md:text-4xl`}>GetEnergy Pay</span>
                <br /> <span className="text-lg font-bold text-white">Where Bills Are Settled in a Click</span>
              </p>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black/20 hidden md:block"></div>
            {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#fdfdfd] via-transparent via-10% md:block flex items-center justify-center text-center"></div> */}
          </div>

          <div className="absolute -top-5 left-0 w-full h-full hidden place-content-center mx-auto px-4 md:grid">
            <div className="w-full h-full grid grid-cols-2 gap-10 container mx-auto">
              <div className="flex items-center">
                <h1 className="text-white text-shadow text-4xl font-extrabold">
                  GetEnergy Pay: <br /> Where Bills Are Settled in a Click
                </h1>
              </div>
              <div>
                <div className="md:min-h-[16rem]">
                  <div className="relative w-full h-full container mx-auto">
                    <div className="top-0 mt-20 md:mt-0 left-0">
                      <MeterInput />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="md:min-h-[16rem] block md:hidden">
          <div className="relative w-full h-full container mx-auto">
            <div className="md:absolute top-0 mt-20 md:mt-0 left-0">
              <ElectMeterInput2 />
            </div>
          </div>
        </div>
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

              <GetStartedBtn />
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

              <GetStartedBtn />
            </div>
          </div>

          <div className="bg-primaryBlue relative text-white min-h-[20rem] overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full md:hidden">
              <Image
                src={"/images/bg/happy-family.png"}
                alt="happy family"
                width={700}
                height={700}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="duration-300 bg-black/50 md:bg-transparent absolute top-0 left-0 w-full h-full"></div>
            <div className="grid-cols-2 grid md:gap-20 gap-2 absolute top-0 left-0 w-full h-full">
              <div className="flex items-center md:pl-28 col-span-2 md:col-span-1 justify-center text-center md:py-8 py-10">
                <div className="space-y-6">
                  <p className="md:text-2xl text-[100%] leading-relaxed font-semibold">
                    Revitalize your power routine with <span className="font-bold">GetEnergy</span>! Vend seamlessly and
                    unlock the door to monthly surprises.
                  </p>

                  <GetStartedBtn />
                </div>
              </div>
              <div className="hidden md:block overflow-hidden rounded-l-[4rem]">
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

            <ElectVending />
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
