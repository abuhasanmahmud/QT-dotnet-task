import React from "react";
import { useSwiper } from "swiper/react";

const SwiperNavButton = () => {
  const swiper = useSwiper();
  return (
    <div className="swiper-nav-btns ">
      <button className="" onClick={() => swiper.slidePrev()}>
        Prev
      </button>
      <button onClick={() => swiper.slideNext()}>Next</button>
    </div>
  );
};

export default SwiperNavButton;
