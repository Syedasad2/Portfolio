import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="my-20 text-center text-4xl text-neutral-500"
      >
        Experience
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold text-neutral-400">
                {experience.role} -{" "}
                <span className="text-sm text-neutral-400">
                  {experience.company}
                </span>
              </h6>
              <p className="text-neutral-400 mb-4 text-justify">
                {experience.description}
              </p>
              {experience.technologies.map((tech, index) => (
                <span
                  className="bg-blue-200 px-2 py-1 text-sm font-medium text-purple-500 mr-2 mt-4 rounded "
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
