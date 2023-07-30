import React, { useState } from "react";
import right from "../Assets/arrowright.svg";
import { TestimonialCard } from "./TestimonialCard";
import Man from "../Assets/manprofile.png";
import Woman from "../Assets/womanprofile.png";

export const Testimonials = (props) => {
  const [currentCard, setCurrentCard] = useState(0);
  const items = [
    {
      name: "Enuqi",
      avatar: Man,
      comment:
        "“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”",
    },
    {
      name: "Kate",
      avatar: Woman,
      comment:
        "Highly impressed with the hospital's top-notch facilities and compassionate staff. The doctors demonstrated exceptional expertise and took the time to address all my concerns. A truly positive healthcare experience",
    },
    {
      name: "Lucy",
      avatar: Woman,
      comment:
        "Average experience at this hospital. The doctors were competent, but the overall atmosphere felt a bit impersonal. The facilities could use some modernization to enhance patient comfort and convenience",
    },
    {
      name: "Luka",
      avatar: Man,
      comment:
        "Regrettably disappointed with my visit to this hospital. The doctors seemed rushed and didn't thoroughly explain my condition. Additionally, the facilities were outdated and in need of improvement. Definitely wouldn't recommend this place",
    },
  ];
  const moveRight = () => {
    if (currentCard + 1 >= items.length) {
      setCurrentCard(0);
    } else {
      setCurrentCard(currentCard + 1);
    }
  };
  const moveLeft = () => {
    if (currentCard - 1 < 0) {
      setCurrentCard(items.length - 1);
    } else {
      setCurrentCard(currentCard - 1);
    }
  };

  return (
    <div name="testimonial" className="flex justify-center h-screen">
      <div className="max-w-[1200px] w-full flex justify-center items-center flex-col">
        {/* Blue Window */}
        <div className="rounded-3xl overflow-hidden">
          <div
            className={`w-[400px] flex md:w-[800px] lg:w-[1120px] h-[425px] duration-300`}
            style={{ transform: `translateX(-${currentCard * 100}%)` }}
          >
            {items.map((item) => {
              return (
                <TestimonialCard
                  key={item.name}
                  name={item.name}
                  avatar={item.avatar}
                  comment={item.comment}
                />
              );
            })}
          </div>
        </div>
        <div className="flex gap-3 mt-10 items-center">
          <button onClick={moveLeft} className="mr-10">
            <img
              src={right}
              alt=""
              className=" transform rotate-180 hover:scale-150 duration-200"
            />
          </button>
          {items.map((item, index) => {
            if (index === currentCard) {
              return (
                <div
                  key={index}
                  className="w-[10px] h-[10px] rounded-full bg-[#1274fe] scale-150"
                ></div>
              );
            } else {
              return (
                <div
                  key={index}
                  onClick={() => {
                    setCurrentCard(index);
                  }}
                  className="w-[10px] h-[10px] rounded-full bg-[#7b90ad] cursor-pointer"
                ></div>
              );
            }
          })}
          <button
            onClick={moveRight}
            className="ml-10 hover:scale-150 duration-200"
          >
            <img src={right} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
