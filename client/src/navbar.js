import React, { useEffect, useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState("bg-white");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavbarBg("bg-white shadow-lg");
      } else {
        setNavbarBg("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className={`navbar ${navbarBg} flex justify-between items-center p-4`}>
        <div>
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Blockchain Industry
          </motion.h1>
          <p>Revolutionizing Trust, Security, and Decentralization</p>
        </div>

        <motion.span
          className="span"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Blockchain Research
        </motion.span>

        <span className="menu-icon" onClick={toggleMenu}>
          <MdOutlineMenu size={30} />
        </span>
      </nav>

      <div className={`res-menu ${isMenuOpen ? "block" : "hidden"}`}>
        <span>Blockchain Research</span>
      </div>
    </div>
  );
};

export default Navbar;
