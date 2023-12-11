import { Tooltip } from "react-tooltip";
import RocketIcon from "../RocketIcon";
import { motion } from "framer-motion"
import { useEffect, useState } from "react";
const Banner = () => {
    const [orbit, setOrbit] = useState(0)
    

    useEffect(() => {
        const intervalId = setInterval(() => {
            setOrbit((prevOrbit => prevOrbit + 1))
        }, 50);

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    const rocketX = 100 * Math.cos((orbit * Math.PI) / 180);
    const rocketY = 100 * Math.sin((orbit * Math.PI) / 180)

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

<div className="flex relative items-center mx-auto mt-12">
<motion.div 
whileHover={{scale: 1.1}}
whileTap={{scale: 0.9}}
style={{
    top: `calc(50% - ${rocketY}px)`,
    left: `calc(50% - ${rocketX}px)`
}}
className="absolute text-2xl"
>
    
    🚀
</motion.div>

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