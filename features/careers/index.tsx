"use client";

import TitleHeader from "@/components/title-header";
import { INTERN_FORM_URL } from "@/constants/variables";
import { TransitionOpacity, TransitionOpacityAlone, TransitionParentInViewFast } from "@/lib/utils/transitions";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type JobType = "Full Time" | "Intern" | "Contract";

const CareersContent = () => {
  const jobHeads = ["Intern", "Contract", "Full Time"];
  const [current, setCurrent] = useState(jobHeads[0]);
  const [index, setIndex] = useState(0);

  const jobContent = [
    [
      { duration: "6 Weeks - 6 Months Training", role: "Positions Available", type: "Intern" },
      { duration: "Part Time", role: "Positions Available", type: "Volunteer" },
    ],
    [],
    [],
  ];

  return (
    <>
      <header>
        <TitleHeader title="Careers" type="4" location="Careers" />
      </header>
      <main className="my-28">
        <div className="space-y-16">
          <div>
            <h2 className="text-3xl font-bold text-center">Current job open positions</h2>

            <div className="flex items-center gap-8 mt-5 justify-center">
              {jobHeads.map((data, id) => (
                <div
                  key={id}
                  className={`font-semibold border-b-[3px] pb-1 px-1 cursor-pointer ${
                    current === data ? "border-primaryBlue" : "border-zinc-100 hover:border-zinc-300"
                  } duration-500`}
                  onClick={() => {
                    setCurrent(data as JobType);
                    setIndex(id);
                  }}
                >
                  {data}
                </div>
              ))}
            </div>

            {jobContent[index].length > 0 ? (
              <TransitionParentInViewFast className="grid md:grid-cols-2 gap-12 container mx-auto mt-16 md:px-32">
                {jobContent[index].map((data, id) => (
                  <div
                    key={id}
                    className="rounded-2xl p-12 group border border-primaryBlue duration-200 hover:bg-primaryBlue hover:text-white"
                  >
                    <p className="font-bold text-xl">
                      {data.role} <span className="text-sm font-light">({data.type})</span>
                    </p>
                    <div className="md:text-lg flex items-center md:gap-4 gap-2">
                      <p>Lagos, Nigeria</p> <span>|</span> <span>{data.duration}</span>
                    </div>

                    <div>
                      <Link href={INTERN_FORM_URL}>
                        <button className="mt-8 px-7 py-3 rounded-full border-2 group-hover:border-white hover:bg-white hover:text-primaryBlue duration-200 border-primaryBlue">
                          Apply Now
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </TransitionParentInViewFast>
            ) : (
              <TransitionOpacityAlone className="grid place-content-center select-none">
                <Image src={"/images/bg/no-vacancy.png"} alt="no vacancy" width={400} height={400} draggable={false} />

                <p className="font-bold text-center text-xl mt-2">No Vacancy Available</p>
              </TransitionOpacityAlone>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default CareersContent;
