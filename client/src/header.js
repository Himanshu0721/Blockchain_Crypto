import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="section1 text-center p-8">
      {/* Static Heading */}
      <h2>Decoding the Future: Where Trust Meets Technology</h2>

      {/* Animated Paragraph */}
      <motion.p
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Empowering Innovations, Securing Transactions
      </motion.p>

      {/* Animated Buttons */}
      <motion.div
        className="section1-buttons mt-4 flex gap-4 justify-center"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        <motion.button
          className="primary"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Get Started
        </motion.button>
        <motion.button
          className="secondary"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Learn More
        </motion.button>
      </motion.div>
    </header>
  );
};

export default Header;
