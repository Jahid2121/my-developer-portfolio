import { FaGithub, FaGithubAlt, FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { TiSocialLinkedin } from "react-icons/ti";

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    

<nav className="text-white z-50  dark:bg-gray-900 fixed w-full top-0 start-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <span className="flex items-center space-x-3 rtl:space-x-reverse">
      <span className="self-center  text-2xl font-semibold whitespace-nowrap  font-customGaramond dark:text-white">Jahid's Portfolio</span>
  </span>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <Link to="https://github.com/Jahid2121">
        <div className=" text-2xl border mt-1 rounded-full p-1 hover:bg-white hover:text-black md:text-5xl"><FiGithub /></div>
</Link>
    <Link to="https://www.linkedin.com/in/md-jahid-hasan01">
    <div className="timeline-end  border rounded-full p-1 hover:bg-white hover:text-black   text-2xl md:text-5xl"> <TiSocialLinkedin /></div></Link>
    

  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-custom-background text-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <NavLink href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent  md:p-0 md:dark:text-blue-500" aria-current="page"></NavLink>
      </li>
      <li>
        {/* <NavLink href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</NavLink> */}
      </li>
     
    </ul>
  </div>
  </div>
</nav>

    </>
  );
};

export default Navbar;