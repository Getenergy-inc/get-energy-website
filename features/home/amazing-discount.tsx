import { Button } from "@/components/ui/button";
import { assets } from "@/constants";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "react-tooltip";
import { TransitionFromLeftAloneSlow, TransitionOpacity, TransitionParentInView } from "@/lib/utils/transitions";

export default function AmazingDiscount() {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center py-10">
      <TransitionFromLeftAloneSlow className="w-full lg:w-1/2 p-2 lg:p-0 flex justify-center lg:justify-start">
        <Image src={assets.map} alt="map" draggable="false" />
      </TransitionFromLeftAloneSlow>

      <div className="w-full lg:w-1/2 flex flex-col p-4 lg:p-10">
        <TransitionParentInView>
          <TransitionOpacity className="w-fit">
            <p className="font-bold self-start p-2 mb-5 rounded-full px-4 text-sm bg-violet-200 main-text">
              Up To 25% Off
            </p>
          </TransitionOpacity>
          <TransitionOpacity>
            <h4 className="font-bold text-3xl leading-[40px]">Get Amazing Discount on Energy Equipment</h4>
          </TransitionOpacity>
          <TransitionOpacity>
            <p className="mt-5 text-gray-600 leading-[30px]">
              Discover a wide range of energy equipment, including renewable energy technologies, energy-efficient
              solutions, smart meters, and more. We partner with trusted suppliers to offer high-quality equipment that
              meets industry standards. Whether you are seeking energy-efficient solutions for your business or looking
              to invest in renewable energy technologies, we have the products you need.
            </p>
          </TransitionOpacity>
          <TransitionOpacity>
            <Link href="/" className="main-text hover:underline mt-5 text-sm">
              Get Started
            </Link>
          </TransitionOpacity>
        </TransitionParentInView>

        <TransitionParentInView className="w-full mt-4 grid grid-cols-3 gap-4">
          {[
            {
              id: 1,
              img: assets.buy_1,
            },
            {
              id: 1,
              img: assets.buy_2,
            },
            {
              id: 1,
              img: assets.buy_3,
            },
          ].map((item) => (
            <TransitionOpacity
              className="w-full h-[200px] shadow-xl rounded-xl border relative px-5 flex items-center justify-center"
              key={item.id}
            >
              <Image src={item.img} alt="get-energy-2" className="object-cover w-full" />
              <Button
                className="absolute main-bg bottom-10 flex items-center"
                data-tooltip-id={String(item.id)}
                data-tooltip-content="Coming Soon!"
                data-tooltip-place="top"
              >
                <span className="me-2">Shop now</span>
                <AiOutlineArrowRight />
              </Button>
              <Tooltip id={String(item.id)} />
            </TransitionOpacity>
          ))}
        </TransitionParentInView>
      </div>
    </div>
  );
}
