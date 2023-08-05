import React from "react";
import "./Card.css";
import { Tooltip } from "@mui/material";

const Card = ({ src, number, text, title, tooltip }) => {
  return (
    <div className="card-wrapper">
      <Tooltip title={tooltip} placement="top">
        <div className="card">
          <img src={src} alt="card" />
          <div className="follows">
            {number} {" " + text}
          </div>
        </div>
        {title}
      </Tooltip>
    </div>
  );
};

export default Card;
