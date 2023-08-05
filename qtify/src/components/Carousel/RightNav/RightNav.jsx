import React, { useEffect, useState } from "react";
import "./RightNav.css";
import { useSwiper } from "swiper/react";

const RightNav = () => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(false);
  useEffect(() => {
    swiper.on("slideChange", () => {
      //console.log("slideChange");
      setIsEnd(swiper.isEnd);
    });
  }, []);
  return (
    <>
      {!isEnd && (
        <img
          className="right-icon"
          src="right_icon.svg"
          alt="right-icon"
          onClick={() => {
            swiper.slideNext();
          }}
        />
      )}
    </>
  );
};

export default RightNav;
