import Header from "./header";
import Footer from "./footer";
import React from "react";

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  return (
    <div className="w-full border-4 border-red-400">
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}