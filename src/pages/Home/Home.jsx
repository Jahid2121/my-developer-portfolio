import AnimatedNavbar from "../../components/AnimatedNavbar/AnimatedNavbar";
import Banner from "../../components/Banner/Banner";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";
import StudyInfo from "../../components/StudyInfo/StudyInfo";
import Navbar from "../../shared/Navbar";

const Home = () => {
  return (
    <>
      <AnimatedNavbar />
      <div className="md:ml-20">
      <Navbar />
      
      <Banner />
      <Projects />
      <Skills />
      <StudyInfo />
      <Contact />
      <GetInTouch />
      <Footer />
      </div>
    </>
  );
};

export default Home;