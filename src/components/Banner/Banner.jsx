import { Tooltip } from "react-tooltip";
import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import reactLogo from '../../assets/react.svg'
import {  RiJavascriptFill } from "react-icons/ri";
import Btn from "../Btn";
import '../Banner/Banner.css'
import { Link } from "react-router-dom";
const Banner = () => {
    const [orbit, setOrbit] = useState(0)
    const [displayText, setDisplayText] = useState('Ideas');
    
    const textOptions = ['', 'Into', 'Reality'];
    const textIndex = textOptions.indexOf(displayText);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setOrbit((prevOrbit => prevOrbit + 1))
        }, 50);

        const textLoad = () => {
            const nextIndex = (textIndex + 1) % textOptions.length;
            setDisplayText(textOptions[nextIndex]);
          };
      
          const textIntervalId = setInterval(textLoad, 4000);


        return () => {
            clearInterval(intervalId)
            clearInterval(textIntervalId);
        }
    }, [])

    const reactX = 100 * Math.cos((orbit * Math.PI) / 180);
    const reactY = 100 * Math.sin((orbit * Math.PI) / 180);


    const reactX2 = 100 * Math.cos((orbit * Math.PI) / 180);
    const reactY2 = 100 * Math.sin((orbit * Math.PI) / 180)

  return (
    <div className="mt-20">
      <div>
      

<div className="text-2xl container mt-16 font-bold text-center"> 🚀 Transforming Ideas<p>{' '}</p>  
<span className="text first-text">{displayText}</span>

  </div>
<div className="flex flex-col-reverse">
<div>

<h3 className="text-3xl mt-16 font-bold text-center">Hi! It's me, Jahid Hasan</h3>
<p className="text-2xl mt-4 font-bold text-center text-artificialPastel"> 💻 Front-End Web Developer</p>

<p className="text-center">Explore my projects, check out my skills, and let's collaborate on your next digital venture.</p>

<div className="mt-4 flex gap-5 justify-center">
<Link download={}><Btn  text={"Download CV"} /></Link> | <Btn text="Get in Touch" />
</div>
</div>
<Tooltip id="myName" />

<div className="flex relative items-center mx-auto mt-11">
<motion.div 
whileHover={{scale: 1.1}}
whileTap={{scale: 0.9}}
style={{
    top: `calc(50% + ${reactY}px)`,
    left: `calc(50% + ${reactX}px)`
}}
className="absolute text-3xl"
>
    <RiJavascriptFill /> 
    
</motion.div>


<motion.div 
whileHover={{scale: 1.1}}
whileTap={{scale: 0.9}}
style={{
    top: `calc(50% - ${reactY2}px)`,
    left: `calc(50% - ${reactX2}px)`
}}
className="absolute text-2xl"
>
    <span>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </span>
    
</motion.div>

    <span className="mr-6 font-bold text-3xl">Welcome to </span>
    <motion.div></motion.div> 
    <img data-tooltip-id="myName" data-tooltip-content="Jahid Hasan's"  className="w-[200px] hover: rounded-full border p-3" src="https://i.ibb.co/bbPmhgG/My-Profile-Pic.png" alt="" />
    <span className="ml-6 font-bold text-3xl">Portfolio</span></div>
</div>
    </div>

    </div>
  );
};

export default Banner;