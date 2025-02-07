import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiFirebase, SiMongodb } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-red-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
  { name: "React", icon: <FaReact className="text-cyan-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-500" /> },
  { name: "Firebase", icon: <SiFirebase className="text-orange-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
];

const Skills = () => {
  return (
    <section className="py-5 bg-black">
      <div className="container mx-auto">
        <motion.div
          className="flex flex-wrap justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              className="m-4 p-6 bg-gray-900 rounded-lg shadow-lg text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
              key={index}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <motion.div
                className="text-5xl mb-4"
                whileHover={{ scale: 1.2, rotate: -10 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
              >
                {skill.icon}
              </motion.div>
              <span className="text-xl font-semibold text-gray-200">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
