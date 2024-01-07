"use client";
import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SwiperNavButton from "./SwiperNavButton";

const Popular = () => {
  const [data, setData] = useState(null);
  const swiperParams = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
      );
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);
  console.log("data", data);
  return (
    <div className="py-10">
      <p className="">Popular</p>
      {/* desktop */}
      <div className="lg:block hidden relative">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={14}
          slidesPerView={5}
          // navigation
          pagination={{ clickable: true }}
          //         scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <div className="my-10">{/* <SwiperNavButton /> */}</div>
          {data?.Items?.map((i) => (
            <SwiperSlide>
              <div className="">
                <img src={i?.ImageUrl} alt="" className="w-60 h-40 " />
                <p className="my-2 text-center">{i?.Name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* tablet */}
      <div className="md:block lg:hidden ">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={14}
          slidesPerView={3}
          // navigation
          pagination={{ clickable: true }}
          //         scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <div className="my-10">{/* <SwiperNavButton /> */}</div>
          {data?.Items?.map((i) => (
            <SwiperSlide>
              <div className="">
                <img src={i?.ImageUrl} alt="  " className=" w-60 h-40 " />
                <p className="my-2 text-center">{i?.Name}</p>
              </div>
            </SwiperSlide>
          ))}
          {/* <SwiperNavButton /> */}
        </Swiper>
      </div>
      {/* mobile */}
    </div>
  );
};

export default Popular;
