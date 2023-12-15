import { Link } from "react-router-dom";
import Btn from "../Btn";
import "../Projects/Project.css"
import { Tooltip } from "react-tooltip";
const Project = ({ project }) => {


  return (
    <div className="container bg-artificialPastel">
      <Tooltip id="clickEvent" />
      <Link to={project.liveLink}>
      <div data-tooltip-id="clickEvent" data-tooltip-content="Click to Open Live Preview"  style={{backgroundImage: `url(${project.img})`}} className="box box-1 bg-cover h-[300px] cursor-pointer transition-all group-hover:bg-bottom ease-in-out duration-[6s]">

</div>
      </Link>
<div className="card-body">
        <h2 className="card-title">{project.projectName}</h2>
        <p>{project.details}</p>
        <div className="card-actions justify-end">
          <Link to={project.githubLink} className="">
            <Btn text={'View in GitHub'} />
          </Link>
        </div>
      </div>


<div>

    </div>
  </div> 
  );
};

export default Project;
