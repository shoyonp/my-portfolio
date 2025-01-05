import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Projects = ({ project }) => {
  // const [projects, setProjects] = useState([]);
  // useEffect(() => {
  //   fetch("projects.json")
  //     .then((res) => res.json())
  //     .then((data) => setProjects(data));
  // }, []);

  console.log(project);
  return (
    <>
      <div className="bg-gray-900  text-white rounded-lg shadow-lg shadow-white/15 transform hover:scale-105 transition-transform duration-500">
        {/* Project Image */}
        <div className="overflow-hidden rounded-t-lg">
          <img
            src={project.projectImage}
            alt={project.projectName}
            className="w-full h-48 object-cover"
          />
        </div>

        {/* Project Content */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2">{project.projectName}</h2>
          <p className="text-gray-400 mb-4">{project.briefDescription}</p>

          {/* Tech Stack */}
          <div className="mb-4">
            <h3 className="font-semibold">Tech Stack:</h3>
            <ul className="flex flex-wrap gap-2 mt-2">
              {project?.mainTechStack?.map((tech, index) => (
                <li
                  key={index}
                  className="px-3 py-1 bg-blue-600 text-sm rounded-lg"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="flex justify-between items-center mt-4">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-300"
            >
              Live Link
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-lg transition-colors duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      {/* <section className="mx-auto w-11/12 my-6">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={project.projectImage} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{project.projectName}</h2>
            <p>{project.briefDescription}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Projects;
