import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TabSection from "./components/TabSection";

function App() {
  return (
    <>
      <div className="">
        <Navbar></Navbar>
        <Hero />
        <AboutMe />
        <TabSection></TabSection>
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
