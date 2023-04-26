

import React, { useState } from 'react';
import './Login.css';
import axios from 'axios'; // Import axios library
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [alreadyMember, setAlreadyMember] = useState(false);
  const [username, setUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  
  const navigate = useNavigate()

  const handleSignUp = async (e) => {
    e.preventDefault();
    navigate('/');
    const data = {
      firstname,
      lastname,
      email,
      password,
      phoneNumber,
    };
  
      const response = await axios.post('http://localhost:8089/sign-up/signup', data);
      if (response.status === 200) {
        // alert('Sign-up success');
        setfirstname('');
        setlastname('');
        setEmail('');
        setPassword('');
        setPhoneNumber('');
        setAlreadyMember(true);
      } else {
        throw new Error('Sign-up failed');
      }
  };
  
  
  
  

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/');
    // Handle login logic here
    console.log('Login form submitted:', {
      username,
      loginPassword,
    });
    // Check if login was successful
    if (username === 'example' && loginPassword === 'password') {
      alert('Login successful');
      // Switch to the login form
      setAlreadyMember(true);
    } else {
      // alert('Invalid username or password');
    }
  };

  return (
    <div className="container">
      {alreadyMember ? (
        // Render login form
        <form className="form" onSubmit={handleLogin} method='POST'>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ backgroundColor: 'white', color: 'blue',border:'1px solid grey'}}
          />
          <input
            type="password"
            placeholder="Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            style={{ backgroundColor: 'white', color: 'blue',border:'1px solid grey'}}
          />
          <button type="submit">Login</button>
          <p>
            Not a member?{' '}
            <span className="link" onClick={() => setAlreadyMember(false)}>
              Sign up here
            </span>
          </p>
        </form>
      ) : (
        // Render sign-up form
        <form className="form" onSubmit={handleSignUp} method='POST'>
          <h2>Sign Up</h2>
          <input
            type="text"
            placeholder="First Name"
            value={firstname}
            onChange={(e) => setfirstname(e.target.value)}
            style={{ backgroundColor: 'white', color: 'blue' ,border:'1px solid grey'}}
          />

           <input
            type="text"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setlastname(e.target.value)}
            style={{ backgroundColor: 'white', color: 'blue' ,border:'1px solid grey'}}
          />
          <input
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ backgroundColor: 'white', color: 'blue',border:'1px solid grey'}}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="email"
            style={{ backgroundColor: 'white', color: 'blue' ,border:'1px solid grey'}}
           
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            style={{ backgroundColor: 'white', color: 'blue' ,border:'1px solid grey'}}
          />
          <button type="submit">Sign Up</button>
          <p>
            Already a member?{' '}
            <span className="link" onClick={() => setAlreadyMember(true)}>
              Login here
            </span>
          </p>
        </form>
      )}
    </div>
  );
};

export default Signup;