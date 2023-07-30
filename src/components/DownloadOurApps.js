import React from "react";
import image9 from "../Assets/image9.png";
import Vector from "../Assets/Vector.png";

export const DownloadOurApps = () => {
  return (
    <div name="app" className="flex justify-center h-screen items-center">
      <div className="max-w-[1400px] w-full ">
        <div className="flex flex-col-reverse md:flex-row gap-10">
        <div className="flex items-center px-5 md:pl-20">
            <div className="w-full md:w-[490px] flex flex-col gap-5 md:gap-10">
              <h1 className="font-bold text-3xl md:text-4xl">
                Download our mobile apps
              </h1>
              <p className="opacity-50">
                Our dedicated patient engagement app and web portal allow you
                to access information instantaneously (no tedious forms, long
                calls, or administrative hassle) and securely.
              </p>
              <div className="rounded-full border-[#458FF6] w-[180px] flex justify-center border-2 items-center">
                <button className="text-[#458FF6] p-3 font-bold">
                  Download
                </button>
                <div>
                  <img src={Vector} alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* img */}
          <div className="flex justify-center md:justify-start">
            <div className="w-full md:w-[450px] lg:w-[650px] lg:h-[480px]">
              <img src={image9} alt="" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
