import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "./Carousel.css";
import Card from "../Card/Card";
import LeftNav from "./LeftNav/LeftNav";
import RightNav from "./RightNav/RightNav";

const Carousel = ({ data }) => {
  return (
    <div>
      <Swiper
        spaceBetween={40}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={"auto"}
        allowTouchMove
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <LeftNav />
        <RightNav />
        {data.map((ele) => {
          return (
            <SwiperSlide>
              <Card src={ele.image} follows={ele.follows} title={ele.title} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
