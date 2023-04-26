import React from "react";
import recommends from "./assets/images/recommend.avif";
import style from "./RecommendOnQuery.module.css";
import { useState } from "react";

const RecommendOnQuery = () => {
  const [recommend, setRecommend] = useState({
    query: "",
    number: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { query, number } = recommend;
    const response = await fetch(`http://localhost:8000/recommend/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        number,
      }),
    });
    const json = await response.json();
    console.log(json);
  };

  function handleClear() {
    setRecommend({ query: "", number: "" });
  }

  const handleOnChange = (e) => {
    setRecommend({ ...recommend, [e.target.name]: e.target.value });
  };

  return (
    <div className={style.rec}>
      <img src={recommends}></img>
      <h3>Travel Destination Recommendation System</h3>
      <form className={style.fm} onSubmit={handleSubmit}>
        <div className={style.ltx}>
          <label className={style.lx} htmlFor="story">
            Enter query to search
          </label>
          <textarea
            id="story"
            rows="2"
            cols="50"
            type="text"
            name="query"
            onChange={handleOnChange}
            placeholder="Write anything..."
            className={style.tx}
          ></textarea>
        </div>
        <br />
        <div className={style.ltx}>
          <label className={style.lx} htmlFor="story">
            Enter number of Recommendations
          </label>
          <input
            id="story"
            rows="2"
            cols="50"
            type="number"
            name="number"
            background-color="whitesmoke"
            onChange={handleOnChange}
            placeholder="Write no..."
            className={style.no}
          ></input>
        </div>
        <div>
          <button type="submit" className="submit-button">
            Submit
          </button>
          <button type="submit" onClick={handleClear} className="clear-button">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecommendOnQuery;
