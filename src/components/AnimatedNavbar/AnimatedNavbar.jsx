import {  FaEnvelope,  FaHome } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import "../AnimatedNavbar/AnimatedNavbar.css"
const AnimatedNavbar = () => {
  return (
    <nav className=" text-white   h-screen pt-40 pr-5 fixed ">
      <ul className="text-3xl  ml-2 ">
        <li className="mb-4 border rounded-full pl-2 nav-Item "><NavLink to="/" className="flex">
        <span><FaHome /></span> <span className="link-text  text-white">Home </span>
          </NavLink> </li>
        <li className="mb-4 border rounded-full pl-2 nav-Item "><NavLink to="/contact" className="flex"><span><FaEnvelope /></span> <span className="link-text text-white">Contact </span></NavLink> </li>
        
        
      </ul>
    </nav>
  );
};

export default AnimatedNavbar;