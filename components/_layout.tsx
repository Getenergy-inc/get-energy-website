import Header from "./header";
import Footer from "./footer";
import React from "react";
import { satoshi } from "@/pages/_app";
import SmoothScroll from "@/features/smooth-scroll";
import { AnimatePresence } from "framer-motion";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <AnimatePresence>
        <div className={`${satoshi.className} w-full bg-white`}>
          <Header />
          <div>{props.children}</div>
          <Footer />
        </div>
      </AnimatePresence>
    </>
  );
}
