import React from "react";
import image8 from "../Assets/image8.png";
import Dotss from "../Assets/element.png";

export const HealthcareProv = () => {
  return (
    <div name="ht" className="flex justify-center h-screen items-end">
      <div className="max-w-[1400px] w-full ">
        <div className="flex flex-col-reverse md:flex-row gap-10">
          {/* img */}
          <div className="flex justify-center md:justify-start">
            <div className="w-full md:w-[450px] lg:w-[650px] lg:h-[480px]">
              <img src={image8} alt="" className="w-full h-auto" />
            </div>
          </div>
          <div className="flex items-center px-5 md:pl-20">
            <div className="w-full md:w-[490px] flex flex-col gap-5 md:gap-10">
              <h1 className="font-bold text-3xl md:text-4xl">
                Leading healthcare providers
              </h1>
              <p className="opacity-50">
                Trafalgar provides progressive and affordable healthcare,
                accessible on mobile and online for everyone. To us, it’s not
                just work. We take pride in the solutions we deliver.
              </p>
              <div className="rounded-full border-[#458FF6] w-[180px] flex justify-center border-2">
                <button className="text-[#458FF6] p-3 font-bold">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0">
          <img src={Dotss} alt="" />
        </div>
      </div>
    </div>
  );
};
