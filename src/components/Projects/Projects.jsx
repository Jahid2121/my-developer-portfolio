import { useEffect, useState } from "react";
import Project from "./Project";

const Projects = () => {
    const [projects, setProjects] = useState([]);


    useEffect(() => {
       fetch('projects.json')
       .then(res => res.json())
       .then(data => setProjects(data))
      }, []);
      
  return (
   <>
   <h2 className="mt-20 ml-3 font-bold text-4xl ">Projects</h2>
    <div className="grid grid-cols-2 gap-14">
      {projects?.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
   </>
  );
};

export default Projects;
