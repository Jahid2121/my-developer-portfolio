import { Tooltip } from "react-tooltip";
import RocketIcon from "../RocketIcon";
import { motion } from "framer-motion"
import { useEffect, useState } from "react";
const Banner = () => {
   

  return (
    <div className="mt-20">
      <div>
      

<div className="flex flex-col-reverse">
<div>


<p> 💻 Front-End Web Developer </p>
<p>🚀 Transforming Ideas into Reality </p>


Explore my projects, check out my skills, and let's collaborate on your next digital venture.

<button>[View My Projects](#projects)</button> | [Get in Touch](#contact-me)
</div>
<Tooltip id="myName" />
<motion.div 
whileHover={{scale: 1.1}}
whileTap={{scale: 0.9}}
className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
>
    
🚀
</motion.div>
<div className="flex items-center mx-auto mt-12">

    <span className="mr-4 font-bold text-3xl">Welcome to </span>
    <motion.div></motion.div> 
    <img data-tooltip-id="myName" data-tooltip-content="Jahid Hasan's"  className="w-[200px] hover: rounded-full border p-3" src="https://i.ibb.co/bbPmhgG/My-Profile-Pic.png" alt="" />
    <span className="ml-4 font-bold text-3xl">Portfolio</span></div>
</div>
    </div>
    </div>
  );
};

export default Banner;