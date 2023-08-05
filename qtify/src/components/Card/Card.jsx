import React from "react";
import "./Card.css";

const Card = ({ src, number, text, title }) => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <img src={src} alt="card" />
        <div className="follows">
          {number} {" " + text}
        </div>
      </div>
      {title}
    </div>
  );
};

export default Card;
