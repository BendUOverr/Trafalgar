import React from "react";
import Dis from "../Assets/Dis.png";
import Vect from "../Assets/Vector.jpg";
import Mask from "../Assets/Mask.png";
import Herbal from "../Assets/Herbal.png";
import Frame from "../Assets/Frame.png";
import Dots from "../Assets/element.png";

export const LastArticle = () => {
  return (
    <div className="flex justify-center h-screen">
      <div className="max-w-[1200px] w-full flex flex-col items-center">
        {/* title div */}
        <div className="m-5">
          <h1 className="font-bold text-3xl">Check out our latest article</h1>
        </div>
        {/* 3 element div */}
        <div className="flex mt-8">
          {/* first item */}
          <div className="flex flex-col w-[350px] h-[512px] mx-6 shadow-lg shadow-[#e5e9f6] hover:scale-110 duration-500 rounded-3xl gap-3">
            <div>
              <img className="rounded-t-3xl" src={Dis} alt="" />
            </div>
            <div className="px-5">
              <h2 className="font-bold text-lg">
                Disease detection, check up in the laboratory
              </h2>
            </div>
            <div className="px-5">
              <p className="opacity-50">
                In this case, the role of the health laboratory is very
                important to do a disease detection...
              </p>
            </div>
            <div className="px-5 text-[#4089ED] flex items-center gap-3">
              <button>Read more</button>
              <img className="" src={Vect} alt="" />
            </div>
          </div>
          {/* second item */}
          <div className="flex flex-col w-[350px] h-[512px] mx-6 shadow-lg shadow-[#e5e9f6] hover:scale-110 duration-500 rounded-3xl gap-3 bg-white">
            <div>
              <img className="rounded-t-3xl" src={Herbal} alt="" />
            </div>
            <div className="px-5">
              <h2 className="font-bold text-lg">
                Herbal medicines that are safe for consumption
              </h2>
            </div>
            <div className="px-5">
              <p className="opacity-50">
                Herbal medicine is very widely used at this time because of its
                very good for your health...
              </p>
            </div>
            <div className="px-5 text-[#4089ED] flex items-center gap-3">
              <button>Read more</button>
              <img className="" src={Vect} alt="" />
            </div>
          </div>
          {/* third item */}
          <div className="flex flex-col w-[350px] h-[512px] mx-6 shadow-lg shadow-[#e5e9f6] hover:scale-110 duration-500 rounded-3xl gap-3 bg-white">
            <div>
              <img className="rounded-t-3xl" src={Mask} alt="" />
            </div>
            <div className="px-5">
              <h2 className="font-bold text-lg">
                Natural care for healthy facial skin
              </h2>
            </div>
            <div className="px-5">
              <p className="opacity-50">
                A healthy lifestyle should start from now and also for your skin
                health. There are some...
              </p>
            </div>
            <div className="px-5 text-[#4089ED] flex items-center gap-3">
              <button>Read more</button>
              <img className="" src={Vect} alt="" />
            </div>
          </div>
        </div>
        {/* view all button */}
        <div className="rounded-full border-[#458FF6] w-[180px] flex justify-center border-2 my-10">
                <button className="text-[#458FF6] p-3 font-bold">
                  View all
                </button>
              </div>
              {/*Dots*/}
              <div className="top-end left-0 absolute">
            <img src={Dots} alt="" />
              </div>
              {/*frame*/}
              <div className="right-0 top-end absolute z-[-10]">
                <img src={Frame} alt="" />
              </div>
      </div>
    </div>
  );
};
