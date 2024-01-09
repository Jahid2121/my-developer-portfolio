import {  FaPhoneAlt, FaSearchLocation } from "react-icons/fa";
import SectionTitle from "../SectionTitle";
import { MdEmail } from "react-icons/md";


const Contact = () => {
  return (
    <>
    <SectionTitle Title="<Contact Information" />
  
    <div data-aos="zoom-in-up" className="my-10 grid grid-cols-1 text-white md:grid-cols-2 lg:grid-cols-3 items-center gap-5 p-6 bg-artificialBlue rounded-md shadow-md">
      <div className="flex flex-col items-center space-x-4">
        <div className="text-white flex text-3xl items-center gap-1">
          <span className=""><FaSearchLocation /></span> <span className="font-semibold">Location</span>
        </div>
        <p className="">Jaintapur, Sylhet, Bangladesh</p>
      </div>
      <div className="flex flex-col items-center space-x-4">
        <div className="text-white flex text-3xl items-center gap-3">
          <span className=""><FaPhoneAlt /></span> <span className="font-semibold">Phone</span>
        </div>
        <p className="">+8801616155648</p>
      </div>
      <div className="flex flex-col items-center space-x-4">
        <div className="text-white flex text-3xl items-center gap-3">
          <span className=""><MdEmail /></span> <span className="font-semibold">Email</span>
        </div>
        <p className="">Jahidsarkar2121@gmail.com</p>
      </div>
    </div>
  
    <div className="flex justify-end">
    <SectionTitle Title="/>" />
    </div>
  </>
  );
};

export default Contact;


