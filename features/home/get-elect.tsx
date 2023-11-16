"use client";
import { LeftToRightSVG } from "@/components/common/ltr";
import { electricityData } from "./data";

export default function GetElectricitySection() {
  return (
    <section id="get-electricity" className="relative">
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

      <div className="absolute top-[60%] left-[4%]">
        <LeftToRightSVG />
      </div>
    </section>
  );
}
