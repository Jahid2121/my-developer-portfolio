import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer data-aos="fade-up" className=" mt-14 pb-7 border border-white p-8  text-white">
    <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3  gap-16">
            <div className="col-lg-4">
                <h4 className="text-2xl">Contact Information</h4>
                <p><i className="fas fa-envelope"></i> Email: jahidhasan20u@gmail.com</p>
                <p><i className="fas fa-phone"></i> Phone: +880 1616155648</p>
            </div>
            <div className="col-lg-4">
                <h4 className="text-2xl">Connect With Me</h4>
                <ul className="social-icons text-2xl flex gap-4 justify-center">
                    <li ><NavLink href="https://github.com/jahid2121" target="_blank"><FaGithub /></NavLink></li>
                    <li><NavLink href="https://linkedin.com/in/yourusername" target="_blank"><FaLinkedinIn /></NavLink></li>

                </ul>
            </div>
            <div className="col-lg-4">
                <h4 className="text-2xl">Location</h4>
                <p><i className="fas fa-map-marker-alt"></i> Sylhet, Bangladesh</p>
            </div>
        </div>
    </div>
    <div className="footer-bottom">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center mt-6">
                    <p>&copy; 2023 Jahid Hasan. All Rights Reserved | Design by Jahid Hasan</p>
                </div>
            </div>
        </div>
    </div>
</footer>

  );
};

export default Footer;