import React from "react";
import { FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { TiCss3 } from "react-icons/ti";

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-5 bg-black/95 mb-1">
      <h2 className="text-4xl font-bold mb-5 text-white text-center">
        My <span className="text-[#ff014f]">Skills</span>
      </h2>
      <div className="">
        <div className="grid p-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5  lg:w-3/4 mx-auto md:w-11/12">
          <p className="flex items-center gap-3 text-[#E34F26] text-3xl font-semibold text-center bg-black/30 rounded-md shadow-white/40 hover:shadow-red-600 shadow-lg px-6 py-8 transform transition duration-300 hover:scale-105">
            <FaHtml5 />
            <span>Html</span>
          </p>
          <p className="flex items-center gap-3 text-[#1572B6] text-3xl font-semibold  bg-black/30 rounded-md shadow-white/40 hover:shadow-blue-500 shadow-lg px-6 py-8 transform transition duration-300 hover:scale-105">
            <TiCss3 />
            <span>CSS</span>
          </p>
          <p className="flex items-center gap-3 text-[#F7DF1E] text-3xl font-semibold  bg-black/30 rounded-md shadow-white/40 hover:shadow-yellow-400 shadow-lg px-6 py-8 transform transition duration-300 hover:scale-105">
            <FaJs />
            <span>Java Script</span>
          </p>
          <p className="flex items-center gap-3 text-[#38B2AC] text-3xl font-semibold  bg-black/30 rounded-md shadow-white/40 hover:shadow-teal-500 shadow-lg px-6 py-8 transform transition duration-300 hover:scale-105">
            <RiTailwindCssFill />
            <span>Tailwind</span>
          </p>
          <p className="flex items-center gap-3 text-[#61DAFB] text-3xl font-semibold  bg-black/30 rounded-md shadow-white/40 hover:shadow-blue-400 shadow-lg px-6 py-8 transform transition duration-300 hover:scale-105">
            <FaReact></FaReact> <span>React</span>
          </p>
          <p className="flex items-center gap-3 text-[#68A063] text-3xl font-semibold  bg-black/30 rounded-md shadow-white/40 hover:shadow-green-600 shadow-lg px-6 py-8 transform transition duration-300 hover:scale-105">
            <FaNodeJs />
            <span>Node Js</span>
          </p>
          <p className="flex items-center gap-3 text-white text-3xl font-semibold  bg-black/30 rounded-md shadow-white/40 hover:shadow-gray-900 shadow-lg px-6 py-8 transform transition duration-300 hover:scale-105">
            <SiExpress />
            <span>Express js</span>
          </p>
          <p className="flex items-center gap-3 text-[#47A248] text-3xl font-semibold  bg-black/30 rounded-md shadow-white/40 hover:shadow-green-500 shadow-lg px-6 py-8 transform transition duration-300 hover:scale-105">
            <SiMongodb />
            <span>Mongodb</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
