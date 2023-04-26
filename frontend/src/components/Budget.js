import React, { useState, useEffect } from 'react';
import './Budget.css';
import restaurantData from './assets/Restaurants.json';

function Budget() {
  const [budget, setBudget] = useState(5000); // default budget is 5000
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // filter the restaurants based on the selected budget
    const filteredRestaurants = restaurantData.filter((restaurant) => {
      return restaurant.priceRange <= budget;
    });
    setRestaurants(filteredRestaurants);
  }, [budget]);

  const handleSliderChange = (event) => {
    setBudget(parseInt(event.target.value));
  };

  return (
    <div className="budget-container">
      <h1 className="budget-title">Plan your stay in budget</h1>
      <div className="slider-container">
        <span className="budget-labels">
          <span>0</span>
          <span>10000</span>
        </span>
        <input
          type="range"
          min="0"
          max="10000"
          value={budget}
          onChange={handleSliderChange}
          className="budget-slider"
        />
        <span className="budget-labels">
          <span>Low</span>
          <span>High</span>
        </span>
      </div>
      <div className="restaurant-container">
        {restaurants.length > 0 ? (
          restaurants.map((restaurant) => (
            <div key={restaurant.id} className="restaurant-card">
              <h2 className="restaurant-name">{restaurant.name}</h2>
              <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
              <div className="restaurant-details">
                <p className="restaurant-cuisine">Cuisine: {restaurant.cuisine}</p>
                <p className="restaurant-location">Location: {restaurant.location}</p>
                <p className="restaurant-phone">Phone: {restaurant.phone}</p>
                <p className="restaurant-price">Price Range: {restaurant.priceRange}</p>
                <p className="restaurant-rating">Rating: {restaurant.rating}/5</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results-message">No restaurants found.</p>
        )}
      </div>
    </div>
  );
}

export default Budget;
