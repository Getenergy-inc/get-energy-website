"use client";
import { usePathname } from "next/navigation";
import { links } from "./data";
import Link from "next/link";
import Logo from "../../logo";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { MenuIcon, XIcon } from "lucide-react";
import { TransitionOpacity, TransitionOpacityAlone, TransitionParentFast } from "@/lib/utils/transitions";
import { DASHBOARD_URL } from "@/constants/variables";

export default function Header() {
  const [show, setShow] = useState(false);
  const location = usePathname();

  const toggleVisibility = () => setShow(!show);

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
    <TransitionOpacity key={link._id}>
      <Link
        href={link.url}
        className={`px-2 py-1 transition-colors duration-200 nav_link font-semibold text-sm lg:mb-0 ${
          location === link.url && "text-[#003b6d]"
        }`}
        onClick={toggleVisibility}
      >
        {link.title}
      </Link>
    </TransitionOpacity>
  ));

  return (
    <>
      <nav ref={navRef} className="bg-white w-full flex items-center justify-center">
        <div className="lg:hidden block bg-white shadow-md shadow-zinc-200 rounded-b-xl w-full">
          <div className="container mx-auto">
            <div className="w-full flex items-center justify-between py-3">
              <Logo size={100} id="logo" />

              {!show ? (
                <TransitionOpacityAlone>
                  <button type="button" onClick={toggleVisibility}>
                    <MenuIcon />
                  </button>
                </TransitionOpacityAlone>
              ) : (
                <div>
                  <TransitionOpacityAlone>
                    <button type="button" onClick={toggleVisibility}>
                      <XIcon />
                    </button>
                  </TransitionOpacityAlone>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-b-[2rem] hidden lg:block w-full big-shadow z-10">
          <div className="hidden lg:flex container w-full items-center py-4 justify-between">
            <Logo size={100} />

            <div className="flex items-center gap-3 overflow-hidden">{output}</div>

            <div>
              <Link href={DASHBOARD_URL} target="_blank">
                <button className="text-white font-semibold px-6 py-3 text-sm bg-primaryBlue rounded-xl">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <aside
        className={`fixed right-0 top-0 overflow-hidden min-h-screen block lg:hidden ${
          show ? "w-full" : "w-0"
        } z-[1000]`}
      >
        <div
          className={`w-full absolute min-h-screen transition-colors duration-300 ${
            show ? "bg-black/30" : "bg-transparent"
          }`}
          onClick={toggleVisibility}
        >
          <div
            className={`${show ? "w-3/5" : "w-0"} bg-white min-h-screen rounded-l-md duration-300 absolute right-0 p-4`}
          >
            {show && (
              <div className="lg:hidden flex flex-col space-y-4 w-full my-2">
                {links.map((link) => (
                  <TransitionOpacity key={link._id}>
                    <Link
                      href={link.url}
                      className={`px-2 py-1 transition-colors duration-200 nav_link font-semibold text-sm lg:mb-0 ${
                        location === link.url && "text-[#003b6d]"
                      }`}
                      onClick={toggleVisibility}
                    >
                      {link.title}
                    </Link>
                  </TransitionOpacity>
                ))}
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
