import { useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaProjectDiagram, FaGraduationCap } from "react-icons/fa";
import Skills from "./Skills";
import Project from "./Project";
import Education from "./Education";
import { SiPolymerproject } from "react-icons/si";

const TabSection = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const tabs = [
    { id: "skills", label: "Skills", icon: <SiPolymerproject /> },
    { id: "projects", label: "Projects", icon: <FaProjectDiagram /> },
    { id: "education", label: "Education", icon: <FaGraduationCap /> },
  ];

  return (
    <div id="tab" className="bg-black text-center py-10 px-4">
      {/* Tab Buttons */}
      <div className="flex flex-wrap md:flex-nowrap justify-center md:space-x-4 space-y-3 md:space-y-0 border border-white/20 rounded-lg p-4 w-full lg:w-2/5 md:w-3/5 mx-auto bg-white/10 backdrop-blur-lg shadow-xl transition-all duration-500 ">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative flex items-center justify-center gap-2 px-5 py-2 md:px-6 md:py-3 text-base md:text-lg font-semibold rounded-lg w-full md:w-auto transition-all duration-300 
          ${
            activeTab === tab.id
              ? "bg-gradient-to-r from-[#ff014f] to-[#b30f40] text-white shadow-lg scale-105"
              : "bg-gray-700 text-white hover:bg-gray-600 "
          }`}
            whileHover={{ scale: activeTab === tab.id ? 1.05 : 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="text-lg md:text-xl">{tab.icon}</span> {tab.label}
            {activeTab === tab.id && (
              <motion.span
                className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#ff014f] to-[#b30f40] blur-md opacity-50 "
                layoutId="activeTab"
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Render Component Based on Active Tab with Animation */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="mt-6 px-2 md:px-10"
      >
        {activeTab === "skills" && <Skills />}
        {activeTab === "projects" && <Project />}
        {activeTab === "education" && <Education />}
      </motion.div>
    </div>
  );
};

export default TabSection;
