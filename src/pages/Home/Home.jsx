import Banner from "../../components/Banner/Banner";
import Contact from "../../components/Contact/Contact";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import Projects from "../../components/Projects/Projects";
import Navbar from "../../shared/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Projects />
      <GetInTouch />
      <Contact />
    </div>
  );
};

export default Home;