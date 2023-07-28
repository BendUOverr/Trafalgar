import React, { useEffect, useState } from "react";
import right from "../Assets/arrowright.svg";
import { TestimonialCard } from "./TestimonialCard";
import Man from "../Assets/manprofile.png";
import Woman from "../Assets/womanprofile.png";

export const Testimonials = (props) => {
  const [currentPos, setCurrentPos] =useState("0%");
  const [currentCard, setCurrentCard] = useState(0);
  const items = [
    {
      name: "Luka",
      avatar: Man,
      comment:
        "“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”",
    },
    {
      name: "Tamcho",
      avatar: Woman,
      comment: "me miyvars luka",
    },
    {
      name: "Maka",
      avatar: Woman,
      comment: "me miyvars dato",
    },
    {
      name: "dato",
      avatar: Woman,
      comment: "me miyvars luka",
    },
  ];
  useEffect(() => {
    const cardCalculation = currentCard*-100+"%";
    console.log(cardCalculation);
    setCurrentPos(cardCalculation);
  }, [currentCard]);
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
        <div className="rounded-3xl">
          <div
            className={`flex w-[1120px] h-[425px] translate-x-[${currentPos}] duration-300`}
          >
            {items.map((item) => {
              return (
                <TestimonialCard
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
                <div className="w-[10px] h-[10px] rounded-full bg-[#1274fe] scale-150">
                  
                </div>
              );
            } else {
              return (
                <div
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
