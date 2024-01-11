import {  FaEnvelope,  FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../AnimatedNavbar/AnimatedNavbar.css"
const AnimatedNavbar = () => {
  return (
    <nav className=" text-white   h-screen pt-40 pr-5 fixed ">
      <ul className="text-3xl  ml-2 ">
        <li className="mb-4 border nav-Item flex"><Link><FaHome /></Link> <span className="link-text  text-white">Home </span> </li>
        <li className="mb-4 border nav-Item flex"><Link><FaEnvelope /></Link> <span className="link-text text-white">Contact </span> </li>
        
        
      </ul>
    </nav>
  );
};

export default AnimatedNavbar;