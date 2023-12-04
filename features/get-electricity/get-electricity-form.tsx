"use client";
import { DASHBOARD_URL } from "@/constants/variables";
import Link from "next/link";
import { useState } from "react";

const MeterInput = () => {
  const [meterNumber, setMeterNumber] = useState("");

  return (
    <div className="md:shadow-xl shadow-lg rounded-xl p-8 bg-white max-w-[30rem] ml-auto z-50">
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
  );
};

export const ElectMeterInput2 = () => {
  const [meterNumber, setMeterNumber] = useState("");

  return (
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
  );
};

export default MeterInput;
