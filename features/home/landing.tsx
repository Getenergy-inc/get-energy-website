import { variables } from "@/constants";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Dropdown } from "flowbite-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useHomeStore } from ".";

const LandingImage = dynamic(() => import("./landing-img"), { ssr: false });

export default function Landing() {
  const { homeRef } = useHomeStore();

  useEffect(() => {
    const cxt = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".jumbo_text", {
        opacity: 0,
        delay: 0.5,
        ease: "circ",
        yPercent: 100,
        stagger: { amount: 0.2 },
      })
        .from(".jumbo_gtext", { opacity: 0 })
        .from(".jumbo_action", {
          opacity: 0,
          stagger: { amount: 0.1 },
        });
    }, homeRef);

    return () => cxt.revert();
  }, []);

  return (
    <div className="w-full flex flex-col lg:flex-row items-center py-10 p-0 lg:pt-24">
      <div className="w-full lg:w-7/12">
        <div className="overflow-hidden">
          <h1 className="lg:text-start jumbo_text lg:text-5xl md:text-4xl text-3xl font-extrabold text-center md:text-start p-4 lg:pe-32 md:leading-[50px] leading-[40px]">
            <span>Unlocking Sustainable Energy Solutions, Discover the Power of</span>
            <span className="main-text ms-3 jumbo_gtext">GetEnergy</span>
          </h1>
        </div>
        <div className="overflow-hidden">
          <p className="w-full md:text-start text-center lg:text-start jumbo_text text-black/80 text-sm md:text-lg p-4 lg:pe-72 mb-2">
            We are a leading provider of energy trading solutions, offering a comprehensive range of services to clients
            in the energy sector
          </p>
        </div>
        {/* 
        <div className="flex justify-center lg:justify-start">
          <Link className="main-button p-3 px-10 text-sm rounded-full" href={variables.GET_STARTED_ADDRESS}>
            Get Started
          </Link>
        </div> */}
        <div className="flex justify-center lg:justify-start my-10">
          <div className="flex items-center justify-center">
            <div className="jumbo_action">
              <Link className="main-button p-2 px-6 rounded-full" href={variables.WAITLIST_ADDRESS}>
                Join Wait List
              </Link>
            </div>
            <div className="jumbo_action">
              <div className="main-button p-2 px-6 rounded-full mx-4">
                <Dropdown className="font-medium text-xl" inline={true} label="Join Us">
                  <Dropdown.Item>
                    <Link href={variables.INTERN_FORM_URL}>As an Intern</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link href={variables.VOLUNTEER_FORM_URL}>As a Volunteer</Link>
                  </Dropdown.Item>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-2/3 lg:w-5/12 mt-20 lg:mt-0 flex justify-center">
        <LandingImage />
        <div
          className="hidden lg:block lg:w-[500px] lg:h-[800px] absolute top-0 right-0"
          style={{ background: "rgba(102, 153, 204, 0.6)" }}
        />
      </div>
    </div>
  );
}
