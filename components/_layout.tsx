import Header from "./header";
import Footer from "./footer";
import React from "react";

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  return (
    <div className="w-full bg-white">
      <Header />
      <div>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}