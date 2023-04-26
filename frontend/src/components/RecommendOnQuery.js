import React from "react";
// import recommend from "./assets/images/recommend.avif";
import style from "./RecommendOnQuery.module.css";
// import house3 from "./assets/images/house3.jpg";
import { useState } from "react";

const RecommendOnQuery = () => {
  // const [text, setText] = useState("");
  const [recommend, setRecommend] = useState({
    text: "",
    number: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(text);
    // setText("");
  }

  function handleClear() {
    // setText("");
  }

  const handleOnChange = (e) => {
    setRecommend({ ...recommend, [e.target.name]: e.target.value });
  };

  return (
    <div className={style.rec}>
      <img src={recommend}></img>
      <h3>Travel Destination Recommendation System</h3>
      <form className={style.fm} onSubmit={handleSubmit}>
        <div className={style.ltx}>
          <label className={style.lx} for="story">
            Enter text to search
          </label>
          <textarea
            id="story"
            rows="2"
            cols="50"
            type="text"
            name="text"
            onChange={handleOnChange}
            placeholder="Write anything..."
            className={style.tx}
          ></textarea>
        </div>
        <br />
        <div className={style.ltx}>
          <label className={style.lx} for="story">
            Enter number of Recommendations
          </label>
          <input
            id="story"
            rows="2"
            cols="50"
            type="text"
            name="number"
            background-color= "whitesmoke"
            onChange={handleOnChange}
            placeholder="Write no..."
            className={style.tx}
          ></input>
        </div>
        <br />
        <div>
          <button type="submit" className="submit-button">
            Submit
          </button>
          <button type="button" onClick={handleClear} className="clear-button">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecommendOnQuery;
