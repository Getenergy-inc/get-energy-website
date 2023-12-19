import BeforeFooterAction from "@/components/common/before-footer";
import BeforeProcess from "@/components/common/before-process";
import Logo from "@/components/logo";
import InvestIn from "@/features/invest/invest-in";
import InvestProcess from "@/features/invest/process";
import Image from "next/image";

export const metadata = {
  title: "Invest",
  description: `Explore Investment Opportunities at GetEnergy. Our Invest page invites you to be part of the energy revolution. Discover lucrative options, fuel your financial growth, and contribute to a sustainable future. Invest confidently with GetEnergy – Empowering Your Portfolio for a Bright Tomorrow.`,
  alternates: {
    canonical: "/invest",
  },
};

const Invest = () => {
  return (
    <>
      <header className="relative">
        <Image
          src={"/images/bg/invest-bg.png"}
          alt="background"
          width={1980}
          height={700}
          className="w-full h-full object-cover absolute -z-[1] top-0 left-0"
        />
        <div className="flex items-center md:py-48 py-20 justify-center container mx-auto sm:w-4/5">
          <div className="text-white/80 space-y-2 pb-4 text-center">
            <h1 className="font-extrabold md:text-5xl text-3xl leading-relaxed">
              Invest in Power, Invest in the Future: Your Gateway to{" "}
              <span className="text-white">Energy Commodities!</span>
            </h1>
          </div>
        </div>
      </header>
      <main>
        <Logo
          classnames="bg-white shadow-2xl p-3 px-10 rounded-2xl title_header_con hidden md:block ml-auto -mt-10"
          size={250}
        />

        <div className="container mx-auto space-y-36 my-32">
          <InvestIn />

          <div className="md:grid flex flex-col-reverse items-center grid-cols-2 relative gap-16">
            <div className="md:p-10 z-50">
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
              <h2 className="md:text-4xl text-3xl leading-relaxed font-bold">
                Tokenization: Your Passport to Eventful Investments
              </h2>
              <p className="md:text-xl text-base leading-loose text-zinc-600">
                Experience the power of tokenization! 🚀 Your investments are tokenized, making them flexible, secure,
                and easily tradable. Join events, track your portfolio, and watch your investments thrive in real-time.
              </p>
            </div>

            <Line />
          </div>

          <div className="grid items-center relative md:grid-cols-2 gap-16">
            <div className="space-y-5">
              <h2 className="text-4xl leading-relaxed font-bold">Investment Insurance: Your Safety Net</h2>
              <p className="md:text-xl text-base leading-loose text-zinc-600">
                Your investments, your security! GetEnergy introduces investment insurance to safeguard your financial
                interests. Enjoy peace of mind as you invest in the future of energy.
              </p>
            </div>
            <div className="md:p-10 z-50 relative">
              <Image
                src={"/images/bg/invest-main-man.png"}
                alt="a guy holding a piggy bank"
                width={500}
                height={500}
                draggable={false}
                className="z-50 w-full h-full object-cover"
              />
            </div>

            <Line2 />
          </div>

          <div className="min-h-[25rem] gap-4 rounded-2xl bg-primaryBlue px-5 md:p-0 z-50 grid grid-cols-3">
            <div className="md:col-span-2 col-span-3 md:pl-10 py-10 z-50">
              <div className="w-full h-full bg-white/80 min-h-[28rem] rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-full">
                  <Image
                    src={"/images/bg/calculator.svg"}
                    alt="calculator coming soon"
                    width={500}
                    height={500}
                    draggable={false}
                    className="z-50 w-full h-full object-cover"
                  />
                </div>

                <div className="absolute top-0 left-0 h-full w-full backdrop-blur grid place-content-center">
                  <div className="space-y-4 text-center px-16">
                    <h4 className="md:text-3xl text-xl font-bold leading-relaxed">
                      Investment Calculator (Coming Soon!)
                    </h4>
                    <p className="md:text-lg text-sm font-semibold">
                      Stay tuned for our Investment Calculator! A tool designed to empower you with insights – calculate
                      potential returns, assess risks, and plan your investment journey with confidence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:grid place-content-center hidden md:p-6 z-50">
              <Image
                src={"/images/bg/money.svg"}
                alt="currencies with naira at the center"
                width={300}
                height={300}
                draggable={false}
              />
            </div>
          </div>

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

const Line = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="797"
    height="491"
    viewBox="0 0 797 491"
    fill="none"
    className="absolute hidden md:block top-[60%] left-56"
  >
    <path
      d="M34.8414 2L12.4872 2V2C6.69528 2 2.00002 6.69526 2.00002 12.4872L2.00002 136.648L2.00003 181.832L2.00003 230.719L2.00002 295C2.00002 311.569 15.4315 325 32 325L699.085 325L717.74 325C734.309 325 747.74 338.431 747.74 355L747.74 458.979C747.74 483.352 775.809 497.024 795 482V482"
      stroke="url(#paint0_linear_5902_53250)"
      strokeWidth="3.73"
    />
    <defs>
      <linearGradient
        id="paint0_linear_5902_53250"
        x1="1.97117"
        y1="150.842"
        x2="2.55395"
        y2="150.842"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#003B6D" />
        <stop offset="0.0001" stopColor="#014A87" stop-opacity="0.880208" />
        <stop offset="1" stopColor="#003B6D" />
      </linearGradient>
    </defs>
  </svg>
);

const Line2 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="376"
    height="746"
    viewBox="0 0 376 746"
    fill="none"
    className="absolute hidden md:block top-[30%] -right-10"
  >
    <path
      opacity="0.8"
      d="M231 2H332C355.196 2 374 20.804 374 44V376.876V702C374 725.196 355.196 744 332 744H0"
      stroke="url(#paint0_linear_5768_39636)"
      strokeWidth="3.72899"
    />
    <defs>
      <linearGradient
        id="paint0_linear_5768_39636"
        x1="-634.289"
        y1="958.539"
        x2="-634.289"
        y2="1417.07"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#003B6D" />
        <stop offset="0.0314417" stopColor="#557C9E" />
        <stop offset="0.828125" stopColor="#003B6D" />
        <stop offset="0.880208" stopColor="#001E37" />
        <stop offset="0.959393" stopColor="#003B6D" />
      </linearGradient>
    </defs>
  </svg>
);

export default Invest;
