import React from "react";
import Card from "../Card/Card";
import "./Grid.css";

const Grid = ({ data }) => {
  return (
    <div className="grid">
      {data ? (
        data.map((ele) => {
          return (
            <Card src={ele.image} title={ele.title} follows={ele.follows} />
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
};

export default Grid;
