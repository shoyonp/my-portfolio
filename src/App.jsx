import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import Skills from "./components/Skills";
import SwiperProject from "./components/SwiperProject";

function App() {
  return (
    <>
      <div className="">
        <Navbar></Navbar>
        <Hero />
        <AboutMe />
        <Skills />
        <Education />
        {/* <Experience /> */}
        <SwiperProject></SwiperProject>
        {/* <ProjectCard></ProjectCard> */}
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
