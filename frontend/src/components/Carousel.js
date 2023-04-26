import React, { useState } from "react";
import "./Carousel.css";
import { Link } from "react-router-dom";

const Carousel = ({ locals }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % locals.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + locals.length) % locals.length);
  };

  return (
    <div>
      <Link style={{textDecoration: 'none'}} to="/raja">
        <div className="cardlo-slider">
          <div className="cardlos-wrapper">
            {locals.map((local, index) => (
              <div
                key={index}
                className={`cardlo ${index === currentIndex ? "active" : ""}`}
              >
                <img src={local.image} alt={local.name} />
                <div className="cardlo-info">
                  <h3>{local.name}</h3>
                  <p>{local.feedback.comments}</p>
                </div>
                {/* <div className="cardlo-rating">
                  <span>{local.feedback.rating}</span>
                </div> */}
                <div className="card-footer">
                  <span className="badge bg-primary">{local.feedback.rating}</span>
                  <span className="mx-2">
                    Facilities: {local.feedback.facilities}
                  </span>
                  <span className="mx-2">Food: {local.feedback.food}</span>
                  <span className="mx-2">
                    Cleanliness: {local.feedback.cleanliness}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Link>
      <div className="slider-controls">
        <button onClick={handlePrev}>&lt;</button>
        <button onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
};

export default Carousel;
