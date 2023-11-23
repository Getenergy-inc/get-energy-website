"use client";

import TitleHeader from "@/components/title-header";
import Image from "next/image";

const Careers = () => {
  return (
    <>
      <header>
        <TitleHeader title="Careers" type="4" location="Careers" />
      </header>
      <main className="my-28 select-none">
        <div className="space-y-16">
          <div>
            <h2 className="text-3xl font-bold text-center">
              Current job open positions
            </h2>

            <div className="flex items-center gap-4 mt-5 justify-center">
              {["Full Time", "Intern", "Contract"].map((data, id) => (
                <div
                  key={id}
                  className="font-semibold border-b-[3px] pb-1 px-1 cursor-pointer border-primaryBlue"
                >
                  {data}
                </div>
              ))}
            </div>

            <div className="grid place-content-center">
              <Image
                src={"/images/bg/no-vacancy.png"}
                alt="no vacancy"
                width={400}
                height={400}
                draggable={false}
              />

              <p className="font-bold text-center text-xl mt-2">
                No Vacancy Available
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Careers;
