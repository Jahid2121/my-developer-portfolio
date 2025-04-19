import Banner from "../../components/Banner/Banner";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";
import WhyHireMe from "../../components/WhyMe/WhyHireMe";
import Navbar from "../../shared/Navbar";

const Home = () => {
  return (
    <>
      {/* <div className="md:block hidden">
      <AnimatedNavbar />
      </div> */}
      <Navbar />
      
      <div className="md:ml-20">
      <Banner />
      </div>
      <Projects />
      <Skills />
      <WhyHireMe />
      <GetInTouch />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;