import { Tooltip } from "react-tooltip";
import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import reactLogo from '../../assets/react.svg'
import Btn from "../Btn";
import { Link } from "react-router-dom";
import { saveAs } from 'file-saver';
import TypeAnime from "../TypeAnime";
import { FaJs } from "react-icons/fa";
import { scroller } from "react-scroll";

const Banner = () => {
  const handleDownload = () => {
    const pdfFilePath = '/public/ResumeOfJahid.pdf'
    fetch(pdfFilePath)
    .then(res => res.blob())
    .then(blob => {
      saveAs(blob, 'ResumeOfJahid.pdf')
      
    })
    .catch(error => {
      console.error('error downloading pdf file', error);
    })

  };
  
  
    const [orbit, setOrbit] = useState(0)
    
    

    useEffect(() => {
        const intervalId = setInterval(() => {
            setOrbit((prevOrbit => prevOrbit + 1))
        }, 50);


      


        return () => {
            clearInterval(intervalId)
        }
    }, [])

    const reactX = 100 * Math.cos((orbit * Math.PI) / 180);
    const reactY = 100 * Math.sin((orbit * Math.PI) / 180);


    const reactX2 = 100 * Math.cos((orbit * Math.PI) / 180);
    const reactY2 = 100 * Math.sin((orbit * Math.PI) / 180)

    const handleScroll = () => {
      scroller.scrollTo('getInTouch', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -50
      })
    }

  return (
    <div  data-aos="flip-left">
      <div>
      


<div className="flex flex-col-reverse pt-24 text-white">
    <TypeAnime />
<div>
<h3 className="text-3xl mt-16 font-bold text-center">Hi! It's me, Jahid Hasan</h3>
<p className="text-2xl mt-4 font-bold text-center text-artificialCyan"> 💻 Front-End Web Developer</p>

<p className="text-center">Explore my projects, check out my skills, and let's collaborate on your next digital venture.</p>

<div  className="mt-4 flex  flex-row  gap-5 justify-center">
<button onClick={handleDownload}>
<Link download={'cv'} > <motion.span
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="bg-gradient-to-r from-purple-500 to-cyan-600 w-1 cursor-pointer px-2 md:px-4 font-semibold py-1 md:py-2"
    >
       <span className="hidden md:inline">Download</span> Resume
    </motion.span></Link> 
</button>
| <button onClick={handleScroll}><Btn text="Get in Touch" /></button>
</div>
</div>
<Tooltip id="myName" />

<div className="flex flex-col md:flex-row relative items-center mx-auto mt-11">
<motion.div 
whileHover={{scale: 1.1}}
whileTap={{scale: 0.9}}
style={{
    top: `calc(50% + ${reactY}px)`,
    left: `calc(50% + ${reactX}px)`
}}
className="absolute text-2xl"
>
<span>
          <FaJs />
        </span>
    
</motion.div>


<div 
style={{
    top: `calc(50% - ${reactY2}px)`,
    left: `calc(50% - ${reactX2}px)`
}}
className="absolute text-2xl"
>
    <span>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </span>
    
</div>

    <span  className="mr-8 font-bold text-3xl">Welcome to </span>
    <img data-tooltip-id="myName" data-tooltip-content="Jahid Hasan's"  className="w-[200px] rounded-full  p-3" src="https://i.ibb.co/bbPmhgG/My-Profile-Pic.png" alt="" />
    <span className="ml-6 font-bold text-3xl">Portfolio</span></div>
</div>
    </div>

    </div>
  );
};

export default Banner;