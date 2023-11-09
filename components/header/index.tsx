"use client";
import { useRouter } from "next/router";
import { FaBars } from "react-icons/fa";
import { links } from "./data";
import { variables } from "@/constants";
import Link from "next/link";
import Logo from "../logo";
import React, { useEffect, useRef } from "react";
import { Dropdown } from "flowbite-react";
import { gsap } from "gsap";

export default function Header() {
  const [show, setShow] = React.useState(false);
  const location = useRouter().pathname;

  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cxt = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from("#logo", { xPercent: -50, opacity: 0 }).from(".nav_link", {
        opacity: 0,
        yPercent: 100,
        stagger: { amount: 0.5 },
      });
    }, navRef);

    return () => cxt.revert();
  }, []);

  const output = links.map((link) => (
    <Link
      key={link._id}
      href={link.url}
      className={`px-2 py-1 border-b-2 transition-colors duration-200 mb-4 nav_link md:mb-0 ${
        location === link.url ? "border-[#003b6d]" : "hover:border-[#003b6d] border-transparent"
      }`}
    >
      {link.title}
    </Link>
  ));

  return (
    <nav ref={navRef} className="bg-white w-full flex items-center justify-center p-6 mb-10">
      <div className="container lg:hidden overflow-hidden">
        <div className="w-full flex items-center justify-between">
          <Logo size={100} id="logo" />

          <button type="button" onClick={() => setShow((prev) => !prev)}>
            <FaBars size="20px" />
          </button>
        </div>

        {show && (
          <div className="lg:hidden border-b w-full flex flex-col md:flex-row items-center justify-center mt-4">
            {output}
          </div>
        )}
      </div>

      <div className="hidden lg:flex container mx-auto -mb-14 w-full items-center justify-between bg-white p-4 px-10 overflow-hidden rounded-full shadow-md z-10">
        <Logo size={100} />

        <div className="flex items-center gap-3">{output}</div>
        <div className="flex items-center">
          {/* <Link className="sub-button p-2 px-6 me-3 rounded-full" href={variables.SHOP_NOW_ADDRESS}>
            Shop Now
          </Link>
          <Link className="main-button p-2 px-6 rounded-full" href={variables.GET_STARTED_ADDRESS}>
            Get Started
          </Link> */}
          <div className="nav_link">
            <Link className="main-button p-2 px-6 rounded-full" href={variables.WAITLIST_ADDRESS}>
              Join Wait List
            </Link>
          </div>

          <div className="nav_link">
            <div className="main-button p-2 px-6 mx-3 rounded-full">
              <Dropdown className="absolute z-50 font-medium text-xl" inline={true} label="Join Us">
                <Dropdown.Item className="z-50">
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
    </nav>
  );
}
