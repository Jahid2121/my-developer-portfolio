import Banner from "../../components/Banner/Banner";
import Contact from "../../components/Contact/Contact";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";
import StudyInfo from "../../components/StudyInfo/StudyInfo";
import Navbar from "../../shared/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Projects />
      <Skills />
      <StudyInfo />
      <Contact />
      <GetInTouch />
    </div>
  );
};

export default Home;