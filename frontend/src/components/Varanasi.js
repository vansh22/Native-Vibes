import React from "react";
import Vimage from "./assets/images/varanasi.jpg";
import style from "./Varanasi.module.css"
import Carousel from "./Carousel";
import Feedback from "./Feedback.js";
import CusFeedback from "./CusFeedback.js";
import TransportPoints from "./TransportPoints";
import homepic from "./assets/images/homepic.avif"
import house2 from "./assets/images/house2.webp"
import house3 from "./assets/images/house3.jpg"
import house4 from "./assets/images/house4.jpg"
import house5 from "./assets/images/house5.avif"
const locals = [
  {
    image:homepic,
    name: "Rajesh Sharma",
    feedback: {
      rating: 4.5,
      facilities: 4.0,
      food: 5.0,
      cleanliness: 4.5,
      comments:
        "The homestay was very comfortable and had everything we needed. Rajesh and his family were incredibly hospitable and made us feel at home. The food was delicious and we loved the rooftop terrace with views of the city.",
    },
  },
  {
    image: house2,
    name: "Sangeeta Verma",
    feedback: {
      rating: 4.0,
      facilities: 3.5,
      food: 4.5,
      cleanliness: 4.0,
      comments:
        "The guesthouse was lovely. Sangeeta and her family were very welcoming and made us feel at home. The food was delicious and we appreciated the home-cooked meals.",
    },
  },
  {
    image: house3,
    name: "Mukesh Patel",
    feedback: {
      rating: 4.5,
      facilities: 4.0,
      food: 4.5,
      cleanliness: 4.5,
      comments:
        "We had a wonderful stay at Mukesh's guesthouse. The location was perfect. The room was comfortable and clean, and the food was delicious. Mukesh and his family were very friendly and accommodating. Highly recommend!",
    },
  },
  {
    image:house4 ,
    name: "Neha Sharma",
    feedback: {
      rating: 4.0,
      facilities: 3.5,
      food: 4.5,
      cleanliness: 4.0,
      comments:
        "We enjoyed our stay at Neha's homestay.. The food was delicious and we appreciated the home-cooked meals. The only downside was that the bathroom was a bit small.",
    },
  },
  {
    image: house5,
    name: "Rajeev Kapoor",
    feedback: {
      rating: 4.0,
      facilities: 3.5,
      food: 4.5,
      cleanliness: 4.0,
      comments:
        "We enjoyed our stay at Rajeev's homestay. The location was beautiful and peaceful, and the room was cozy and comfortable. The only downside was that the bathroom was a bit small.",
    },
  },
];

function Varanasi() {
  return (
    <div className={style.containert}>
      <div className={style.box}>
        <img className={style.image} src={Vimage} alt="varanasi"></img>
        <h1 className={style.head}>Varanasi</h1>
      </div>
     <div className={style.cardib}>
          <h3>Local Services</h3>
          <Carousel locals={locals}/>
     </div>
     <div className={style.feed}>
        <CusFeedback/>
        <Feedback/>
     </div>
     <TransportPoints/>
    </div>
  );
}

export default Varanasi;
