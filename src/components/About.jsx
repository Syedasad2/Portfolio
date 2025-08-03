import React from "react";
import aboutImg from "../source/profile pic 1.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="my-20 text-center text-4xl relative z-20 text-neutral-500"
      >
        {" "}
        About <span className="text-neutral-500"> Me</span>
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex flex-wrap"
      >
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center items-center">
            <img className="rounded-2xl w-3/5" src={aboutImg} alt="about" />
          </div>
        </div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 200 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 font-light text-black text-justify">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
