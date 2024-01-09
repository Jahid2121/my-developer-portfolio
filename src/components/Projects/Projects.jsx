import { useEffect, useState } from "react";
import Project from "./Project";
import SectionTitle from "../SectionTitle";
import useProjects from "../../hooks/useProjects";

const Projects = () => {
    const {projects} = useProjects()
// https://developer-portfolio-server-sepia.vercel.app

    
      
  return (
   < >
   <SectionTitle Title="<Projects" />
    <div data-aos="fade-up"
     data-aos-duration="3000" className="grid grid-cols-1 md:grid-cols-2 gap-14">
      {projects?.map((project) => (
        <Project key={project._id} project={project} />
      ))}
    </div>
    <div className=" flex justify-end">
    <SectionTitle  Title="/>" />
    </div>
   </>
  );
};

export default Projects;
