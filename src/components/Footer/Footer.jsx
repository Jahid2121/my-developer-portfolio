import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer data-aos="fade-up" className=" mt-14 pb-7 border border-white p-8  text-white">
    <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-16">
        <span className="flex items-center space-x-3 rtl:space-x-reverse">
      <span className="self-center  text-4xl font-semibold whitespace-nowrap  font-customGaramond dark:text-white">Jahid&apos;s Portfolio</span>
  </span>
           
    <div className="footer-bottom">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center mt-6">
                    <p>&copy; 2023 Jahid Hasan. All Rights Reserved | Design by Jahid Hasan</p>
                </div>
            </div>
        </div>
    </div>
        </div>
    </div>
</footer>

  );
};

export default Footer;