"use client";
import { assets } from "@/constants";
import {
  TransitionOpacity,
  TransitionParentInView,
  TransitionParentInViewSlow,
} from "@/lib/utils/transitions";
import classNames from "classnames";
import Image from "next/image";

interface ProcessBlock {
  _id?: string | number;
  title: string;
  body: string;
}

interface Props {
  data: ProcessBlock[];
}

const Process: React.FC<Props> = ({ data }) => {
  const gridClass = classNames([
    `md:grid-cols-${data.length} sm:grid-cols-2 grid-cols-1`,
    "container relative grid",
    "gap-6 lg:gap-12",
  ]);

  return (
    <div className="w-full flex justify-center md:my-20 my-10 md:py-20 py-10">
      <TransitionParentInView className={gridClass}>
        {data.map((item, id) => (
          <TransitionOpacity
            className="lg:pe-10 text-start mb-10 md:mb-0"
            key={id}
          >
            <div className="flex items-center mb-3 justify-start">
              <h4 className="main-text font-bold text-3xl me-2">{item._id}</h4>
              <h5 className="font-bold text-xl">{item.title}</h5>
            </div>
            <p className="text-gray-600 text-sm leading-[25px]">{item.body}</p>
          </TransitionOpacity>
        ))}

        <TransitionParentInViewSlow>
          <TransitionOpacity>
            <Image
              src={assets.arrow_u}
              alt="arrow"
              className="hidden lg:block absolute -bottom-32 left-20"
            />
          </TransitionOpacity>

          <TransitionOpacity>
            <Image
              src={assets.arrow_n}
              alt="arrow"
              className="hidden lg:block absolute -top-32 left-96"
            />
          </TransitionOpacity>

          <TransitionOpacity>
            <Image
              src={assets.arrow_u}
              alt="arrow"
              className="hidden lg:block absolute -bottom-32 right-52"
            />
          </TransitionOpacity>
        </TransitionParentInViewSlow>
      </TransitionParentInView>
    </div>
  );
};

export default Process;
