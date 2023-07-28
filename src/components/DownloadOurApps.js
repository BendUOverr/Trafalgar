import React from "react";
import image9 from "../Assets/image9.png";
import Vector from "../Assets/Vector.png";

export const DownloadOurApps = () => {
  return (
    <div name="app" className="flex justify-center h-screen items-center">
      <div className="max-w-[1400px] w-full ">
        <div className="flex gap-10">
          <div className="flex items-center pl-20">
            <div className="flex w-[490px] h-[390px] flex-col gap-10">
              <h1 className="font-bold text-4xl pr-10">
                Download our mobile apps
              </h1>
              <p className="pr-20 opacity-50">
                Our dedicated patient engagement app and web portal allow you to
                access information instantaneously (no tedeous form, long calls,
                or administrative hassle) and securely
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
          <div>
            <div>
              <img src={image9} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

