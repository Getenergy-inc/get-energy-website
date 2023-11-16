"use client";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa";
import { links } from "./data";
import { variables } from "@/constants";
import Link from "next/link";
import Logo from "../../logo";
import React, { useEffect, useRef } from "react";
import { Dropdown } from "flowbite-react";
import { gsap } from "gsap";

export default function Header() {
  const [show, setShow] = React.useState(false);
  const location = usePathname();

  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cxt = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from("#logo", { xPercent: -50, opacity: 0 })
        .from(".nav_link", {
          opacity: 0,
          yPercent: 100,
          stagger: { amount: 0.4 },
        })
        .from(".nav_link_op", {
          opacity: 0,
          stagger: { amount: 0.1 },
        });
    }, navRef);

    return () => cxt.revert();
  }, []);

  const output = links.map((link) => (
    <Link
      key={link._id}
      href={link.url}
      className={`px-2 py-1 transition-colors duration-200 mb-4 nav_link font-semibold text-sm md:mb-0 ${
        location === link.url && "text-[#003b6d]"
      }`}
    >
      {link.title}
    </Link>
  ));

  return (
    <nav ref={navRef} className="bg-white w-full flex items-center justify-center">
      <div className="container lg:hidden">
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

      <div className="bg-white rounded-b-[2rem] w-full big-shadow z-10">
        <div className="hidden lg:flex container w-full items-center py-4 justify-between">
          <Logo size={100} />

          <div className="flex items-center gap-3 overflow-hidden">{output}</div>

          <div>
            <button className="text-white font-semibold px-6 py-3 text-sm bg-primaryBlue rounded-xl">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
