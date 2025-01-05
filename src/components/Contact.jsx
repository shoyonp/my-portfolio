import React from "react";
import toast from "react-hot-toast";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get form data
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    // Example submission logic (you can replace it with API calls)
    toast.success(`Thank you, ${name}! Your message has been sent.`);
    e.target.reset(); // Reset the form
  };
  return (
    <section id="contact" className="bg-black/95 py-12 px-6 mt-1">
      <h1 className="text-center text-4xl text-white font-bold mb-10">
        <span className="text-[#ff014f]">Contact</span> Me
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Contact Form */}
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg animate-fadeIn">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2 font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="input input-bordered w-full bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2 font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered w-full bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2 font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="5"
                className="textarea textarea-bordered w-full bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="btn bg-gray-800 hover:bg-gray-900 border-none text-[#ff014f] px-6 py-3 rounded-lg transition-all"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg animate-fadeIn flex flex-col gap-6">
          {/* Phone */}
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-[#ff014f] text-2xl" />
            <div>
              <h2 className="text-gray-300 font-semibold text-lg">Phone</h2>
              <p className="text-gray-400">+880 17458 01332</p>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center gap-4">
            <FaWhatsapp className="text-green-500 text-2xl" />
            <div>
              <h2 className="text-gray-300 font-semibold text-lg">WhatsApp</h2>
              <p className="text-gray-400">+880 17458 01332</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-blue-500 text-2xl" />
            <div>
              <h2 className="text-gray-300 font-semibold text-lg">Email</h2>
              <p className="text-gray-400">shoyonkumar143@gmail.com</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-red-500 text-2xl" />
            <div>
              <h2 className="text-gray-300 font-semibold text-lg">Location</h2>
              <p className="text-gray-400">Shatarkul Badda, Dhaka, BNagladesh</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
