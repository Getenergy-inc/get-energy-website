"use client";

import { useHomeStore } from "@/lib/store";
import { PropsWithChildren } from "react";

const HomeWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const { homeRef } = useHomeStore();

  return <div ref={homeRef}>{children}</div>;
};

export default HomeWrapper;
