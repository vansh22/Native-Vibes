import React from "react";
// import HouseTour from "./assets/videos/HouseTour.mp4";
import ImageSlider from "./ImageSlider";

/*Images*/
import homepic from "./assets/images/homepic.avif";
import homepic2 from "./assets/images/homepic2.jpg";
import homepic3 from "./assets/images/homepic3.jpg";
import homepic4 from "./assets/images/homepic4.jpg";
import homepic5 from "./assets/images/homepic2.jpg";
import bajra from "./assets/images/bajra.jpg";
import chai from "./assets/images/chai.jpg";
import daal from "./assets/images/daalchawal.jpeg";
import dahivada from "./assets/images/dahivada.webp";
import jalebi from "./assets/images/jalebi.jpg";
import kachori from "./assets/images/kachoriSabji.jpg";
import lassi from "./assets/images/lassi.webp";
import litti from "./assets/images/litti.gif";
import paneer from "./assets/images/matarpaneer.jpg";
import nimona from "./assets/images/nimona.jpg";
import foodmaking1 from "./assets/images/foodmaking1.webp";
import foodmaking2 from "./assets/images/foodmaking2.jpg";
import khet1 from "./assets/images/khet1.jpg";
import khet2 from "./assets/images/khet2.webp";
import rit1 from "./assets/images/rit1.jpg";
import rit2 from "./assets/images/rit2.jpg";
import tube1 from "./assets/images/tube1.jpg";

import style from "./RajeshSharma.module.css";
import { Routes, Route, useNavigate } from "react-router-dom";

import Feedback from "./Feedback.js";

const images = [homepic, homepic2, homepic3, homepic4, homepic5];

const food = [
  litti,
  chai,
  daal,
  dahivada,
  bajra,
  jalebi,
  kachori,
  lassi,
  paneer,
  nimona,
];

const ent = [
  {
    image: foodmaking1,
    title: "Exposure to Traditional Cuisine making",
    description:
      "The image here depicts the making of litti chokha in traditional way in the village where women use logs of wood or cow dung cake to create fire and roast the wheat dough in it.",
  },
  {
    image: khet1,
    title: "Village tour",
    description:
      "Our village has abundance of natural beauty.We have beautiful farms,paddy fields ,ponds and lakes.We also have beautiful temples.We provide you a village tour to experience it all. ",
  },
];
const nent = [
  {
    image: rit1,
    title: "Exposure to local traditions",
    description:
      "Being located in Varanasi our village has rich culture and traditions which excites the travellers.We offer you to explore the rich culture of our village by including you in our festivals and traditional events",
  },
  {
    image: tube1,
    title: "Exposure to daily life of villagers",
    description:
      "Village life is tougher than city but it does have its own fun.You can get an authentic village life experience by watching and even engaging in day to day activities performed by villagers.",
  },
];

