import Btn from "../Btn";


const GetInTouch = () => {
   
  return (
    <div className="max-w-md  mx-auto my-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="mt-20 ml-3 font-bold text-4xl ">Get In Touch</h2>
      <form >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium ">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium ">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium ">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 p-2 w-full border rounded-md"
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
      
    </div>
    
  );
};

export default GetInTouch;