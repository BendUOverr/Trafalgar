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
    <div name="OS" className="flex justify-center lg:h-screen h-[2000px]">
      {/* cropped paged div */}
      <div className="max-w-[1200px] w-full">
        {/* Title maindiv*/}
        <div className="sm:flex sm:justify-center sm:pt-5 flex mt-20">
          {/* Title div */}
          <div className="sm:flex sm:justify-center sm:w-[952px] sm:h-[130px] my-10 flex justify-center">
            {/* h1 div */}
            <div className="sm:flex sm:justify-center absolute">
              <h1 className="font-bold text-3xl border-b-2 border-black pb-5">
                Our services
              </h1>
            </div>
            {/* p div*/}
            <div className="sm:flex sm:justify-center sm:items-end mt-20 sm:mx-20">
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
        <div className="sm:w-[930px] sm:h-[670px] absolute sm:top-80 sm:left-0 z-[-10] top-90 left-0">
          <img src={Frame} alt=""/>
        </div>
        <div className="lg:flex lg:flex-col h-screen lg:items-center flex-col justify-center">
          {/* first 3 manage */}
          <div className="lg:flex lg:justify-center lg:items-center lg:max-h-[300px] lg:w-full pt-10">
            {/* item 1 */}
            <div className="md:w-[90%] lg:w-[300px] lg:h-[270px] m-10 shadow-lg shadow-[#e5e9f6] hover:scale-110 duration-500 rounded-3xl mt-1 bg-white">
              <div className="p-5">
                <div className="mb-5">
                  <img src={image1} alt="" />
                </div>
                <h2 className="font-bold text-xl mb-4">Search doctor</h2>
                <p className="opacity-50">
                  Choose your doctor from thousands of specialist, general, and
                  trusted hospitals
                </p>
              </div>
            </div>
            {/* item 2 */}
            <div className="md:w-[90%] lg:w-[300px] lg:h-[270px] m-10 shadow-lg shadow-[#e5e9f6] hover:scale-110 duration-500 rounded-3xl mt-1 bg-white">
              <div className="p-5">
                <div className="mb-5">
                  <img src={image2} alt=""/>
                </div>
                <h2 className="font-bold text-xl mb-4">Online pharmacy</h2>
                <p className="opacity-50">
                  Buy your medicines with our mobile application with a simple
                  delivery system
                </p>
              </div>
            </div>
            {/* item 3 */}
            <div className="md:w-[90%] lg:w-[300px] lg:h-[270px] m-10 shadow-lg shadow-[#e5e9f6] hover:scale-110 duration-500 rounded-3xl mt-1">
              <div className="p-5">
                <div className="mb-5">
                  <img src={image3} alt=""/>
                </div>
                <h2 className="font-bold text-xl mb-4">Consultation</h2>
                <p className="opacity-50">
                  Free consultation with our trusted doctors and get the best
                  recomendations
                </p>
              </div>
            </div>
            <div className="absolute right-0">
              <img src={image7} alt=""/>
            </div>
          </div>
          {/* second 3 manage */}
          <div className="lg:flex lg:justify-center lg:items-center">
            {/* item 4 */}
            <div className="md:w-[90%] lg:w-[300px] lg:h-[270px] m-10 shadow-lg shadow-[#e5e9f6] hover:scale-110 duration-500 rounded-3xl mt-0">
              <div className="p-5">
                <div className="mb-5">
                  <img src={image4} alt=""/>
                </div>
                <h2 className="font-bold text-xl mb-4">Details info</h2>
                <p className="opacity-50">
                  Free consultation with our trusted doctors and get the best
                  recomendations
                </p>
              </div>
            </div>
            {/* item 5 */}
            <div className="md:w-[90%] lg:w-[300px] lg:h-[270px] m-10 shadow-lg shadow-[#e5e9f6] hover:scale-110 duration-500 rounded-3xl mt-0">
              <div className="p-5">
                <div className="mb-5">
                  <img src={image5} alt=""/>
                </div>
                <h2 className="font-bold text-xl mb-4">Emergency care</h2>
                <p className="opacity-50">
                  You can get 24/7 urgent care for yourself or your children and
                  your lovely family
                </p>
              </div>
            </div>
            {/* item 6 */}
            <div className="md:w-[90%] lg:w-[300px] lg:h-[270px] m-10 shadow-lg shadow-[#e5e9f6] hover:scale-110 duration-500 rounded-3xl mt-0">
              <div className="p-5">
                <div className="mb-5">
                  <img src={image6} alt=""/>
                </div>
                <h2 className="font-bold text-xl mb-4">Tracking</h2>
                <p className="opacity-50">
                  Track and save your medical history and health data
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-full border-[#458FF6] w-[180px] flex justify-center border-2 ml-20">
            <button className="text-[#458FF6] p-3 font-bold">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};
