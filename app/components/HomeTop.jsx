import React from "react";

const HomeTop = () => {
  return (
    <div className="py-10">
      <div className="rounded-3xl md:bg-custom-yellow md:flex md:items-center ">
        <div className="md:ml-10 md:text-white">
          <p className="text-center text-5xl font-semibold mx-3 md:text-3xl  md:text-left ">
            Deliver Food To Your Door Step
          </p>
          <p className="text-center mt-3 md:text-left md:ml-3">
            Authentic Food, Quick Service, Fast Delivery
          </p>
        </div>
        <div className="md:bg-custom-yellow bg-custom-orange rounded-3xl relative w-full h-64 mt-14  ">
          <img src="/Image1.png" alt="" className=" absolute top-[-66px] w-full h-[20rem]" />
        </div>
      </div>
    </div>
  );
};

export default HomeTop;
