import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <p>Krishna Garg ©️ {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;