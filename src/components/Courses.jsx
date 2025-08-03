import React from "react";
import { COURSES } from "../constants/index";
import { motion } from "framer-motion";

const Courses = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="my-20 text-center text-4xl text-neutral-500"
      >
        Courses
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {COURSES.map((courses, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{courses.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold text-neutral-400">
                {courses.field} -{" "}
                <span className="text-sm text-neutral-400">
                  {courses.institute}
                </span>
              </h6>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Courses;
