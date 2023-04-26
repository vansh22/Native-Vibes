import React, { useState } from 'react';
import RestaurantForm from './RestaurantForm';
import RestaurantCard from './RestaurantCard';

function Form() {
  const [restaurants, setRestaurants] = useState([]);

  const addRestaurant = (restaurant) => {
    setRestaurants([...restaurants, restaurant]);
  };

  return (
    <div className="App">
      <RestaurantForm addRestaurant={addRestaurant} />
      <div className="restaurant-cards">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.name} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default Form;
