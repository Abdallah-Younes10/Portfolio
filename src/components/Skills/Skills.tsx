import React from "react";
import DemoOne from "./Circle";
import { Tech } from "./Tech";
import { motion } from "framer-motion";

export const Skills = () => {
  return (
     <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
    <div className="mt-20 flex flex-col justify-center items-center w-full">
      <h1
        style={{ fontFamily: "Fredericka the Great" }}
        className="text-4xl md:text-5xl font-extrabold"
      >
        Tech Stack
      </h1>
      <div className="flex  flex-col  justify-around w-full items-center mt-5">
        <div >
          <DemoOne />
        </div>
        <Tech />

      </div>
    </div>
    </motion.div>
  );
};
