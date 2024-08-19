// ImageCarousel.tsx
import React from "react";
import { Carousel } from "react-responsive-carousel";

import { SliderProps } from "./types";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./slider.css";

const Slider: React.FC<SliderProps> = ({ images }) => {
  return (
    <Carousel
      showThumbs={false}
      infiniteLoop={true}
      useKeyboardArrows
      autoPlay
      interval={5000}
      showIndicators={false}
    >
      {images.map((image, index) => (
        <div className="carousel-image-container" key={index}>
          <img src={image} alt="" className="carousel-image" />
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
