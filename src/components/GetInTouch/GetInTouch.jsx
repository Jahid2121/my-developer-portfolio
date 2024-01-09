import axios from "axios";
import Btn from "../Btn";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAxiosPublic from "../../hooks/useAxiosPublic";

const GetInTouch = () => {
  const axiosPublic = useAxiosPublic()
  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value 
    const email = form.email.value 
    const message = form.message.value 
    const formData = {
      name: name,
      email: email,
      message: message
    }
    
    toast('Message sent Successfully !')
    axiosPublic.post('/sendEmail', formData)
    .then(() => {})
    .catch(error => {
      console.log(error);
    })
  }
   
  return (
    <div id="getInTouch" className="max-w-md  mx-auto bg-artificialNavyBlue border border-white text-white pb-4 p-6 bg- rounded-md shadow-md">
      <h2 className="mt-20 ml-3 font-bold text-4xl ">Get In Touch</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium ">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="mt-1 text-black p-2 w-full border rounded-md"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium ">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="mt-1 text-black p-2 w-full border rounded-md"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block  text-sm font-medium ">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 p-2 text-black w-full border rounded-md"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className=""
        >
          <Btn text="Send" />
        </button>
      </form>
      <ToastContainer />
    </div>
    
  );
};

export default GetInTouch;