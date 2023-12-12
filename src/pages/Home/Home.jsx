import Banner from "../../components/Banner/Banner";
import Projects from "../../components/Projects/Projects";
import Navbar from "../../shared/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Projects />
    </div>
  );
};

export default Home;