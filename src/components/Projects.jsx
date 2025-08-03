import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="my-20 text-center text-4xl text-neutral-500"
      >
        Projects
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                alt={project.title}
                width={150}
                height={150}
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold text-neutral-500">
                {project.title}
              </h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  className="bg-blue-200 px-2 py-1 text-sm font-medium text-purple-500 mr-2 mt-4 rounded "
                  key={index}
                >
                  {tech}
                </span>
              ))}
              <div className="mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 text-sm font-medium text-green-500 mr-2 mt-4 rounded cursor-pointer "
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
