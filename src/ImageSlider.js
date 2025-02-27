import React, { useState } from "react";
const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    height: "100%",
    position: "relative",
  };
  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };
  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    left: "32px",
    fontSize: "45px",
    transform: "translate(0, -50%)",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };
  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    right: "32px",
    fontSize: "45px",
    transform: "translate(0, -50%)",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };
  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
  };
  const dotStyles = {
    cursor: "pointer",
    fontSize: "25px",
    margin: "0 3px",
  };

  const goToPrevious = () => {
    const inFirstSlide = currentIndex === 0;
    const newIndex = inFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const inLastSlide = currentIndex === slides.length - 1;
    const newIndex = inLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={goToPrevious}>
        -
      </div>
      <div style={rightArrowStyles} onClick={goToNext}>
        +
      </div>
      <div style={slideStyles}></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            style={dotStyles}
            onClick={() => goToSlide(slideIndex)}
          >
            o
          </div>
        ))}
      </div>
    </div>
  );
};
export default ImageSlider;
