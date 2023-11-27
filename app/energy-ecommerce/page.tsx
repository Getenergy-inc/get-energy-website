import Image from "next/image";
import WhyChooseEcommerce from "@/features/energy-ecommerce/why-choose";
import WhatsInIt from "@/features/energy-ecommerce/what-in-it";

import "./style.css";
import BeforeProcess from "@/components/common/before-process";
import EnergyEcomProcess from "@/features/energy-ecommerce/process";
import BeforeFooterAction, { JoinForm } from "@/components/common/before-footer";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { XIcon } from "lucide-react";

const EnergyEcommerce = () => {
  return (
    <>
      <header className="" id="energy-ecom">
        <div className="grid md:grid-cols-5 min-h-[30rem] container mx-auto">
          <div className="flex items-center md:col-span-3 relative">
            <div className="text-white space-y-2 pb-4 text-center md:text-start">
              <h1 className="font-extrabold md:text-5xl text-4xl md:leading-relaxed">
                Energize Your Lifestyle with GetEnergy&apos;s E-Commerce Extravaganza!
              </h1>
              <p className="sm:text-base text-sm">
                Welcome to the Future of Energy Shopping – Welcome to GetEnergy E-Commerce!
              </p>

              <div className="rounded-full backdrop-blur-sm select-none text-sm md:text-base flex items-center gap-1 px-4 py-2 border border-white/10 w-fit shadow-md absolute bottom-5 left-4 md:left-0">
                <span className="w-2 h-2 rounded-full bg-white/50 md:block hidden"></span>{" "}
                <span>Discover, Connect, Transform: Your Energy, Your Choice</span>
              </div>
            </div>
          </div>

          <div className="col-span-2 -ml-48 md:block hidden">
            <Image
              src={"/images/bg/ecommerce-guy.png"}
              alt="a man holding A solar panel"
              width={700}
              height={700}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>
      <main className="pb-32 space-y-32">
        <section className="mt-28">
          <h2 className="text-3xl text-center font-bold">Why Choose GetEnergy E-Commerce?</h2>
          <WhyChooseEcommerce />
        </section>

        <WhatsInIt />

        <div className="container mx-auto sm:grid flex flex-col-reverse grid-cols-2 overflow-hidden">
          <div
            id="energy-expo"
            className="flex items-center w-full p-5 h-full rounded-b-md sm:rounded-b-none sm:rounded-l-[3rem]"
          >
            <div className="sm:px-10 space-y-8">
              <h4 className="text-4xl font-bold text-white">Join the Annual Energy Expo</h4>

              <AlertDialog>
                <AlertDialogTrigger>
                  <button className="flex items-center gap-4 px-6 py-3 rounded-full font-semibold bg-white/80 text-primaryBlue">
                    <span>Join Waitlist</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                      <path d="M7.10156 1.09375L12.0049 5.99705L7.10156 10.9004" fill="#003B6D" />
                      <path
                        d="M7.10156 1.09375L12.0049 5.99705L7.10156 10.9004"
                        stroke="#003B6D"
                        strokeWidth="1.86761"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path d="M12.0017 6.03906L1.57031 6.03906L12.0017 6.03906Z" fill="#003B6D" />
                      <path
                        d="M12.0017 6.03906L1.57031 6.03906"
                        stroke="#003B6D"
                        strokeWidth="1.86761"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      <div className="flex items-center justify-between">
                        <p className="font-extrabold">Join Waitlist</p>
                        <AlertDialogCancel>
                          <XIcon />
                        </AlertDialogCancel>
                      </div>
                    </AlertDialogTitle>
                  </AlertDialogHeader>
                  <AlertDialogDescription>
                    <JoinForm />
                  </AlertDialogDescription>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
          <div className="sm:max-h-[25rem] max-h-[20rem] sm:rounded-l-none rounded-t-lg sm:rounded-r-[3rem] overflow-hidden">
            <Image
              src={"/images/bg/energy-expo.png"}
              alt="a man in a conference holding A mich"
              width={700}
              height={700}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <BeforeProcess
          headline="Our Working Process helps you to get the best from our platform"
          description="Explore GetEnergy's E-Commerce Wonderland: Effortless Energy Shopping Awaits!"
        />

        <EnergyEcomProcess />

        <BeforeFooterAction
          text="Discover Our Energy Marketplace, Join our wait list"
          actionText="Join Waitlist"
          actionType="waitlist"
        />
      </main>
    </>
  );
};

export default EnergyEcommerce;
