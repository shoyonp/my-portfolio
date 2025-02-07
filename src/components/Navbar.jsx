import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const links = (
    <>
      <li className="hover:text-[#ff014f] transition-all duration-300">
        <a href="/">Home</a>
      </li>
      <li className="hover:text-[#ff014f] transition-all duration-300">
        <a href="#about">About Me</a>
      </li>
      <li className="hover:text-[#ff014f] transition-all duration-300">
        <a href="#tab">Skills</a>
      </li>
      <li className="hover:text-[#ff014f] transition-all duration-300">
        <a href="#contact">Contact Me</a>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-10 bg-black text-white">
      <motion.div
        className="navbar w-11/12 mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-black space-y-5 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <motion.h1
            className="text-xl font-semibold bg-gradient-to-r from-[#ff014f] to-[#b30f40] text-transparent bg-clip-text"
            style={{ fontFamily: "'Roboto Slab', serif" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            whileHover={{
              scale: 1.1,
              textShadow:
                "0px 0px 8px rgba(255, 1, 79, 0.7), 0px 0px 12px rgba(255, 1, 79, 0.7)",
            }}
          >
            <span className="text-[#ff014f]">My</span> Portfolio
          </motion.h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <motion.ul
            className="menu menu-horizontal px-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            {links}
          </motion.ul>
        </div>
        <div className="navbar-end">
          <motion.a
            href="https://docs.google.com/document/d/1U90TQiHcD3iMbCMp5jvZ3eRtl5KMTAOFoOT27PmRlmE/edit?usp=sharing"
            className="btn bg-gradient-to-r from-[#ff014f] to-[#b30f40] text-white hover:bg-gradient-to-l border-none"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 20px rgba(255, 1, 79, 0.5)",
              transition: { duration: 0.3 },
            }}
            whileTap={{
              scale: 0.95,
              boxShadow: "0 0 10px rgba(255, 1, 79, 0.3)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Download Resume
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
