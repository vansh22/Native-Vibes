import React, { useState } from "react";
import style from "./ImageSlider.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImageSlider = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevClick = () => {
    const newIndex = (currentImage - 1 + images.length) % images.length;
    setCurrentImage(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = (currentImage + 1) % images.length;
    setCurrentImage(newIndex);
  };

  return (
    <div className={style.imgcont}>
      <div className={style.sym} onClick={handlePrevClick}>
        &#10094;
      </div>
      <img className={style.pic} src={images[currentImage]} alt="slider" />
      <div className={style.sym} onClick={handleNextClick}>
        &#10095;
      </div>
    </div>
  );
};

export default ImageSlider;

{
  /* <div className={style.btcont}>
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div> */
}
