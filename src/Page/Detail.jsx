import React from "react";
import { useLoaderData } from "react-router-dom";

const Detail = ({project}) => {
    // const {project} = useLoaderData()
    console.log(project);
  return (
    <div>
      <section className="bg-gray-900 text-white py-12 px-6 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Project Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold">{project?.projectName}</h1>
            <p className="text-gray-400 mt-2">{project?.briefDescription}</p>
          </div>

          {/* Project Image */}
          <div className="flex justify-center mb-10">
            <img
              src={project?.projectImage}
              alt={project?.projectName}
              className="rounded-lg shadow-lg w-full max-w-xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Technology Stack */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Main Technology Stack
            </h2>
            <ul className="flex flex-wrap gap-4">
              {project?.mainTechStack.map((tech, index) => (
                <li
                  key={`tech-${index}`}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Details */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Details</h2>
            <p className="text-gray-300 leading-7">{project?.details}</p>
          </div>

          {/* Links */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Links</h2>
            <div className="flex flex-wrap gap-4">
              <a
                href={project?.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300"
              >
                Live Link
              </a>
              <a
                href={project?.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-800 transition duration-300"
              >
                GitHub Link
              </a>
            </div>
          </div>

          {/* Challenges Faced */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Challenges Faced</h2>
            <ul className="list-disc pl-5 space-y-3">
              {project?.challengesFaced.map((challenge, index) => (
                <li key={`challenge-${index}`} className="text-gray-300">
                  {challenge}
                </li>
              ))}
            </ul>
          </div>

          {/* Improvements */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Improvements</h2>
            <ul className="list-disc pl-5 space-y-3">
              {project?.improvements.map((improvement, index) => (
                <li key={`improvement-${index}`} className="text-gray-300">
                  {improvement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Detail;
