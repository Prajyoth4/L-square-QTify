import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "./Carousel.css";
import Card from "../Card/Card";
import LeftNav from "./LeftNav/LeftNav";
import RightNav from "./RightNav/RightNav";

const Carousel = ({ data, song }) => {
  return (
    <div className="carousel">
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
        {data ? (
          data.map((ele) => {
            return (
              <SwiperSlide>
                <Card
                  src={ele.image}
                  number={song ? ele.likes : ele.follows}
                  text={song ? "likes" : "follows"}
                  title={ele.title}
                  tooltip={song ? false : `${ele.songs.length} songs`}
                />
              </SwiperSlide>
            );
          })
        ) : (
          <></>
        )}
      </Swiper>
    </div>
  );
};

export default Carousel;
