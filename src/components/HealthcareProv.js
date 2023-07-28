import React from "react";
import image8 from "../Assets/image8.png";
import Dotss from "../Assets/element.png";

export const HealthcareProv = () => {
  return (
    <div name="ht" className="flex justify-center h-screen items-center">
      <div className="max-w-[1400px] w-full ">
        <div className="flex gap-10">
          {/* img */}
          <div>
            <div>
              <img src={image8} alt=""/>
            </div>
          </div>
          <div className="flex items-center pl-20">
            <div className="flex w-[490px] h-[390px] flex-col gap-10">
              <h1 className="font-bold text-4xl pr-10">
                Leading healthcare providers
              </h1>
              <p className="pr-20 opacity-50">
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone. To us, it’s not
                just work. We take pride in the solutions we deliver
              </p>
              <div className="rounded-full border-[#458FF6] w-[180px] flex justify-center border-2">
                <button className="text-[#458FF6] p-3 font-bold">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0">
          <img src={Dotss} alt=""/>
        </div>
      </div>
    </div>
  );
};
