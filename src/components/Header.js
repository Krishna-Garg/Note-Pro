import React from 'react';
import "./Header.css";

const Header = () => {
  return (
	<header className="header-container">
		<div className="logo">
			<p>NotePro</p>
		</div>
		<nav className="nav-links">
			<a href="#home" className="nav-item">Home</a>
			<a href="#about" className="nav-item">About Us</a>
			<a href="#features" className="nav-item">Features</a>
			<a href="#contact" className="nav-item">Contact Us</a>
		</nav>
	</header>
  )
}

export default Header;
