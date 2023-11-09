import { TransitionOpacity, TransitionOpacityAlone, TransitionParentInViewSlow } from "@/lib/utils/transitions";

export default function HowItWorks() {
  return (
    <div className="w-full flex justify-center my-20">
      <div className="container flex flex-col lg:flex-row items-center">
        <TransitionParentInViewSlow className="w-full lg:w-1/2 p-10">
          <TransitionOpacity>
            <h6 className="main-text font-bold text-center lg:text-start">How It Works</h6>
          </TransitionOpacity>
          <TransitionOpacity>
            <p className="text-2xl lg:text-4xl mt-4 me-0 lg:me-20 text-center lg:text-start font-bold">
              Our Working Process helps you to get the best from our platform
            </p>
          </TransitionOpacity>
        </TransitionParentInViewSlow>
        <TransitionOpacityAlone className="w-full lg:w-1/2 pe-0 lg:pe-20 p-4 lg:p-0">
          <p className="text-xl text-center lg:text-start pe-0 lg:pe-20 text-gray-500">
            With our vast knowledge in Energy and other commodity we offer amazing and best platform for our customers.
          </p>
        </TransitionOpacityAlone>
      </div>
    </div>
  );
}
