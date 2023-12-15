import { useEffect, useState } from "react";
import Project from "./Project";
import SectionTitle from "../SectionTitle";

const Projects = () => {
    const [projects, setProjects] = useState([]);
// https://developer-portfolio-server-sepia.vercel.app

    useEffect(() => {
       fetch('http://localhost:5000/projects')
       .then(res => res.json())
       .then(data => setProjects(data))
      }, []);
      
  return (
   <>
   <SectionTitle Title="<Projects" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
      {projects?.map((project) => (
        <Project key={project._id} project={project} />
      ))}
    </div>
    <SectionTitle Title="/>" />
   </>
  );
};

export default Projects;
