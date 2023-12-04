"use client";

import { DASHBOARD_URL } from "@/constants/variables";
import Link from "next/link";

const ElectVending = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    window.open(`${DASHBOARD_URL}`, "");
  };

  return (
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
              <input type="text" className="w-full outline-none p-3 rounded-sm border border-zinc-200" required />
            </div>
            <div className="space-y-2">
              <label className="font-medium text-sm" htmlFor="fullName">
                Representative Full Name
              </label>
              <input type="text" className="w-full outline-none p-3 rounded-sm border border-zinc-200" required />
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
              <input type="text" className="w-full outline-none p-3 rounded-sm border border-zinc-200" required />
            </div>
            <div className="space-y-2">
              <label className="font-medium text-sm" htmlFor="country">
                Country
              </label>
              <input type="text" className="w-full outline-none p-3 rounded-sm border border-zinc-200" required />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="font-medium text-sm" htmlFor="phoneNumber">
                Mobile Number
              </label>
              <input type="text" className="w-full outline-none p-3 rounded-sm border border-zinc-200" required />
            </div>
            <div className="space-y-2">
              <label className="font-medium text-sm" htmlFor="email">
                Email address
              </label>
              <input type="text" className="w-full outline-none p-3 rounded-sm border border-zinc-200" required />
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
  );
};

export default ElectVending;
