import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import StateCropsData from "./assets/StateCropsData.json";
import Navbar from "./Navbar";
import "./Landing.css";
import Services from "./Services";
// import CustomerFavour from "./CustomerFavour";

const Landing = () => {
  const [state, setState] = useState("State");
  const [page, setPage] = useState("/");
  console.log(StateCropsData);
  let navigate = useNavigate();

  const changeState = (e) => {
    setState(e.target.value);
    setPage("/state");

    navigate("/state");
  };
  useEffect(() => {}, [state]);
  console.log(state);

  return (
    <div className="App">
      <div
        style={{ height: "100vh", position: "relative" }}
        className="mb-5"
        container
      >
        <div className="home">
          <div className="landing-tagline">
            <div className="tagline">
              Discover India like a local with Native Vibes
            </div>
            <div className="text-center my-3 mb-5 search_destination">
              <i class="fa-brands fa-searchengin"></i>
              <Link to={"/indiapage"}>Choose your Destination</Link>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Services />
      {/* <CustomerFavour /> */}
    </div>
  );
};

export default Landing;
