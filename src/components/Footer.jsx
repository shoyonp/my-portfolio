import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-gray-800 backdrop-blur-lg text-white rounded p-6">
      <aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved by Me</p>
      </aside>
    </footer>
  );
};

export default Footer;
