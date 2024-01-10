import { Link } from "react-router-dom";
import Btn from "../Btn";
import "../Projects/Project.css"
import { Tooltip } from "react-tooltip";
const Project = ({ project }) => {


  return (
    <div style={{ borderRadius: '0px 0px 4px 18px' }} className="container bg-artificialNavyBlue shadow-xl border border-white ">
      <Tooltip id="clickEvent" />
      <Link to={project.liveLink}>
      <div data-tooltip-id="clickEvent" data-tooltip-content="Click to Open Live Preview"  style={{backgroundImage: `url(${project.img})`}} className="box box-1 bg-cover h-[300px] cursor-pointer transition-all group-hover:bg-bottom ease-in-out duration-[6s]">

</div>
      </Link>
<div className="card-body">
        <h2 className="card-title text-white ">{project.projectName}</h2>
        <div className="w-28 h-[3px] bg-gradient-to-r from-purple-500 to-cyan-600"></div>
        <p className="text-white">{project.details}</p>
        <div className="card-actions text-white justify-end mt-3">
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
