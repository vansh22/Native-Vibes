import React from "react";
import { useState } from "react";
import style from "./Footer.module.css";

// import logo1 from "../assets/images/Vector.png";

function Footer() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };
  const submitData = async (e) => {
    e.preventDefault();
    const { name, email, message } = userData;
    if (name && email && message) {
      const res = await fetch(
        "https://sihfarmeasy-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        }
      );
      if (res) {
        setUserData({
          name: "",
          email: "",
          message: "",
        });
        alert("Your Query reached to us .We will reach you shortyly");
      } else {
        alert("Please fill your query");
      }
    } else {
      alert("Please fill your query");
    }
  };

  return (
    <div className={style.Footer}>
      <div className={style.ll}>
        {/* <img src={logo1} alt="logo" /> */}
        <p className={style.address}>
          Address : <br />
          JSS Academy of Technical Eduction Gautam Buddh Nagar <br />
          Noida
        </p>
      </div>
      <div className={style.mid}>
        <div className={style.portals}>
          <ul>
            <li className={style.h}>Portals</li>

            <li className={style.top}>Beautiful Locations</li>
            <li>Get Recommendations</li>
            <li>Our Services</li>
            <li>Track-On</li>
            <li>Emergency helpline</li>
            <li>Post Services</li>
          </ul>
        </div>
        <div className={style.links}>
          <ul>
            <li className={style.h}>Links</li>

            <li className={style.top}>About Us</li>
            <li>Initiatives</li>
            <li>Roadmap</li>
            <li>Legal</li>
          </ul>
        </div>
      </div>

      <div id="contact" className={style.form}>
        <p className={style.para}>Got a query? Contact Us</p>
        <form method="POST" className={`${style["contact-form"]}`}>
          <div className={style.first}>
            <div>
              <input
                type="text"
                className={style.name}
                name="name"
                value={userData.name}
                onChange={postUserData}
                placeholder="Full name"
                required
              />
            </div>
            <div className={style.mail}>
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={postUserData}
                className={style.email}
                placeholder="E-mail"
                required
              />
            </div>
          </div>
          <textarea
            className={style.message}
            placeholder=" Message"
            name="message"
            value={userData.message}
            onChange={postUserData}
            cols="45"
            rows="5"
            required
          />

          <button
            type="submit"
            onClick={submitData}
            className={`${style["custom-btn"]} ${style.btn}`}
          >
            <span>Submit</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Footer;