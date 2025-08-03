import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="border-b border-neutral-900 pb-4 lg:mb-35"
    >
      <h1 className="my-20 text-center text-4xl text-neutral-500">
        Get in touch
      </h1>
      <div>
        <p className="text-center text-neutral-400">{CONTACT.address}</p>
        <a href="waistband161@gmail.com">
          {" "}
          <p className="text-center hover:text-blue-500 text-neutral-400">
            {CONTACT.email}
          </p>
        </a>
        <p className="text-center text-neutral-400">{CONTACT.phoneNo}</p>
      </div>
    </motion.div>
  );
};

export default Contact;
