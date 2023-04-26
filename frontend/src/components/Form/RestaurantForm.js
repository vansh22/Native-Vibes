// import React, { useState } from "react";
// // import { useHistory } from "react-router";
// import RestaurantCard from "./RestaurantCard";
// import "./RestaurantForm.css";

// export default function RestaurantForm(props) {
//   const [name, setName] = useState("");
//   const [cuisine, setCuisine] = useState("");
//   const [location, setLocation] = useState("");
//   const [phone, setPhone] = useState("");
//   const [description, setDescription] = useState("");
//   const [priceRange, setPriceRange] = useState("");
//   const [image, setImage] = useState(null);


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("cuisine", cuisine);
//     formData.append("location", location);
//     formData.append("phone", phone);
//     formData.append("description", description);
//     formData.append("priceRange", priceRange);
//     formData.append("image", image);

//     props.onSubmit(formData);
//     setIsRegistered(true); // set isRegistered to true after form submission
//     alert("Store created"); // show an alert message
//   };

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   return (
//     <div className="restaurant-form">

//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="cuisine">Cuisine</label>
//           <input
//             type="text"
//             id="cuisine"
//             name="cuisine"
//             value={cuisine}
//             onChange={(e) => setCuisine(e.target.value)}
//           />
//         </div>
import React, { useState } from "react";
import "./RestaurantForm.css";
import RestaurantCard from "./RestaurantCard";

export default function RestaurantForm(props) {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [image, setImage] = useState(null);
const [isRegistered, setIsRegistered] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("cuisine", cuisine);
    formData.append("location", location);
    formData.append("phone", phone);
    formData.append("description", description);
    formData.append("priceRange", priceRange);
    formData.append("image", image);

    props.onSubmit(formData);
    alert("Store created"); // show an alert message
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="restaurant-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cuisine">Cuisine</label>
          <input
            type="text"
            id="cuisine"
            name="cuisine"
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>

          <input
            type="textfield"
            id="description"
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="priceRange">Price Range</label>
          <input
            type="number"
            id="priceRange"
            name="priceRange"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {/* conditionally render success message */}
      {isRegistered && (
        <>
          <div className="success-message">User registered successfully!</div>
          <RestaurantCard
            formData={{
              name,
              cuisine,
              location,
              phone,
              description,
              priceRange,
              image,
            }}
          />
        </>
      )}
    </div>
  );
}
