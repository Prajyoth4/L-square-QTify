import React from "react";
import "./Card.css";

const Card = ({ src, follows, title }) => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <img src={src} alt="card" />
        <div className="follows">100M follows</div>
      </div>
      New Bollywood
    </div>
  );
};

export default Card;
