import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <p>AKH ©️ {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
