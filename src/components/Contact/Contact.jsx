import { MdEmail } from 'react-icons/md';
import SectionTitle from '../SectionTitle';
import { FaPhoneAlt, FaSearchLocation } from 'react-icons/fa';

const Contact = () => {
    return (
        <div>
            <SectionTitle Title="<Contact Information" />
        <div data-aos="zoom-in-up" className="grid grid-cols-1 text-white md:grid-cols-2 lg:grid-cols-3 items-center gap-5 rounded-md ">
          <div className="flex flex-col items-center space-x-4">
            <div className="text-white flex text-3xl items-center gap-1">
              <span className="border p-2 rounded-full hover:bg-white hover:text-black sm:p-1"><FaSearchLocation /></span> <span className="font-semibold ">Location</span>
            </div>
            <p className="">Jaintapur, Sylhet, Bangladesh</p>
          </div>
          <div className="flex flex-col items-center space-x-4">
            <div className="text-white flex text-3xl items-center gap-3">
              <span className="border p-2 rounded-full hover:bg-white hover:text-black sm:p-1"><FaPhoneAlt /></span> <span className="font-semibold">Phone</span>
            </div>
            <p className="">+8801616155648</p>
          </div>
          <div className="flex flex-col items-center space-x-4">
            <div className="text-white flex text-3xl items-center gap-3">
              <span className="border p-2 rounded-full hover:bg-white hover:text-black sm:p-1"><MdEmail /></span> <span className="font-semibold">Email</span>
            </div>
            <p className="">jahidhasan20u@gmail.com</p>
          </div>
        </div>
      
        <div className="flex justify-end">
        <SectionTitle Title="/>" />
        </div>
        </div>
    );
};

export default Contact;