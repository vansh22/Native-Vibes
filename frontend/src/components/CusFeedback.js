import React from "react";
import "./CusFeedback.css"

const feedback = [
  { name: "John Doe", rating: 5, comment: "Great product!" },
  { name: "Jane Smith", rating: 4, comment: "Good service." },
  { name: "Bob Johnson", rating: 3, comment: "Could be better." },
  { name: "Samantha Lee", rating: 2, comment: "Not satisfied." },
  { name: "Michael Chen", rating: 4, comment: "Decent experience." },
  { name: "Emily Wang", rating: 5, comment: "Amazing customer service!" },
  { name: "Jackie Chan", rating: 3, comment: "Average product." },
  { name: "Tiffany Liu", rating: 4, comment: "Good value for the price." }
];

const FeedbackList = () => {
  return (
    <div className="feedback-container">
      <h2 className="text-center">Customer Feedback</h2>
      <div className="feedback-list">
        {feedback.map((item, index) => (
          <div key={index} className="feedback-item">
            <h3>{item.name}</h3>
            <p>{item.comment}</p>
            <div>
              {[...Array(item.rating)].map((star, index) => (
                <span key={index}>&#9733;</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackList;
