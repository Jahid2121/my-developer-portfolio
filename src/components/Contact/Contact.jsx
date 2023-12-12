import { FaMailBulk, FaPhoneAlt, FaVoicemail } from "react-icons/fa";


const Contact = () => {
  return (
    <div className="max-w-md mx-auto my-10  p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
      <div className="flex items-center space-x-4">
        <div className="text-artificialLightPeach">
          <FaPhoneAlt />
        </div>
        <p className="text-gray-700">01616155648</p>
      </div>
      <div className="flex items-center space-x-4 mt-4">
        <div className="text-artificialLightPeach">
         <FaMailBulk />
        </div>
        <p className="text-gray-700">jahidsarkar2121@gmail.com</p>
      </div>
    </div>
  );
};

export default Contact;
