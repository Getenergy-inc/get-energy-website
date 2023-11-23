"use client";

import BeforeFooterAction from "@/components/common/before-footer";
import BeforeProcess from "@/components/common/before-process";
import Bills from "@/features/pay-bills/bills";
import BillsProcess from "@/features/pay-bills/process";
import Image from "next/image";

const whyReasons = [
  { heading: "Wide Range of Services", body: "Pay for everything in one place, no more jumping between apps." },
  { heading: "Secure Transactions", body: "Your financial data, our top priority. Feel safe with every payment." },
  { heading: "Time-Saving Convenience", body: "No more queues or late fees – pay bills on your schedule." },
  { heading: "Transparent Tracking", body: "Stay in the know with real-time updates on your payments." },
];

const PayBills = () => {
  return (
    <>
      <header>
        <div className="bg-[#afb7c6]">
          <div className="grid grid-cols-2 container mx-auto">
            <div className="flex items-center">
              <div className="space-y-6">
                <h1 className="text-5xl font-bold">Pay Bills, Your Way!</h1>
                <p>
                  Dreading the monthly bill payment marathon? Fear not! GetEnergy brings you a one-stop solution for all
                  your payments, putting you back in control of your time and finances.{" "}
                </p>
              </div>
            </div>
            <div>
              <Image
                src={"/images/bg/pay-bills.png"}
                alt="a woman holding a phone with getenergy's logo"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="my-32 space-y-32">
          <Bills />

          <div className="grid grid-cols-2 gap-4 container mx-auto items-center">
            <div className="space-y-6">
              <h3 className="text-4xl font-bold">Why Choose GetEnergy for Bill Payments?</h3>

              <div className="space-y-4 pr-8">
                {whyReasons.map((data, id) => (
                  <div key={id} className="flex items-center gap-4 max-w-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="39" viewBox="0 0 38 39" fill="none">
                      <path
                        d="M18.8376 3.69531C10.1823 3.69531 3.14062 10.737 3.14062 19.3923C3.14062 28.0476 10.1823 35.0893 18.8376 35.0893C27.4929 35.0893 34.5346 28.0476 34.5346 19.3923C34.5346 10.737 27.4929 3.69531 18.8376 3.69531ZM15.6998 26.3194L10.982 21.6117C10.3686 20.9997 10.3674 20.0063 10.9792 19.3928C11.5914 18.7788 12.5855 18.7777 13.1991 19.3902L15.6966 21.8834L22.8968 14.6832C23.5097 14.0703 24.5035 14.0703 25.1164 14.6832C25.7293 15.2961 25.7293 16.2898 25.1164 16.9027L15.6998 26.3194Z"
                        fill="#2FAB73"
                      />
                    </svg>
                    <p className="text-lg leading-relaxed">
                      <span className="font-semibold">{data.heading}:</span> {data.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid place-content-center">
              <Image src={"/images/bg/get-energy-bill.png"} alt="a man looking at his phone" width={500} height={500} />
            </div>
          </div>

          <div className="w-full flex justify-center">
            <BeforeProcess
              headline="Our Working Process helps you to get the best from our platform"
              description="Simplify Your Life: The Seamless Way PayBills Works to Ease Your Financial Transactions"
            />
          </div>

          <BillsProcess />

          <BeforeFooterAction text="Ready to Unleash the Power of Effortless Payments? Join the GetEnergy revolution." />
        </div>
      </main>
    </>
  );
};

export default PayBills;
