"use client";
import { DASHBOARD_URL } from "@/constants/variables";
import { ArrowRight } from "lucide-react";

const GetStartedBtn = () => {
  return (
    <button
      className="flex items-center gap-2 bg-primaryBlue rounded-md px-4 py-2 text-white"
      onClick={() => window.open(`${DASHBOARD_URL}/dashboard/get-energy`, "")}
    >
      <span>Get Started</span>
      <ArrowRight size={20} />
    </button>
  );
};

export default GetStartedBtn;
