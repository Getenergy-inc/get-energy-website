import { TransitionOpacityAlone } from "@/lib/utils/transitions";
import Process from "./process";

const HowItWorksServices = () => {
  return (
    <div className="mt-40 container mx-auto">
      <div className="w-full grid md:grid-cols-2 items-center gap-8 p-12">
        <TransitionOpacityAlone>
          <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl">
            Our Working Process <br /> helps you to get the best from our platform
          </h3>
        </TransitionOpacityAlone>

        <TransitionOpacityAlone>
          <p className="mt-5 md:text-xl leading-8">
            With our vast knowledge in Energy and other commodity we offer amazing and best platform for our customers.
          </p>
        </TransitionOpacityAlone>
      </div>
      <Process />
    </div>
  );
};

export default HowItWorksServices;
