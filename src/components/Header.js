import React, { useState } from "react";
import Image1 from "../Assets/illustration.png";
import Dots from "../Assets/element.png";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

export const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div name="home" className="h-screen flex flex-col items-center">
      <div className="absolute left-0 top-[100px]">
        <img src={Dots} alt="" />
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

          {/* Hamburger */}
          <div onClick={handleClick} className="md:hidden z-10">
            {!nav ? <FaBars /> : <FaTimes />}
          </div>

          {/* mobile menu */}
          <div
            className={
              !nav
                ? "hidden"
                : "absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center z-10"
            }
          >
            <ul className="cursor-pointer">
              <li className="py-6 text-4xl">
                <Link
                  onClick={handleClick}
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li className="py-6 text-4xl">
                <Link
                  onClick={handleClick}
                  to="OS"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Our services
                </Link>
              </li>
              <li className="py-6 text-4xl">
                <Link
                  onClick={handleClick}
                  to="ht"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Healthcare
                </Link>
              </li>
              <li className="py-6 text-4xl">
                <Link
                  onClick={handleClick}
                  to="app"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Mobile app
                </Link>
              </li>
              <li className="py-6 text-4xl">
                <Link
                  onClick={handleClick}
                  to="testimonial"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Testimonials
                </Link>
              </li>
              <li className="py-6 text-4xl">
                <Link
                  onClick={handleClick}
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  About us
                </Link>
              </li>
            </ul>
          </div>

          {/* Responsive Hamburger Menu */}
          <div className="hidden md:flex gap-5 items-center">
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
        </div>

        {/* body */}
        <div className="grid grid-cols-1 sm:grid-cols-2 ml-10">
          {/* text */}
          <div className="flex items-center justify-center md:justify-start">
            <div className="flex flex-col w-[80%] md:w-auto gap-8">
              <h1 className="font-bold text-[36px] md:text-[48px] text-center md:text-left">
                Virtual healthcare for you
              </h1>
              <p className="text-stone-400text-center md:text-left">
                Trafalgar provides progressive and affordable healthcare,
                accessible on mobile and online for everyone
              </p>
              <button className="bg-[#458FF6] w-[200px] h-[56px] rounded-full text-white mx-auto md:mx-0 block mb-5">
                Consult today
              </button>
            </div>
          </div>

          {/* image1 */}
          <div className="mb-20 ms:mt-0">
            <img className="w-full sm:w-[693px] h-auto" src={Image1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
