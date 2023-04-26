import React from "react";
import style from "./TransportPoints.module.css";

function TransportPoints() {
  return (
    <div className={style.transport}>
      <h2>Transportation Points</h2>
      <div className={style.section}>
        <div className={style.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115408.09799715575!2d82.90870618251894!3d25.320894921158192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf4d%3A0x68131710853ff0b5!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1682031461726!5m2!1sen!2sin"
            width="600"
            height="400"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={style.points}>
          <h4>Popular Taxi Services</h4>
          <ul>
            <li>Big Cab Varanasi</li>
            <li>Kashi Journeys</li>
            <li>Prakash Tour guide</li>
            <li>Wheels2go bike rental</li>
            <li>
              <a
                href="https://www.tripadvisor.in/Attractions-g297685-Activities-c59-t182-Varanasi_Varanasi_District_Uttar_Pradesh.html"
                target="_blank"
                rel="noreferrer"
              >
                More..
              </a>
            </li>
          </ul>
          <h4>Popular Bus Stops</h4>
          <ul>
            <li>Varanasi Can't Bus Stand</li>
            <li>Lahartara Bus Stop</li>
            <li>Chaudhary Charan Singh Bus Station</li>
            <li>Lanka Bus Stop</li>
            <li>Prince Bus Adda</li>
            <li>
              <a
                href="https://www.justdial.com/Varanasi/Bus-Depot/nct-11570200"
                target="_blank"
              >
                More..
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TransportPoints;
