// // LoginForm.js

// import React, { useState } from 'react';
// import './Login.css'; // Import CSS file for styling

// const Login = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: ''
//   });

//   const { username, password } = formData;

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     // Perform form submission or validation logic here
//     console.log('Form data:', formData);
//   };

//   return (
//     <div className="login-form-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit} className="login-form">
//         <input
//           type="text"
//           name="username"
//           value={username}
//           onChange={handleChange}
//           placeholder="Username"
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           value={password}
//           onChange={handleChange}
//           placeholder="Password"
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Context } from "../context/notes/AlertState";

const Login = ({ showAlert }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  // const { showAlert } = Context();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:8000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Set the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      showAlert("Logged in successfully", "success");
      navigate("/");
    } else {
      showAlert("Invalid credentials", "danger");
    }
  };

  const handleOnChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleOnSubmit} className="mt-3">
      <h2>Login to continue</h2>
      <div className="my-4">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <span className="required">*</span>
        <input
          type="email"
          className="form-control"
          name="email"
          id="email"
          aria-describedby="emailHelp"
          value={credentials.email}
          onChange={handleOnChange}
          required
        />
        <div id="email" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <span className="required">*</span>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={credentials.password}
          onChange={handleOnChange}
          minLength={5}
          required
        />
        <div id="passHelp" className="form-text">
          Your password is secure and end to end encrypted.
        </div>
      </div>
      <button type="submit" className="custom-btn">
        Submit
      </button>
    </form>
  );
};

export default Login;
