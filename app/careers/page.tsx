"use client";

import TitleHeader from "@/components/title-header";

const Careers = () => {
  return (
    <>
      <header>
        <TitleHeader title="Careers" type="4" location="Careers" />
      </header>
      <main className="my-28">
        <div className="space-y-28">
          <div>
            <h2 className="text-3xl font-bold text-center">Current job open positions</h2>

            <div className="flex items-center gap-4 mt-20 justify-center">
              {["Full Time", "Intern", "Contract"].map((data, id) => (
                <div key={id} className="font-semibold border-b-4 border-primaryBlue">
                  {data}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Careers;
