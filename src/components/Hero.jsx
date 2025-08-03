import React, { useState, useEffect } from "react";
import { HERO_CONTENT } from "../constants";
import hero from "../source/profile pic 1.jpg";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5 + delay,
      duration: 0.5,
    },
  },
});

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap">
        {/* Left Section - Text */}
        <div className="w-full lg:w-1/2 mt-20">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl text-black"
            >
              Syed Asad Shah
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl lg:text-4xl tracking-tight text-transparent"
            >
              MERN Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-black text-justify"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              href="/resume.pdf"
              download="Resume.pdf"
              className="mt-4 px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.5 }}
            >
              Download Resume
            </motion.a>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full mt-5 lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              key="hero"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className={`w-3/4 rounded-lg transition duration-300 ease-in-out h-90 mt-10 ${
                isHovered ? "scale-105" : ""
              }`}
              src={hero}
              alt="hero_pic"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-50"
        initial={{ opacity: 1 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.button
          onClick={scrollToNext}
          aria-label="Scroll to next section"
          className="flex flex-col items-center text-black/80 hover:text-white transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
