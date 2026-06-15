import React from "react";
import { Links } from "./Links";
import { Form } from "./Form";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
    <div className="flex flex-col gap-8 w-full mt-10 px-4 lg:px-10 z-50">

      {/* Title */}
      <h1
        style={{ fontFamily: "Fredericka the Great" }}
        className="font-extrabold leading-tight"
      >
        <p className="text-3xl lg:text-6xl">
          Let's Work Together
        </p>
      </h1>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-10 w-full">

        {/* Left side */}
        <div className="flex flex-col gap-5 w-full lg:w-1/3">
          <p className="text-slate-300">
            I'm currently open to full-time opportunities, freelance projects,
            and interesting collaborations. Drop me a message and I'll get back to you.
          </p>

          <Links />
        </div>

        {/* Right side */}
        <div className="w-full lg:w-2/3">
          <Form />
        </div>

      </div>
    </div>
    </motion.div>
  );
};