// import React, { useState } from "react";
// import "./RestaurantForm.css";
// import RestaurantForm from "./RestaurantForm";
// import RestaurantCard from "./RestaurantCard";

// function RestaurantFormContainer() {
//   const [isFormSubmitted, setIsFormSubmitted] = useState(false);
//   const [formData, setFormData] = useState({});

//   const handleFormSubmit = (formData) => {
//     setFormData(formData);
//     setIsFormSubmitted(true);
//   };

//   return (
//     <div className="restaurant-form-container">
//       {isFormSubmitted ? (
//         <div className="restaurant-card-container">
//           <h1>Restaurant Registration Successful</h1>
//           <RestaurantCard formData={formData} />
//         </div>
//       ) : (
//         <div className="restaurant-form">
//           <h1>Restaurant Registration Form</h1>
//           <RestaurantForm onSubmit={handleFormSubmit} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default RestaurantFormContainer;

import React, { useState } from "react";
import "./RestaurantForm.css";
import RestaurantForm from "./RestaurantForm";
import RestaurantCard from "./RestaurantCard";

function RestaurantFormContainer() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({});

  const handleFormSubmit = (formData) => {
    setFormData(formData);
    setIsFormSubmitted(true);
  };

  return (
    <div className="restaurant-form-container">
      {isFormSubmitted ? (
        <div className="restaurant-card-container">
          <h1>Restaurant Registration Successful</h1>
          <RestaurantCard formData={formData} />
        </div>
      ) : (
        <div className="restaurant-form">
          <h1>Restaurant Registration Form</h1>
          <RestaurantForm onSubmit={handleFormSubmit} />
        </div>
      )}
    </div>
  );
}

export default RestaurantFormContainer;
