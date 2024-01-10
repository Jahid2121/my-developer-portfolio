import { Tooltip } from "react-tooltip";
import { motion } from "framer-motion"
import Btn from "../Btn";
import { saveAs } from 'file-saver';
import TypeAnime from "../TypeAnime";
import { IoMdDownload } from "react-icons/io";


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
  
  




  return (
    <div  data-aos="flip-left">
      <div>
      


<div className="flex flex-col-reverse pt-24 text-white">
    <TypeAnime />

<Tooltip id="myName" />

<div className="flex  flex-col md:flex-row gap-32 relative items-center mx-auto mt-11">




    <div>
<h3 className="text-6xl mt-16 font-bold font-customGaramond text-center">Hi! I'm Jahid Hasan</h3>
<p className="text-2xl mt-4 font-bold text-center "> Front-End Web Developer</p>

<p className="text-center">Explore my projects, check out my skills, and let's collaborate on your next digital venture.</p>

<div className="mt-3  ml-10"  >
<span  >
<button
className=""
onClick={handleDownload}
  

> 
<Btn icon={<IoMdDownload />} text="Download Resume"/>
</button>

</span>
</div>
</div>
    
    <div>
    <img data-tooltip-id="myName" data-tooltip-content="Jahid Hasan's"  className="  p-3" src="https://i.ibb.co/bbPmhgG/My-Profile-Pic.png" alt="" />
    </div>
    </div>
</div>
    </div>

    </div>
  );
};

export default Banner;