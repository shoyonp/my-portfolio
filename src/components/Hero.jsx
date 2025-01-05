import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import me from "../assets/me.jpg";

const Hero = () => {
  return (
    <div className=" bg-black">
      <div className=" w-11/12 mx-auto flex flex-col  md:flex-row gap-10 items-center p-5 md:p-14 lg:p-20">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 mt-9 md:mt-0 ">
            Hi, I’m <span className="text-[#ff014f]">Shoyon Kumar</span>
          </h1>
          <p className="text-white/80 text-base my-10 lg:w-3/5">
          Junior web developer, adventure seeker, and passionate photographer. Capturing the world through my lens, playing football, and gaming on my PC. Always up for new experiences!
          </p>
          <p
            className="text-white/80 uppercase font-medium mb-4
          "
          >
            find with me
          </p>
          <div className="gap-5 flex mb-6">
            <a href="https://www.facebook.com/SHOYONKUMAR143">
              <button className="btn bg-gray-800 text-white px-5 py-4 border-none hover:bg-gray-900">
                <FaFacebook></FaFacebook>
              </button>
            </a>
            <a href="https://github.com/shoyonp">
              <button className="btn  bg-gray-800 text-white px-5 py-4 border-none hover:bg-gray-900">
                <FaGithub></FaGithub>
              </button>
            </a>
            <a href="https://www.instagram.com/gloomy_0016/">
              <button className="btn  bg-gray-800 text-white px-5 py-4 border-none hover:bg-gray-900">
                <FaInstagram></FaInstagram>
              </button>
            </a>
            <a href="https://www.linkedin.com/in/shoyon-kumar-668210345/">
              <button className="btn  bg-gray-800 text-white px-5 py-4 border-none hover:bg-gray-900">
                <FaLinkedin></FaLinkedin>
              </button>
            </a>
          </div>
          <a href="https://docs.google.com/document/d/1U90TQiHcD3iMbCMp5jvZ3eRtl5KMTAOFoOT27PmRlmE/edit?usp=sharing">
            <button className="btn bg-gray-800 hover:bg-gray-900 border-none text-[#ff014f]">
              Download Resume
            </button>
          </a>
        </div>
        <div className="">
          <img className="rounded-lg md:w-full lg:w-[500px]" src={me} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
