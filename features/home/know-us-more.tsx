import { TransitionOpacity, TransitionOpacityAlone, TransitionParentInViewFast } from "@/lib/utils/transitions";
import Image from "next/image";

const KnowUsMore = () => {
  return (
    <section className="container mx-auto">
      <div className="mt-40">
        <TransitionParentInViewFast className="max-w-3xl text-center mx-auto space-y-8">
          <TransitionOpacity>
            <p className="text-primaryBlue font-bold px-7 py-4 w-fit mx-auto rounded-full bg-primaryBlue/20">
              Know Us More
            </p>
          </TransitionOpacity>
          <TransitionOpacity>
            <h3 className="font-bold text-black text-4xl">Begin by using GetEnergy</h3>
          </TransitionOpacity>
          <TransitionOpacity>
            <p className="text-center text-zinc-500 leading-relaxed text-lg">
              Watch the video below to see how GetEnergy can deliver energy and other services right to your door.
            </p>
          </TransitionOpacity>
        </TransitionParentInViewFast>

        <TransitionOpacityAlone className="px-4">
          <div className="mt-16 bottom-8 border-primaryBlue/40 h-[25rem] overflow-hidden rounded-xl relative">
            <Image
              src={"/images/bg/get-energy-video.png"}
              width={1360}
              height={500}
              className="w-full h-full object-cover absolute top-0 left-0"
              alt="get energy into video cover"
            />

            <div className="absolute top-0 left-0 w-full h-full grid place-content-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="191"
                height="192"
                viewBox="0 0 191 192"
                fill="none"
                className="cursor-pointer"
              >
                <g filter="url(#filter0_d_5419_36761)">
                  <g filter="url(#filter1_d_5419_36761)">
                    <ellipse
                      cx="95.2245"
                      cy="87.9902"
                      rx="40.3495"
                      ry="40.3495"
                      fill="white"
                      fillOpacity="0.5"
                      shapeRendering="crispEdges"
                    />
                  </g>
                  <g filter="url(#filter2_d_5419_36761)">
                    <circle cx="95.5" cy="88.5" r="52" fill="white" fillOpacity="0.5" shapeRendering="crispEdges" />
                  </g>
                  <path d="M108.906 88.7464L88.1109 100.753V76.7402L108.906 88.7464Z" fill="#003F7C" />
                </g>
                <defs>
                  <filter
                    id="filter0_d_5419_36761"
                    x="19.2152"
                    y="16.3783"
                    width="152.57"
                    height="152.57"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feMorphology
                      radius="3.46926"
                      operator="dilate"
                      in="SourceAlpha"
                      result="effect1_dropShadow_5419_36761"
                    />
                    <feOffset dy="4.16312" />
                    <feGaussianBlur stdDeviation="10.4078" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5419_36761" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5419_36761" result="shape" />
                  </filter>
                  <filter
                    id="filter1_d_5419_36761"
                    x="11.5417"
                    y="11.7359"
                    width="167.362"
                    height="167.362"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feMorphology
                      radius="6.19048"
                      operator="dilate"
                      in="SourceAlpha"
                      result="effect1_dropShadow_5419_36761"
                    />
                    <feOffset dy="7.42857" />
                    <feGaussianBlur stdDeviation="18.5714" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5419_36761" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5419_36761" result="shape" />
                  </filter>
                  <filter
                    id="filter2_d_5419_36761"
                    x="0.166663"
                    y="0.595235"
                    width="190.667"
                    height="190.667"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feMorphology
                      radius="6.19048"
                      operator="dilate"
                      in="SourceAlpha"
                      result="effect1_dropShadow_5419_36761"
                    />
                    <feOffset dy="7.42857" />
                    <feGaussianBlur stdDeviation="18.5714" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5419_36761" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5419_36761" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </TransitionOpacityAlone>
      </div>
    </section>
  );
};

export default KnowUsMore;
