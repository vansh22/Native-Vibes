import React, { useState } from "react";
import data from "./assets/StateCropsData.json";
import "./CardPage.css";
import { Link } from "react-router-dom";

const Button = ({ category, selected, onClick }) => (
  <button
    className={`cardt-page-button ${selected ? "selected" : ""}`}
    onClick={() => onClick(category)}
  >
    {category}
  </button>
);

const Card = ({ name, location, description, image }) => (
  <Link style={{ textDecoration: "none" }} to="/vara">
    <div className="cardt">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{location}</p>
      <p>{description}</p>
    </div>
  </Link>
);

const CardList = ({ category }) => {
  const [cards, setCards] = useState([]);

  const handleClick = (category) => {
    switch (category) {
      case "all":
        setCards(
          data.religious
            .concat(data.traditional)
            .concat(data.nightlife)
            .concat(data.adventurous)
            .map(({ name, location, description, image }) => (
              <Card
                key={name}
                name={name}
                location={location}
                description={description}
                image={image}
              />
            ))
        );
        break;
      case "religious":
        setCards(
          data.religious.map(({ name, location, description, image }) => (
            <Card
              key={name}
              name={name}
              location={location}
              description={description}
              image={image}
            />
          ))
        );
        break;
      case "traditional":
        setCards(
          data.traditional.map(({ name, location, description, image }) => (
            <Card
              key={name}
              name={name}
              location={location}
              description={description}
              image={image}
            />
          ))
        );
        break;
      case "nightlife":
        setCards(
          data.nightlife.map(({ name, location, description, image }) => (
            <Card
              key={name}
              name={name}
              location={location}
              description={description}
              image={image}
            />
          ))
        );
        break;
      case "adventurous":
        setCards(
          data.adventurous.map(({ name, location, description, image }) => (
            <Card
              key={name}
              name={name}
              location={location}
              description={description}
              image={image}
            />
          ))
        );
        break;
      default:
        setCards([]);
    }
  };

  return (
    <>
      <div className="cardt-list-header">
        <Button category="all" onClick={handleClick} />
        <Button category="religious" onClick={handleClick} />
        <Button category="traditional" onClick={handleClick} />
        <Button category="nightlife" onClick={handleClick} />
        <Button category="adventurous" onClick={handleClick} />
      </div>
      <div className="cardt-list">{cards}</div>
    </>
  );
};

const CardPage = () => (
  <div className="cardt-page-container">
    <CardList category="all" />
  </div>
);

export default CardPage;
