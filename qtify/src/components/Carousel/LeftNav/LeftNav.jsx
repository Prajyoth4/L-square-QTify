import React, { useEffect, useState } from "react";
import "./LeftNav.css";
import { useSwiper } from "swiper/react";

const LeftNav = () => {
  const swiper = useSwiper();
  const [isBeg, setIsBeg] = useState(true);
  useEffect(() => {
    swiper.on("slideChange", () => {
      //console.log("slideChange");
      setIsBeg(swiper.isBeginning);
    });
  }, []);
  return (
    <>
      {!isBeg && (
        <img
          className="left-icon"
          src="left_icon.svg"
          alt="left-icon"
          onClick={() => {
            swiper.slidePrev();
          }}
        />
      )}
    </>
  );
};

export default LeftNav;
