import { useState, useRef, useEffect } from "react";
import img1 from "../images/f.jpg";
import img2 from "../images/c1.jpg";
import img3 from "../images/cr.jpg";
import img4 from "../images/co.jpg";

import "../Background.css";
const Background = () => {
  const images = [img1, img2, img3, img4];
  const [currentSlide, setCurrentSlide] = useState(0);
  // useRef does not cause a re-render
  let sliderInterval = useRef();
  let switchImages = () => {
    if (currentSlide < images.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };
  useEffect(() => {
    sliderInterval = setInterval(() => {
      switchImages();
    }, 5000);
    return () => {
      clearInterval(sliderInterval);
    };
  });
  return (
    <div className="imgWrapper" >
    
      {images.map((img, index) => {
        return (
          <img
            src={img}
            className={
              index === currentSlide ? "imageActive homeImage" : "image"
            }
          />
        );
      })}
    </div>
  );
};

export default Background;
