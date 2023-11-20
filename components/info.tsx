"use client";
import { motion } from "framer-motion";
type InfoProps = {
  body: string;
};

export default function Info(props: InfoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: "5%" }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.2 } }}
      className="w-full flex justify-center my-20"
    >
      <div className="container flex justify-center">
        <p className="p-4 md:p-0 w-4/4 md:w-3/4 lg:w-2/4 md:text-lg text-center font-medium leading-[30px]">
          {props.body}
        </p>
      </div>
    </motion.div>
  );
}
