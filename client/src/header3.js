import React from "react";
import { motion } from "framer-motion";

const Header3 = () => {
  return (
    <div className="header3">
      <h1>Why Choose Blockchain Industry?</h1>

      <motion.div
        className="boxes"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth simultaneous movement
      >
        <div className="box1">
          <h3>Innovative Blockchain Solutions</h3>
          <p>Advancing blockchain research and pioneering new applications</p>
        </div>

        <div className="box2">
          <h3>Cutting-edge Technology Access</h3>
          <p>Providing access to the latest blockchain tools and methodologies</p>
        </div>

        <div className="box3">
          <h3>Impact on Finance & Security</h3>
          <p>Enhancing financial systems and security through blockchain advancements</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Header3;
