import React, { useState } from "react";
import Rating from "react-rating-stars-component";
import style from "./Feedback.module.css";

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle submitting feedback and rating
    console.log(feedback, rating);
    setFeedback("");
    setRating(0);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  return (
    <form className={style.formi} onSubmit={handleSubmit}>
        <label className={style.labeli} htmlFor="feedback-input">Please provide your feedback:</label>
        <textarea className={style.textareai}
          id="feedback-input"
          value={feedback}
          onChange={handleFeedbackChange}
          placeholder="Type your feedback here..."
          required
        />
        <label className={style.labeli} htmlFor="rating-input">Please rate your experience:</label>
        <Rating
          id="rating-input"
          count={5}
          value={rating}
          onChange={handleRatingChange}
          size={24}
          activeColor="#ffd700"
        />
        <button className={style.buttoni} type="submit">Submit</button>
      </form>
  );
};

export default FeedbackForm;