const Ent = ({ image, title, description }) => (
  <div className={style.entcont}>
    <img src={image} alt={""} />
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

function RajeshSharma() {
  const navigate = useNavigate();
  const f = () => {
    // 👇️ navigate to /
    navigate("https://calm-pasca-d428e9.netlify.app/");
  };
  let url = "https://calm-pasca-d428e9.netlify.app/";

  return (
    <div className={style.rjsharma}>
      {/*****************************VIDEO*************************************/}
      <div className={style.vidcont}>
        <video src={"#"} controls />
        <div>
          <h1>House Tour</h1>
          <p>
            Welcome to my house! It's a cozy and comfortable space that I'm
            happy to share with you. The house is located in in Ashapur village
            in Varanasi, with easy access to public transportation and plenty of
            street parking.Our village is near to main city hence you can
            experience both the city and village life of Varanasi if you chose
            to stay at our place. <br />
            Apart from room we also provide home made meals for you as well as
            an exposure to village life so that you can get a real authentic
            experience of Varanasi. <br />
            Overall, my house ad village is a comfortable and welcoming space,
            and I'm happy to share it with you.
          </p>
        </div>
      </div>
      {/******************************IMAGE GALLERY***************************/}
      <div className={style.imgcon}>
        <div className={style.matter}>
          <h2>Image Gallery</h2>
          <p>
            These are the pictures of our house.Our house include
            <ul>
              <li>
                The living room which has plenty of seating, including a
                comfortable couch and chairs, and a large flat-screen TV for
                your entertainment.
              </li>
              <li>
                There is also a dining area adjacent to the living room, where
                you can enjoy your meals.
              </li>
              <li>The kitchen is fully equipped in case you wish to cook.</li>
              <li>The guest bedroom is small but cozy and comfortable.</li>
              <li>
                The bathroom is separate for guests and is kept clean and
                well-maintained.
              </li>
              <li>
                Outside, there is a lovely backyard with a patio, perfect for
                enjoying the sunshine or having a barbecue.
              </li>
            </ul>
          </p>
        </div>
        <ImageSlider images={images} />
      </div>
      {/*********************************CUISINE***********************************************/}
      <div className={style.cuis}>
        <ImageSlider images={food} />
        <div className={style.matter}>
          <h2>Our major cuisines</h2>
          <p>
            These are the pictures of major delicaies our house provides.
            <ul>
              <li>
                <span>Litti Chokha:</span> It is a dough ball made up of whole
                wheat flour and stuffed with gram flour, pulses and mixed with
                herbs and spices.
              </li>
              <li>
                <span>Kulhad Chai:</span> A delicious twist on regular tea where
                Masala Chai is smoked by pouring it into a hot kulhad (clay
                mug).
              </li>
              <li>
                <span>Daal Roti:</span> A complete lunch meal filled with
                protein and nuterients.
              </li>
              <li>
                <span>Daal Vada:</span> A type of chaat prepared by soaking
                vadas in thick curd.
              </li>
              <li>
                <span>Bajra Roti:</span> A traditional Indian flatbread made
                with bajra or black pearl millet flour making it extremely
                nutritious.
              </li>
              <li>
                <span>Jalebi:</span> The popular sweet snack of India.
              </li>
              <li>
                <span>Kachori:</span> A sweet and spicy deep-fried snack.
              </li>
              <li>
                <span>Lassi:</span> A yogurt–based beverage with a smoothie-like
                consistency.
              </li>
              <li>
                <span>Matar Paneer:</span> A popular North Indian curried dish
                featuring green peas and paneer.
              </li>
              <li>
                <span>Nimona:</span> A green peas curry made commonly during
                winters.
              </li>
            </ul>
          </p>
        </div>
      </div>

      {/**********************ENTERTAINMENT******************/}
      <div className={style.entparcnt}>
        <h1>How we entertain you</h1>
        <div className={style.entcontpar}>
          {ent.map((item) => (
            <Ent
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <div className={style.entcontpar}>
          {nent.map((item) => (
            <Ent
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
      {/*******************COST**********************************/}
      <div className={style.costi}>
        <div className={style.costi1}>
          <h2>Our Packages</h2>
          <ul>
            <li className={style.costdec}>2 Nights and 3 Days : 3000 INR</li>
            <li className={style.costdec}>4 Nights and 5 Days : 6000 INR</li>
            <li className={style.costdec}>6 Nights and 7 Days : 8000 INR</li>
            <li className={style.costdec}>8 Nights and 9 Days : 10,000 INR</li>
            <li className={style.costdec}>
              10 Nights and 11 Days : 12,000 INR
            </li>
          </ul>
        </div>
        <div className={style.costi2}>
          <h2>Book Now</h2>
          <form className={style.formiz}>
            <select id="payment" name="payment">
              <option value="">Select Package</option>
              <option value="3day">3 Days</option>
              <option value="5day">5 Days</option>
              <option value="7day">7 Days</option>
              <option value="9day">9 Days</option>
              <option value="11day">11 Days</option>
            </select>
            <button><a href={url}>Book Now</a></button>
          </form>
        </div>
      </div>
      {/**********************FEEDBACK*******************/}
      <div className={style.fxs}>
      <Feedback/>

      <div className={style.cst}>
        <h2>Address and Contact :</h2>
        <ul>
          <li>Rajesh Sharma</li>
          <li>123 Main Street</li>
          <li>Ashapur, Varanasi</li>
          <li>Uttar Pradesh</li>
          <li>Phone:7765890923</li>
          <li>rajeshsharma@email.com</li>
        </ul>
      </div>
      </div>
    </div>
  );
}

export default RajeshSharma;
