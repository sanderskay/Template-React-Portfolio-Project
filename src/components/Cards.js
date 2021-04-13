import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import pic1 from "../images/pic1.jfif";
import pic2 from "../images/pic2.jfif";
import pic3 from "../images/pic3.jfif";
import pic4 from "../images/pic4.jfif";
import pic5 from "../images/pic5.jfif";
import pic6 from "../images/pic6.jfif";

function Cards() {
  return (
    <div className="cards">
      <h1>Products</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={pic1}
              text="Text for the card will go here."
              label="Template label"
              path="/services"
            />
            <CardItem
              src={pic2}
              text="Text for the card will go here."
              label="Template label"
              path="/services"
            />
            <CardItem
              src={pic3}
              text="Text for the card will go here."
              label="Template label"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={pic4}
              text="Text for the card will go here."
              label="Template label"
              path="/services"
            />
            <CardItem
              src={pic5}
              text="Text for the card will go here."
              label="Template label"
              path="/services"
            />
            <CardItem
              src={pic6}
              text="Text for the card will go here."
              label="Template label"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
