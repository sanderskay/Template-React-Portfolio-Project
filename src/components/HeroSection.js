import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import pic7 from "../images/p4.jpg";

function HeroSection() {
  return (
    <div className="hero-container">
      <img src={pic7} alt="" />
      <h1>REACT</h1>
      <p>Template Product Page</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          ANOTHER LINK
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
