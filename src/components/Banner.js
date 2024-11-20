import React, { useEffect, useState } from "react";
import "./Banner.css";

const Banner = () => {
  const images = [
    "https://plus.unsplash.com/premium_photo-1706102974861-c65692f3b36c?q=80&w=3544&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1685287731073-3e3c4c565132?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1725296624057-d723d163943e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fG5vdGVzJTIwYXBwfGVufDB8fDB8fHww"
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="banner-container">
      <div
        className="slider"
        style={{ backgroundImage: `url(${images[currentSlide]})` }}
      >
        <div className="overlay-text">
          <h1>Welcome to NotePro</h1>
          <p>Capture your ideas and stay organized with ease!</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;