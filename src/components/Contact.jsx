import { useRef } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_4c4nurf", "template_y5qxflc", form.current, {
        publicKey: "GD3dTSoWaPJYC0UAZ",
      })
      .then(
        () => {
          toast.success("Thank you! Your message has been sent.");
        },
        (error) => {
          toast.error("Failed to send message.");
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="bg-black py-12 px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-black z-0"
      />

      <motion.h2
        className="text-5xl font-extrabold bg-clip-text text-transparent 
  bg-gradient-to-r from-[#ff014f] to-[#b30f40] tracking-wider mb-8
  drop-shadow-[0_0_12px_rgba(255,1,79,0.7)] font-sans text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          className="bg-gray-950 p-8 rounded-2xl shadow-2xl border border-gray-500/50 backdrop-blur-md"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            {[
              { label: "Name", type: "text", name: "from_name" },
              { label: "Email", type: "email", name: "from_email" },
            ].map(({ label, type, name }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <label className="block text-gray-300 mb-2 font-semibold">
                  {label}
                </label>
                <input
                  type={type}
                  name={name}
                  className="w-full bg-gray-900 text-gray-300 border border-gray-500/40 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#ff014f]"
                  required
                />
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <label className="block text-gray-300 mb-2 font-semibold">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                className="w-full bg-gray-900 text-gray-300 border border-gray-500/40 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#ff014f]"
                required
              ></textarea>
            </motion.div>
            {/* button */}
            <div className="text-center">
              <motion.button
                type="submit"
                className="btn bg-gradient-to-r from-[#ff014f] to-[#b30f40] text-white hover:bg-gradient-to-l border-none px-6 py-3 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </motion.div>

        <motion.div
          className="bg-gray-950 p-8 rounded-2xl shadow-2xl border border-gray-500/50 backdrop-blur-md flex flex-col gap-6"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {[
            {
              Icon: FaPhoneAlt,
              label: "Phone",
              value: "+880 17458 01332",
              color: "text-[#ff014f]",
            },
            {
              Icon: FaWhatsapp,
              label: "WhatsApp",
              value: "+880 17458 01332",
              color: "text-green-500",
            },
            {
              Icon: FaEnvelope,
              label: "Email",
              value: "shoyonkumar143@gmail.com",
              color: "text-blue-500",
            },
            {
              Icon: FaMapMarkerAlt,
              label: "Location",
              value: "Shatarkul Badda, Dhaka, Bangladesh",
              color: "text-red-500",
            },
          ].map(({ Icon, label, value, color }, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4 p-4 rounded-lg bg-gray-900 hover:bg-gray-800 transition-all shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <Icon className={`${color} text-3xl`} />
              <div>
                <h2 className="text-gray-300 font-semibold text-lg">{label}</h2>
                <p className="text-gray-400">{value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
