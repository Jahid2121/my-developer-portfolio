import { Tooltip } from "react-tooltip";
import Btn from "../Btn";
import { saveAs } from 'file-saver';
import TypeAnime from "../TypeAnime";
import { IoMdDownload } from "react-icons/io";


const Banner = () => {
  const handleDownload = () => {
    const pdfFilePath = '/public/Resume of Jahid (Front End Developer).pdf'
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


<div className="flex  pt-24 text-white">
   

<Tooltip id="myName" />
     

<div className="grid grid-cols-1 md:grid-cols-2  relative items-center mx-auto mt-11">




    <div className=" ml-1 ">
<h3 className="text-3xl md:text-6xl  mt-16 font-bold font-customGaramond text-center">Hi! I&apos;m Jahid Hasan</h3>
<TypeAnime />

<p className="text-center text-xs">Explore my projects, check out my skills, and let&apos;s collaborate on your next digital venture.</p>

<div className="mt-3 ml-[90px]  md:ml-52"  >
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
    <img data-tooltip-id="myName" data-tooltip-content="Jahid Hasan"  className="w-auto  p-3" src="https://i.ibb.co/K99J8xX/Professional-profile.png" alt="" />
    </div>
    </div>
</div>
    </div>

    </div>
  );
};

export default Banner;