import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
const Project = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  // console.log(projects);

  return (
    <>
      <div id="projects" className="bg-black py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full  lg:w-11/12 md:w-full  mx-auto gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project}></ProjectCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
