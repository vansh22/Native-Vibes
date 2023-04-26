import React from 'react';
import './Restaurant.css';

function Restaurant(props) {
  const { name, cuisine, location, phone, priceRange, image } = props.restaurant;

  return (
    <div className="restaurant">
      <h2>{name}</h2>
      <img className="restaurant-image" src={URL.createObjectURL(image)} alt={name} />
      <div className="restaurant-details">
        <p>Cuisine: {cuisine}</p>
        <p>Location: {location}</p>
        <p>Phone: {phone}</p>
        <p>Price Range: {priceRange}</p>
      </div>
    </div>
  );
}

export default Restaurant;
