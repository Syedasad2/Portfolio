import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { TbBrandMongodb, TbBrandJavascript } from "react-icons/tb";
import { SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiFirebase } from "react-icons/si";

const iconVarients = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "linear",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-500 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="my-20 text-center text-4xl text-neutral-500"
      >
        Technologies
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex flex-wrap justify-center items-center gap-4"
      >
        {/* Next.js */}
        <motion.div
          variants={iconVarients(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4 bg-black"
        >
          <SiNextdotjs className="text-7xl text-white" />
        </motion.div>

        {/* React */}
        <motion.div
          variants={iconVarients(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4 bg-white"
        >
          <RiReactjsLine className="text-7xl bg-white text-cyan-400" />
        </motion.div>

        {/* Tailwind */}
        <motion.div
          variants={iconVarients(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4 bg-cyan-200"
        >
          <RiTailwindCssFill className="text-7xl text-cyan-600" />
        </motion.div>

        {/* Bootstrap */}
        <motion.div
          variants={iconVarients(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4 bg-purple-300"
        >
          <FaBootstrap className="text-7xl text-purple-800" />
        </motion.div>

        {/* JavaScript */}
        <motion.div
          variants={iconVarients(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4 bg-yellow-100"
        >
          <TbBrandJavascript className="text-7xl text-yellow-400" />
        </motion.div>

        {/* MongoDB */}
        <motion.div
          variants={iconVarients(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4 bg-green-300"
        >
          <TbBrandMongodb className="text-7xl text-green-600" />
        </motion.div>
        {/* Node.js */}
        <motion.div
          variants={iconVarients(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 bg-green-300 p-4"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>

        {/* Express.js */}
        <motion.div
          variants={iconVarients(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 bg-gray-300 p-4"
        >
          <SiExpress className="text-7xl text-gray-500" />
        </motion.div>

        {/* Firebase */}
        <motion.div
          variants={iconVarients(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4 bg-yellow-100"
        >
          <SiFirebase className="text-7xl text-yellow-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
