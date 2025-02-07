import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import me from "../assets/me.jpg";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="bg-black py-10 lg:py-24 md:py-16">
      <div className="w-11/12 mx-auto flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="flex-1 mx-auto text-center md:text-left">
          {/* Animated Heading with Typing Effect */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 font-[Poppins] tracking-wider"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Hi, I’m <span className="text-[#ff014f]">Shoyon Kumar</span>
          </motion.h1>

          {/* designation */}
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              1000,
              "MERN Stack Developer",
              1000,
            ]}
            speed={50}
            wrapper="h2"
            className="text-3xl text-white font-semibold mb-6 "
            repeat={Infinity}
          />

          {/* Description */}
          <motion.p
            className="text-white/80 text-sm mb-6 lg:w-3/5 inline-block"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Junior web developer, adventure seeker, and passionate photographer.
            Capturing the world through my lens, playing football, and gaming on
            my PC. Always up for new experiences!
          </motion.p>

          {/* Subtitle */}
          <motion.p
            className="text-white/80 uppercase font-medium mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Find me on
          </motion.p>

          {/* Social Media Buttons with Animations */}
          <motion.div
            className="gap-5 flex mb-6 justify-center md:justify-start "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            {[
              {
                href: "https://www.facebook.com/SHOYONKUMAR143",
                icon: <FaFacebook />,
              },
              { href: "https://github.com/shoyonp", icon: <FaGithub /> },
              {
                href: "https://www.instagram.com/gloomy_0016/",
                icon: <FaInstagram />,
              },
              {
                href: "https://www.linkedin.com/in/shoyon-kumar-668210345/",
                icon: <FaLinkedin />,
              },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="btn bg-gradient-to-r from-[#ff014f] to-[#b30f40] text-white px-5 py-4 border-none hover:bg-gradient-to-l transition-all duration-500 ease-in-out">
                  {social.icon}
                </button>
              </motion.a>
            ))}
          </motion.div>

          {/* Animated Resume Button */}
          <motion.a
            href="https://docs.google.com/document/d/1U90TQiHcD3iMbCMp5jvZ3eRtl5KMTAOFoOT27PmRlmE/edit?usp=sharing"
            className="btn bg-gradient-to-r from-[#ff014f] to-[#b30f40] text-white hover:bg-gradient-to-l border-none"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 20px rgba(255, 1, 79, 0.5)",
              transition: { duration: 0.3 },
            }}
            whileTap={{
              scale: 0.95,
              boxShadow: "0 0 10px rgba(255, 1, 79, 0.3)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Download Resume
          </motion.a>
        </div>

        {/* Image Section with Animation */}
        <div className="mt-10 md:mt-0 lg:w-[400px]">
          <motion.img
            className="rounded-full border-4 object-cover border-gray-800 w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] mx-auto"
            src={me}
            alt="Shoyon Kumar"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
