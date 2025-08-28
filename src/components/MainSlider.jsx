import React from "react";
import { useState } from "react";
import image1 from "../assets/travel-1.jpg";
import image2 from "../assets/travel-2.jpg";
import image3 from "../assets/travel-3.jpg";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function MainSlider() {
  const images = [image1, image2, image3];
  const [currentImage, setCurrentImage] = useState(0);

  const changeSlide = (directie) => {
    switch (directie) {
      case "left":
        setCurrentImage(
          currentImage === 0 ? images.length - 1 : currentImage - 1
        );
        break;
      case "right":
        setCurrentImage(
          currentImage === images.length - 1 ? 0 : currentImage + 1
        );
        break;
    }
  };

  return (
    <div className="slider">
      <FaAngleLeft
        className="arrow-btn arrow-left"
        onClick={() => changeSlide("left")}
      />
      <img src={images[currentImage]} />
      <FaAngleRight
        className="arrow-btn arrow-right"
        onClick={() => changeSlide("right")}
      />
    </div>
  );
}

export default MainSlider;
