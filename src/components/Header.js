import React from "react";
import Image1 from "../Assets/illustration.png";
import Dots from "../Assets/element.png";
import { Link } from "react-scroll";

export const Header = () => {
  return (
    <div name="home" className="h-screen flex justify-center">
      <div className="absolute left-0 top-[150px]">
        <img src={Dots} alt=""/>
      </div>
      {/* cropped paged div */}
      <div className="max-w-[1200px] w-full">
        {/* NavBar */}
        <div className="flex justify-between p-5">
          <div className="flex items-center gap-2">
            <p className="bg-[#458FF6] w-[40px] h-[40px] flex items-center justify-center rounded-full font-bold text-[26px] text-white">
              T
            </p>
            <h1 className="font-bold">Trafalgar</h1>
          </div>

          <ul className="flex gap-5 items-center cursor-pointer">
            <li className="font-bold">
              <Link to="home" spy={true} smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="opacity-50">
              <Link to="OS" spy={true} smooth={true} duration={500}>
                Our services
              </Link>
            </li>
            <li className="opacity-50">
              <Link to="ht" spy={true} smooth={true} duration={500}>
                Healthcare
              </Link>
            </li>
            <li className="opacity-50">
              <Link to="app" spy={true} smooth={true} duration={500}>
                App
              </Link>
            </li>
            <li className="opacity-50">
              <Link to="testimonial" spy={true} smooth={true} duration={500}>
                Testimonials
              </Link>
            </li>
            <li className="opacity-50">
              <Link to="article" spy={true} smooth={true} duration={500}>
                Article
              </Link>
            </li>
            <li className="opacity-50">
              <Link to="about" spy={true} smooth={true} duration={500}>
                About us
              </Link>
            </li>
          </ul>
        </div>

        {/* body */}

        <div className="grid grid-cols-2">
          {/* text*/}

          <div className="flex items-center">
            <div className="flex flex-col w-[80%] ml-7 gap-8">
              <h1 className="font-bold text-[48px]">
                Virtual healthcare for you
              </h1>
              <p className="opacity-50">
                Trafalgar provides progressive and affordable healthcare,
                accessible on mobile and online for everyone
              </p>
              <button className="bg-[#458FF6] w-[200px] h-[56px] rounded-full text-white">
                Consult today
              </button>
            </div>
          </div>

          {/* image1 */}

          <div>
            <img className="w-[693px] h-[580px]" src={Image1} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};
