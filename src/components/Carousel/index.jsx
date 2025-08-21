import { useState } from 'react';
import ArrowLeft from "../../assets/vector-left.svg"
import ArrowRight from "../../assets/vector-right.svg"

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel">
      <button className="carousel-button carousel-button-prev" onClick={prevSlide}>
        <img src={ArrowLeft} alt="arrow-left" />
      </button>

      <div className="carousel-container">
        {items.map((item, index) => (
          <div
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
            key={index}
          >
            {item}
          </div>
        ))}
      </div>

      <button className="carousel-button carousel-button-next" onClick={nextSlide}>
        <img src={ArrowRight} alt="arrow-right" />
      </button>
    </div>
  );
};

export default Carousel;
