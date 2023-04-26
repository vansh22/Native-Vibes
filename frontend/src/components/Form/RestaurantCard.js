
import React, { useEffect, useState } from "react";
import "./RestaurantCard.css";
import { FaImage, FaVideo } from "react-icons/fa";
function RestaurantCard(props) {
  const { formData } = props;
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (formData.get("image")) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(formData.get("image"));
    }
  }, [formData]);

  return (
    <div className="parent">
    <div className="restaurant-card">
      <h2>{formData.get("name")}</h2>
      <p>
        <strong>Cuisine:</strong> {formData.get("cuisine")}
      </p>
      <p>
        <strong>Location:</strong> {formData.get("location")}
      </p>
      <p>
        <strong>Phone:</strong> {formData.get("phone")}
      </p>
      <p>
        <strong>Description:</strong> {formData.get("description")}
      </p>
      <p>
        <strong>Price Range:</strong> {formData.get("priceRange")}
      </p>
      <div className="image-container">
        {imageUrl && <img src={imageUrl} alt="Restaurant" />}
      </div>
    </div>
    <div className="options-container">
     <button><FaImage/>Upload Image</button>
      <button><FaVideo/>Upload Video</button>
      <a href="/">Add Details</a>
    </div>
    </div>
  );
}




export default RestaurantCard;

