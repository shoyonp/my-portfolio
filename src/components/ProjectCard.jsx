import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  // console.log(project);
  return (
    <>
     <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4 }}
      className="relative bg-gradient-to-br from-[#0a0a0a] via-[#161616] to-[#222] text-white rounded-lg shadow-xl overflow-hidden transform transition-transform duration-500 hover:shadow-[#ff014f]/60 w-96 h-[450px]"
    >
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-t-lg h-64">
        <motion.img
          src={project.projectImage}
          alt={project.projectName}
          className="w-full h-full object-cover rounded-t-lg hover:scale-110 transition-all duration-500"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute bottom-0 left-0 w-full bg-black/60 p-4 flex justify-center"
        >
          <Link
            to={`/details/${project.id}`}
            className="flex items-center gap-2"
          >
            View Details <FaLongArrowAltRight />
          </Link>
        </motion.div>
      </div>

      {/* Project Content */}
      <div className="p-6 text-center bg-black/50 rounded-b-lg h-[170px] flex flex-col justify-center">
        <h2 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#ff014f] to-[#b30f40] drop-shadow-lg">
          {project.projectName}
        </h2>
        <p className="text-gray-300 mt-2 text-sm line-clamp-3">{project.briefDescription}</p>
      </div>
    </motion.div>
      
    </>
  );
};

export default ProjectCard;
