import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Detail = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [project, setProject] = useState({});
  const [lightbox, setLightbox] = useState(false);

  // console.log(data);
  
  useEffect(() => {
    if (Array.isArray(data)) {
      const singleData = data.find((p) => p.id == Number(id));
      setProject(singleData || {}); 
    }
  }, [id, data]);

  // console.log("project id:",(project.id),"param id:",Number(id));
  

  if (!data || data.length === 0) {
    return <div className="text-center text-white py-20 text-xl">Loading...</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364] text-white p-6"
    >
      <div className="max-w-4xl mx-auto p-6 rounded-lg backdrop-blur-lg bg-white/10 shadow-xl transition-all duration-500 hover:shadow-2xl">
        {/* Project Image */}
        <motion.img
          src={project.projectImage}
          alt="Project Preview"
          className="w-full h-64 object-cover rounded-lg shadow-lg border-4 border-white/20 cursor-pointer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => setLightbox(true)}
        />

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightbox(false)}
            >
              <motion.img
                src={project.projectImage}
                alt="Project Preview Enlarged"
                className="max-w-full max-h-full rounded-lg shadow-2xl border-4 border-white/20"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Project Title */}
        <h1 className="text-3xl font-bold text-center mt-6 bg-clip-text text-transparent bg-gradient-to-r from-[#ff014f] to-[#b30f40]">
          {project.projectName}
        </h1>

        {/* Description */}
        <p className="text-gray-300 mt-4 text-lg text-center">
          {project.details}
        </p>

        {/* Technologies Used */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {project?.mainTechStack?.map((tech, index) => (
            <motion.span
              key={index}
              className="px-4 py-2 bg-white/10 text-white rounded-full text-sm shadow-lg backdrop-blur-lg border border-white/20"
              whileHover={{ scale: 1.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Links */}
        <div className="flex justify-center gap-6 mt-6">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition-all duration-300 shadow-md"
          >
            <FaGithub className="text-xl" /> GitHub
          </a>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#ff014f] px-4 py-2 rounded-lg hover:bg-[#b30f40] transition-all duration-300 shadow-md"
          >
            <FaExternalLinkAlt className="text-xl" /> Live Demo
          </a>
        </div>

        {/* Challenges & Improvements */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-white/80 mb-2">
            Challenges Faced:
          </h3>
          <ul className="list-disc list-inside text-gray-400">
            {project?.challengesFaced?.map((challenge, index) => (
              <li key={index} className="mt-1">
                {challenge}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-white/80 mb-2">
            Future Improvements:
          </h3>
          <ul className="list-disc list-inside text-gray-400">
            {project?.improvements?.map((improvement, index) => (
              <li key={index} className="mt-1">
                {improvement}
              </li>
            ))}
          </ul>
        </div>

        {/* Back Button */}
        <div className="text-center mt-8">
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 shadow-lg"
          >
            ← Back
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Detail;
