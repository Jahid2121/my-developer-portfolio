import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="site-footer">
    <div className="container">
        <div className="row">
            <div className="col-lg-4">
                <h4>Contact Information</h4>
                <p><i className="fas fa-envelope"></i> Email: your.email@example.com</p>
                <p><i className="fas fa-phone"></i> Phone: +123 456 7890</p>
            </div>
            <div className="col-lg-4">
                <h4>Connect With Me</h4>
                <ul className="social-icons">
                    <li><NavLink href="https://github.com/yourusername" target="_blank"><i className="fab fa-github"></i></NavLink></li>
                    <li><NavLink href="https://linkedin.com/in/yourusername" target="_blank"><i className="fab fa-linkedin"></i></NavLink></li>
                    <li><NavLink href="https://twitter.com/yourusername" target="_blank"><i className="fab fa-twitter"></i></NavLink></li>
                </ul>
            </div>
            <div className="col-lg-4">
                <h4>Location</h4>
                <p><i className="fas fa-map-marker-alt"></i> City, Country</p>
            </div>
        </div>
    </div>
    <div className="footer-bottom">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <p>&copy; 2023 Your Name. All Rights Reserved | Design by Your Name</p>
                </div>
            </div>
        </div>
    </div>
</footer>

  );
};

export default Footer;