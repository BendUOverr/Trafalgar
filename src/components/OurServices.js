import React from "react";
import image1 from "../Assets/searchdoctor.png";
import image2 from "../Assets/onlinepharmacy.png";
import image3 from "../Assets/consultation.png";
import image4 from "../Assets/detailsinfo.png";
import image5 from "../Assets/emergencycare.png";
import image6 from "../Assets/tracking.png";
import Frame from "../Assets/Frame.png";
import image7 from "../Assets/element.png";

export const OurServices = () => {
  return (
    <div className="flex justify-center h-fit">
      {/* cropped paged div */}
      <div className="max-w-[1200px] w-full">
        {/* Title maindiv*/}
        <div className="flex justify-center pt-5">
          {/* Title div */}
          <div className="flex justify-center w-[952px] h-[130px]">
            {/* h1 div */}
            <div className="flex justify-center absolute">
              <h1 className="font-bold text-3xl border-b-2 border-black pb-5">
                Our services
              </h1>
            </div>
            {/* p div*/}
            <div className="flex justify-center items-end">
              <p className="opacity-50">
                We provide to you the best choiches for you. Adjust it to your
                health needs and make sure your undergo treatment with our
                highly qualified doctors you can consult with us which type of
                service is suitable for your health
              </p>
            </div>
          </div>
        </div>
        {/* Body */}
        <div className="w-[930px] h-[670px] absolute top-80 left-0 z-[-10]">
          <img src={Frame} />
        </div>
        <div className="flex flex-col h-screen items-center">
          {/* first 3 manage */}
          <div className="flex justify-center items-center max-h-[300px] w-full pt-10">
            {/* item 1 */}
            <div className="w-[300px] h-[270px] m-10 shadow-lg shadow-[#e5e9f6] hover:scale-110 duration-500 rounded-3xl mt-1 bg-white">
              <div className="p-5">
                <div className="mb-5">
                  <img src={image1} />
                </div>
                <h2 className="font-bold text-xl mb-4">Search doctor</h2>
                <p className="opacity-50">
                  Choose your doctor from thousands of specialist, general, and
                  trusted hospitals
                </p>
              </div>
            </div>
            {/* item 2 */}
            <div className="w-[300px] h-[270px] m-10 shadow-lg shadow-[#e5e9f6] hover:scale-110 duration-500 rounded-3xl mt-1 bg-white">
              <div className="p-5">
                <div className="mb-5">
                  <img src={image2} />
                </div>
                <h2 className="font-bold text-xl mb-4">Online pharmacy</h2>
                <p className="opacity-50">
                  Buy your medicines with our mobile application with a simple
                  delivery system
                </p>
              </div>
            </div>
            {/* item 3 */}
            <div className="w-[300px] h-[270px] m-10 shadow-lg shadow-[#e5e9f6] hover:scale-110 duration-500 rounded-3xl mt-1">
              <div className="p-5">
                <div className="mb-5">
                  <img src={image3} />
                </div>
                <h2 className="font-bold text-xl mb-4">Consultation</h2>
                <p className="opacity-50">
                  Free consultation with our trusted doctors and get the best
                  recomendations
                </p>
              </div>
            </div>
            <div className="absolute right-0">
              <img src={image7} />
            </div>
          </div>
          {/* second 3 manage */}
          <div className="flex justify-center items-center">
            {/* item 4 */}
            <div className="w-[300px] h-[270px] m-10 shadow-lg shadow-[#e5e9f6] hover:scale-110 duration-500 rounded-3xl mt-0">
              <div className="p-5">
                <div className="mb-5">
                  <img src={image4} />
                </div>
                <h2 className="font-bold text-xl mb-4">Details info</h2>
                <p className="opacity-50">
                  Free consultation with our trusted doctors and get the best
                  recomendations
                </p>
              </div>
            </div>
            {/* item 5 */}
            <div className="w-[300px] h-[270px] m-10 shadow-lg shadow-[#e5e9f6] hover:scale-110 duration-500 rounded-3xl mt-0">
              <div className="p-5">
                <div className="mb-5">
                  <img src={image5} />
                </div>
                <h2 className="font-bold text-xl mb-4">Emergency care</h2>
                <p className="opacity-50">
                  You can get 24/7 urgent care for yourself or your children and
                  your lovely family
                </p>
              </div>
            </div>
            {/* item 6 */}
            <div className="w-[300px] h-[270px] m-10 shadow-lg shadow-[#e5e9f6] hover:scale-110 duration-500 rounded-3xl mt-0">
              <div className="p-5">
                <div className="mb-5">
                  <img src={image6} />
                </div>
                <h2 className="font-bold text-xl mb-4">Tracking</h2>
                <p className="opacity-50">
                  Track and save your medical history and health data
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-full border-[#458FF6] w-[180px] flex justify-center border-2">
            <button className="text-[#458FF6] p-3 font-bold">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};
