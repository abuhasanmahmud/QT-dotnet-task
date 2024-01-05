import React from "react";

const HomeTop = () => {
  return (
    <div className="py-10  ">
      <div
        className="grid sm:grid-cols-2 items-center justify-center px-10 rounded-3xl "
        style={{ backgroundColor: "#F99F1C" }}
      >
        <div>
          <p>Deliver Food To Your Door Step</p>
          <p>Authentic Food, Quick Service, Fast Delivery</p>
        </div>
        <div>
          <img src="/Image1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeTop;
