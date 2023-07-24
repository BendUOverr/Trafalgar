import React, { useState } from "react";
import Dots from "../Assets/element.png";
import Man from "../Assets/manprofile.png";
import Woman from "../Assets/womanprofile.png";

export const Testimonials = (props) => {
  const dataSlider = [
    {
      id: 1,
      name: "Luka",
      avatar: { Man },
      comment:
        "“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”",
    },
    {
      id: 2,
      name: "Tamcho",
      avatar: { Woman },
      comment: "Great enviroment,great doctors with great experience"
    }
  ];

  return (
    <div className="flex justify-center h-screen">
      <div className="max-w-[1200px] w-full flex justify-center items-center">
        {/* Blue Window */}
        <div className="w-[1120px] h-[425px] bg-gradient-to-l from-[#67C3F3] to-[#5A99F2] rounded-3xl text-white flex justify-center">
          {/* container */}
          <div className="flex flex-col justify-between items-center">
            {/* title div */}
            <div className="font-bold text-3xl mt-10  ">
              <h1>What our customers are saying</h1>
            </div>
            {/* avatar div */}
            <div className="flex items-end gap-10 pb-20">
              {/*profile pic div*/}
              <div className="w-[420px]">
                <div className="flex justify-start items-center gap-10">
                  <img
                    className="w-[133px] h-[133px] rounded-full"
                    src={props.avatar}
                    alt=""
                  />
                  <div className="my-5">
                    <h2 className="font-bold">{props.name}</h2>
                    <p>Founder Circle</p>
                  </div>
                </div>
              </div>
              {/* text div */}
              <div className="w-[420px]">
                <div>
                  <p>{props.comment}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Woman div*/}
        </div>
      </div>
    </div>
  );
};
