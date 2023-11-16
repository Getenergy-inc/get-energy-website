import Image from "next/image";
import { service_data } from "../our-service/data";
import Link from "next/link";
import { assets } from "@/constants";
import { TransitionOpacity, TransitionParentInView, TransitionParentInViewFast } from "@/lib/utils/transitions";

export default function Services() {
  return (
    <>
      <section className="bg-primaryBlue text-white py-[4rem] w-full mt-40">
        <TransitionParentInView className="max-w-3xl text-center mx-auto space-y-3">
          <TransitionOpacity>
            <p className="text-primaryBlue font-bold px-7 py-4 w-fit mx-auto rounded-full bg-white/90">Services</p>
          </TransitionOpacity>
          <TransitionOpacity>
            <h3 className="font-extrabold text-white/70 text-4xl leading-relaxed">
              Ignite Your World with <span className="text-white">GetEnergy</span> Transformative Powering Solutions
            </h3>
          </TransitionOpacity>
          <TransitionOpacity>
            <p className="text-center text-white/70">We offer amazing services to suit our customer needs</p>
          </TransitionOpacity>
        </TransitionParentInView>

        <div className="container mx-auto mt-16 flex items-center justify-between gap-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
            <circle cx="20" cy="20" r="19.5" transform="matrix(-1 0 0 1 40.5 0.132812)" stroke="white" />
            <path
              d="M11.7929 19.4257C11.4024 19.8162 11.4024 20.4494 11.7929 20.8399L18.1569 27.2039C18.5474 27.5944 19.1805 27.5944 19.5711 27.2039C19.9616 26.8134 19.9616 26.1802 19.5711 25.7897L13.9142 20.1328L19.5711 14.476C19.9616 14.0854 19.9616 13.4523 19.5711 13.0617C19.1805 12.6712 18.5474 12.6712 18.1569 13.0617L11.7929 19.4257ZM28.5 19.1328L12.5 19.1328L12.5 21.1328L28.5 21.1328L28.5 19.1328Z"
              fill="white"
            />
          </svg>

          <TransitionParentInViewFast className="w-full grid grid-cols-3 gap-4 md:gap-10">
            {service_data
              .slice(0, 4)
              .filter((item) => item._id !== "service-3")
              .map((item) => (
                <TransitionOpacity className="w-full rounded-xl p-4 md:p-8 text-black py-12 bg-white" key={item._id}>
                  <Image alt="our-service-img" src={item.icon} className="mb-4" />
                  <h4 className="w-full font-bold text-xl">{item.title}</h4>
                  <p className="w-full text-gray-600 text-sm mt-2">{item.body}</p>
                  <Link className="mt-6 flex items-center hover:underline" href={item.link.url}>
                    <Image src={assets.arrow_right} alt="arrow-right" className="me-2" />
                    <p>{item.link.title}</p>
                  </Link>
                </TransitionOpacity>
              ))}
          </TransitionParentInViewFast>

          <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
            <circle cx="20.5" cy="20.1328" r="20" fill="white" />
            <path
              d="M29.2071 20.8399C29.5976 20.4494 29.5976 19.8162 29.2071 19.4257L22.8431 13.0617C22.4526 12.6712 21.8195 12.6712 21.4289 13.0617C21.0384 13.4523 21.0384 14.0854 21.4289 14.476L27.0858 20.1328L21.4289 25.7897C21.0384 26.1802 21.0384 26.8134 21.4289 27.2039C21.8195 27.5944 22.4526 27.5944 22.8431 27.2039L29.2071 20.8399ZM12.5 21.1328H28.5V19.1328H12.5V21.1328Z"
              fill="#003F7C"
            />
          </svg>
        </div>
      </section>
    </>
  );
}
