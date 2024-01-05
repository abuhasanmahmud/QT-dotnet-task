"use client";
import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";

const Footer = () => {
  return (
    <div
      className="sm:flex flex-row items-center  gap-5 pb-20 pt-10 "
      style={{ backgroundColor: "#F99F1C" }}
    >
      <div className="sm:basis-2/3">
        <div className=" sm:ml-32  ">
          <div className="sm:w-3/4 w-4/4 mx-5 relative ">
            <input type="text" placeholder="Enter your email" className="w-full  p-3 rounded-lg  " />
            <button className="px-4 absolute top-2 right-2 sm:text-white rounded-lg text-orange-600 font-bold">
              Subscribe <span className="text-xl">&#8594;</span>
            </button>
          </div>

          <div className=" flex flex-col-reverse justify-center items-center gap-12 sm:flex  sm:items-end sm:justify-between sm:gap-5 sm:mt-20">
            <div className="">
              <p className="text-4xl font-extrabold  ">
                pti<span style={{ color: "#FC6011" }}>.</span>
              </p>
              <p className="font-bold">Copyright&copy;Tripp. All rights reserved.</p>
            </div>
            <div className="mr-14 flex gap-2">
              <FaGoogle
                className="sm:bg-gray-100 sm:text-orange-600 p-2 rounded-full  bg-orange-600 text-gray-100 "
                size={40}
              />
              <FaTwitter
                className="sm:bg-gray-100 sm:text-orange-600 p-2 rounded-full  bg-orange-600 text-gray-100 "
                size={40}
              />
              <CiInstagram
                className="sm:bg-gray-100 sm:text-orange-600 p-2 rounded-full  bg-orange-600 text-gray-100 "
                size={40}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="sm:basis-1/3 hidden sm:block">
        <img className="w-60" src="/Image2.png" alt="" />
      </div>
    </div>
  );
};

export default Footer;
