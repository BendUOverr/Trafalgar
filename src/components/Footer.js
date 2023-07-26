import React from "react";
import Dots from "../Assets/element.png";

export const Footer = () => {
  return (
    <div className="flex justify-center h-min mt-20">
      <div className="bg-gradient-to-l from-[#67C3F3] to-[#5A99F2] w-full h-[435px] flex items-center gap-5 justify-center">
        {/* items div */}
        <div className="h-[250px] mx-20 text-white flex items-center gap-20">
          {/* first col div */}
          <div className="flex flex-col gap-8 max-w-[400px] w-full mr-20">
            {/* taraflgar icon div */}
            <div className="flex items-center gap-2">
              <p className="bg-white w-[40px] h-[40px] flex items-center justify-center rounded-full font-bold text-[26px] text-[#458FF6]">
                T
              </p>
              <h1 className="font-bold text-2xl">Trafalgar</h1>
            </div>
            <div>
              <p>
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone
              </p>
            </div>
            <div>
              <p>©Trafalgar PTY LTD 2020. All rights reserved</p>
            </div>
          </div>
          {/* Second col div */}
          <div className="flex flex-col gap-2 mr-20">
            <div>
              <h4 className="font-bold mb-3 text-base">Company</h4>
            </div>
            <div>
              <button>About</button>
            </div>
            <div>
              <button>Testimonials</button>
            </div>
            <div>
              <button>Find a doctor</button>
            </div>
            <div>
              <button>Apps</button>
            </div>
          </div>
          {/* Third col div */}
          <div className="flex flex-col gap-2 mr-20">
            <div>
              <h4 className="font-bold mb-3 text-base">Region</h4>
            </div>
            <div>
              <button>Italy</button>
            </div>
            <div>
              <button>Germay</button>
            </div>
            <div>
              <button>Canada</button>
            </div>
            <div>
              <button>Hongkong</button>
            </div>
          </div>
          {/* Fourth col div */}
          <div className="flex flex-col gap-2">
            <div>
              <h4 className="font-bold mb-3 text-base">Help</h4>
            </div>
            <div>
              <button>Help center</button>
            </div>
            <div>
              <button>Contact support</button>
            </div>
            <div>
              <button>Instructions</button>
            </div>
            <div>
              <button>How it works</button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-[4600px]">
        <img src={Dots} />
      </div>
      <div className="absolute left-0 top-[700px]">
        <img src={Dots} />
      </div>
      <div className="absolute left-0 top-[1500px]">
        <img src={Dots} />
      </div>
      <div className="absolute left-0 top-[3000px]">
        <img src={Dots} />
      </div>
      <div className="absolute right-0 top-[3500px]">
        <img src={Dots} />
      </div>
      <div className="absolute right-0 top-[4000px]">
        <img src={Dots} />
      </div>
      <div className="absolute left-0 top-[5000px]">
        <img src={Dots} />
      </div>
    </div>
  );
};
