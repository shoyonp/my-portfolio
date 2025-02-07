import { motion } from "framer-motion";
import me from "../assets/me2.jpg";
const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative bg-black text-white py-20 px-8 sm:px-12 overflow-hidden z-0"
    >
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12">
        {/* Image Section */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={me}
            alt="Shoyon Kumar"
            className="rounded-full border-4 border-gray-800 w-64 h-64 md:w-80 md:h-80 object-cover"
          />
        </motion.div>
        {/* Text Section */}
        <div className="flex-1">
          <motion.h2
            className="text-5xl font-extrabold bg-clip-text text-transparent 
  bg-gradient-to-r from-[#ff014f] to-[#b30f40] tracking-wider mb-3 
  drop-shadow-[0_0_12px_rgba(255,1,79,0.7)] font-sans"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Me
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-sm leading-relaxed mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Hey there! I'm{" "}
            <span className="text-[#ff014f] font-semibold">Shoyon Kumar</span>,
            a passionate Frontend & MERN Stack Developer. My journey began with
            a deep curiosity about how websites function. I have always loved my
            family and <span className="text-[#ff014f] font-bold">her</span>,
            and I want to do something meaningful for them. That's what pushed
            me to start my journey in web development. I enrolled in
            <span className="text-[#ff014f] font-bold"> Programming Hero</span>,
            where my passion for coding took off. Now, I specialize in React,
            Tailwind CSS, and I’m currently exploring Next.js.
          </motion.p>

          <motion.p
            className="text-sm leading-relaxed mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            When I’m not coding, you’ll find me enjoying football (
            <span className="text-[#ff014f] font-semibold">Real Madrid</span>{" "}
            fan ⚽), gaming, or capturing beautiful moments through photography.
            I love exploring new technologies and continuously learning to
            improve my skills.
          </motion.p>

          {/* Hobbies & Interests */}
          <motion.div
            className="mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#ff014f] to-[#b30f40]">
              Hobbies & Interests:
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>⚽ Football Enthusiast (Big Real Madrid fan!)</li>
              <li>🎮 Passionate Gamer</li>
              <li>📷 Photography & Capturing Moments</li>
              <li>🚀 Exploring New Technologies</li>
              <li>💻 Building Unique Web Experiences</li>
            </ul>
          </motion.div>

          {/* Call to Action */}
          <motion.a
            href="#contact"
            className="btn bg-gradient-to-r mt-5 from-[#ff014f] to-[#b30f40] text-white hover:bg-gradient-to-l border-none"
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
            Let's Connect
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
