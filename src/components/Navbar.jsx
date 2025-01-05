import React from "react";

const Navbar = () => {
  const links = (
    <>
      <li className="hover:text-yellow-500 transition-all duration-300">
        <a href="">Home</a>
      </li>

      <li className="hover:text-yellow-500 transition-all duration-300">
        <a href="#about">About Me</a>
      </li>
      <li className="hover:text-yellow-500 transition-all duration-300">
        <a href="#skills">My Skill</a>
      </li>
      <li className="hover:text-yellow-500 transition-all duration-300">
        <a href="#education">My Education</a>
      </li>
      <li className="hover:text-yellow-500 transition-all duration-300">
        <a href="#projects">Projects</a>
      </li>
      <li className="hover:text-yellow-500 transition-all duration-300">
        <a href="#contact">Contect Me</a>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-0 bg-black text-white">
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
              className="menu menu-sm dropdown-content bg-gray-600 space-y-5 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <h1 className="text-xl font-semibold">
            <span className="text-[#ff014f]">My</span> Portfolio
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://docs.google.com/document/d/1U90TQiHcD3iMbCMp5jvZ3eRtl5KMTAOFoOT27PmRlmE/edit?usp=sharing"
            className="btn bg-gray-800 hover:bg-gray-900 border-none text-[#ff014f]"
          >
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
