import { User2Icon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function HowItWorks() {
  const [selectedStep, setSelectedStep] = useState(1);
  const stepsData = [
    { label: "Create account", id: 1 },
    { label: "Explore Services", id: 2 },
    { label: "Buy, Trade, Recharge", id: 3 },
  ];

  return (
    <section className="bg-primaryBlue py-[4rem] text-white mt-40">
      <div className="w-full container mx-auto">
        <div className="max-w-3xl text-center mx-auto space-y-3 text-white">
          <p className="text-primaryBlue font-bold px-7 py-4 w-fit mx-auto rounded-full bg-white/90">How it Works</p>
          <h3 className="font-bold text-white text-4xl">
            Our Working Process helps you to get the best from our platform
          </h3>
        </div>

        <div className="grid grid-cols-3 gap-12 mt-10">
          {stepsData.map((data) => (
            <div key={data.id}>
              <button
                className={`${
                  selectedStep === data.id ? "bg-white text-primaryBlue" : "hover:bg-white hover:text-primaryBlue"
                } py-5 text-lg font-semibold border-2 w-full rounded-xl transition-colors duration-300`}
                onClick={() => setSelectedStep(data.id)}
              >
                0{data.id}. {data.label}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-10 px-16">
          <div className="space-y-10">
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
          </div>
          <div>
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
          </div>
        </div>
      </div>
    </section>
  );
}
