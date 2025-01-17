import React from "react";
import { useEffect, useState } from "react";
//import Card from "../Card/Card";
import Grid from "../Grid/Grid";
import "./Section.css";
import Button from "../Button/Button";
import Carousel from "../Carousel/Carousel";

const Section = ({ type, data }) => {
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div className="section-wrapper">
      <div className="grid-header">
        <h3 className="section-type">{type}</h3>
        <Button
          text={toggle ? "Show All" : "Collapse"}
          onClickFunc={handleClick}
        />
      </div>
      {!toggle ? <Grid data={data} /> : <Carousel data={data} />}
    </div>
  );
};

export default Section;
