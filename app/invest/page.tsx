import BeforeFooterAction from "@/components/common/before-footer";
import BeforeProcess from "@/components/common/before-process";
import Logo from "@/components/logo";
import InvestIn from "@/features/invest/invest-in";
import InvestProcess from "@/features/invest/process";
import Image from "next/image";

const Invest = () => {
  return (
    <>
      <header id="invest-jumbo">
        <div className="flex items-center py-40 justify-center container mx-auto w-4/5">
          <div className="text-white/80 space-y-2 pb-4 text-center">
            <h1 className="font-extrabold text-5xl leading-relaxed">
              Invest in Power, Invest in the Future: Your Gateway to{" "}
              <span className="text-white">Energy Commodities!</span>
            </h1>
          </div>
        </div>
      </header>
      <main>
        <Logo classnames="bg-white shadow-2xl p-3 px-10 rounded-2xl title_header_con ml-auto -mt-10" size={250} />

        <div className="container mx-auto space-y-32 my-32">
          <InvestIn />

          <div className="grid items-center grid-cols-2 gap-16">
            <div className="p-10">
              <Image
                src={"/images/bg/hand-coin.png"}
                alt="a guy holding a piggy bank"
                width={500}
                height={500}
                draggable={false}
                className="z-50 w-full h-full object-cover"
              />
            </div>
            <div className="space-y-5">
              <h2 className="text-4xl leading-relaxed font-bold">
                Tokenization: Your Passport to Eventful Investments
              </h2>
              <p className="text-xl leading-loose text-zinc-600">
                Experience the power of tokenization! 🚀 Your investments are tokenized, making them flexible, secure,
                and easily tradable. Join events, track your portfolio, and watch your investments thrive in real-time.
              </p>
            </div>
          </div>

          <div className="grid items-center grid-cols-2 gap-16">
            <div className="space-y-5">
              <h2 className="text-4xl leading-relaxed font-bold">Investment Insurance: Your Safety Net</h2>
              <p className="text-xl leading-loose text-zinc-600">
                Experience the power of tokenization! 🚀 Your investments are tokenized, making them flexible, secure,
                and easily tradable. Join events, track your portfolio, and watch your investments thrive in real-time.
              </p>
            </div>
            <div className="p-10">
              <Image
                src={"/images/bg/invest-main-man.png"}
                alt="a guy holding a piggy bank"
                width={500}
                height={500}
                draggable={false}
                className="z-50 w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="min-h-[25rem] rounded-2xl bg-primaryBlue"></div>

          <BeforeProcess
            headline="How to Get Started"
            description="Explore GetEnergy's E-Commerce Wonderland: Effortless Energy Shopping Awaits!"
          />

          <InvestProcess />

          <BeforeFooterAction
            text={`Coming Soon!!!
            Join our wait list`}
            actionText="Join Waitlist"
            actionType="waitlist"
          />
        </div>
      </main>
    </>
  );
};

export default Invest;
