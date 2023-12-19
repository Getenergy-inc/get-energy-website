import Logo from "@/components/logo";
import GetFuelForm from "@/features/get-fuel/form";
import Image from "next/image";
import { LeftToRightSVG } from "@/components/common/ltr";
import FuelDescription from "@/features/get-fuel/description";
import BeforeFooterAction from "@/components/common/before-footer";

export const metadata = {
  title: "Get Fuel",
  description: `Get fuel at a very cheap and affordable price.`,
  alternates: {
    canonical: "/get-fuel",
  },
};

const GetFuel = () => {
  return (
    <>
      <header className="relative">
        <Image
          src={"/images/bg/get-fuel.png"}
          alt="background"
          width={1980}
          height={700}
          className="w-full h-full object-cover absolute -z-[1] top-0 left-0"
        />
        <div className="flex items-center md:py-32 mt-[5rem] py-20 justify-center container mx-auto sm:w-4/5">
          <div className="text-white/80 space-y-2 pb-4 text-center">
            <h1 className="font-bold md:text-5xl text-3xl leading-relaxed">
              Smart Fueling, Seamless Experience <br />
              <span className="text-white">GetFuel</span>
            </h1>
          </div>
        </div>
      </header>
      <main>
        <Logo
          classnames="bg-white shadow-2xl p-3 px-10 rounded-2xl title_header_con hidden md:block ml-auto -mt-10"
          size={250}
        />
        {/* marquee */}
        <section className="bg-zinc-100 w-full my-16">
          <div className="px-0 items-center overflow-hidden select-none">
            <div className="w-full flex overflow-hidden relative h-[50px]">
              <div className="m-scroll w-full flex items-center absolute">
                {[
                  "⛽️ Regular Gasoline: NGN 210 per liter",
                  "⛽️ Premium Gasoline: NGN 230 per liter",
                  "⛽️ Diesel: NGN 200 per liter",
                ].map((data, i) => (
                  <div key={i} className="mx-28">
                    <p>{data}</p>
                  </div>
                ))}
              </div>

              <div className="n-scroll w-full flex items-center absolute">
                {[
                  "⛽️ Regular Gasoline: NGN 210 per liter",
                  "⛽️ Premium Gasoline: NGN 230 per liter",
                  "⛽️ Diesel: NGN 200 per liter",
                ].map((data, i) => (
                  <div key={i} className="mx-28">
                    <p>{data}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="lg:space-y-60 md:space-y-48 space-y-20 my-10">
          <GetFuelForm />

          <FuelDescription />

          <div className="bg-primaryBlue text-white z-[100] grid md:grid-cols-2 items-center">
            <div className="overflow-hidden max-h-[40rem] h-full w-full pr-2">
              <Image
                src={"/images/bg/fuel_drop.png"}
                width={700}
                height={700}
                className="w-full h-full object-cover"
                alt="fuel drop"
              />
            </div>

            <div className="text-center md:py-10 py-5 md:px-16 px-8">
              <h3 className="font-bold text-4xl">Quality Assurance of Our Fuel</h3>

              {/* desktop */}
              <div className="mt-10 space-y-8 md:block hidden">
                <div className="flex items-center justify-between">
                  <div className="w-fit px-4 py-3 bg-white/80 font-semibold text-sm rounded-xl text-primaryBlue">
                    <p>Rigorous Testing Protocols</p>
                  </div>
                  <div className="w-fit px-4 py-3 bg-white/80 font-semibold text-sm rounded-xl text-primaryBlue">
                    <p>Adherence to Regulatory Standards</p>
                  </div>
                </div>
                <div className="flex items-center justify-between px-10">
                  <div className="w-fit px-4 py-3 bg-white/80 font-semibold text-sm rounded-xl text-primaryBlue">
                    <p>Certified Suppliers</p>
                  </div>
                  <div className="w-fit px-4 py-3 bg-white/80 font-semibold text-sm rounded-xl text-primaryBlue">
                    <p>Customer Feedback Integration</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 justify-center">
                  <div className="w-fit px-4 py-3 bg-white/80 font-semibold text-sm rounded-xl text-primaryBlue">
                    <p>Traceability & Transparency</p>
                  </div>
                  <div className="w-fit px-4 py-3 bg-white/80 font-semibold text-sm rounded-xl text-primaryBlue">
                    <p>Investment in Technology</p>
                  </div>
                </div>
              </div>

              {/* mobile */}
              <div className="mt-10  grid gap-4 md:hidden">
                <div className="w-full px-4 py-3 bg-white/80 font-semibold text-sm rounded-xl text-primaryBlue">
                  <p>Rigorous Testing Protocols</p>
                </div>
                <div className="w-full px-4 py-3 bg-white/80 font-semibold text-sm rounded-xl text-primaryBlue">
                  <p>Adherence to Regulatory Standards</p>
                </div>
                <div className="w-full px-4 py-3 bg-white/80 font-semibold text-sm rounded-xl text-primaryBlue">
                  <p>Certified Suppliers</p>
                </div>
                <div className="w-full px-4 py-3 bg-white/80 font-semibold text-sm rounded-xl text-primaryBlue">
                  <p>Customer Feedback Integration</p>
                </div>
                <div className="w-full px-4 py-3 bg-white/80 font-semibold text-sm rounded-xl text-primaryBlue">
                  <p>Traceability & Transparency</p>
                </div>
                <div className="w-full px-4 py-3 bg-white/80 font-semibold text-sm rounded-xl text-primaryBlue">
                  <p>Investment in Technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-10">
          <BeforeFooterAction text="Request a Fuel Delivery Today!!" actionText="Start Now" actionType="started" />
        </div>
      </main>
    </>
  );
};

export default GetFuel;
