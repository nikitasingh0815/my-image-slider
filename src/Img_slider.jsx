import React, { useState } from 'react';

import "./img.css";

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const arr = ["/images/pic1.jpg", "/images/pic2.jpg", "/images/pic3.jpg"];

  const rightMove = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % arr.length);
  };

  const leftMove = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + arr.length) % arr.length);
  };

  return (
    <div className="pics">
      <img src={arr[currentIndex]} alt="slide" />

      <div>
        <button onClick={leftMove}>Left</button>
        <button onClick={rightMove}>Right</button>
      </div>
    </div>
  );
}

export default ImageSlider;
