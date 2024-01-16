import React from 'react';
import { Link } from 'react-scroll';
import crypto from '../images/dé.png';
// import Sponsor from './Sponsor';

const Banner = () => (
  <div className=" banner md:h-[80vh] flex w-full">
    <div className="container flex items-center justify-center  max-md:pt-16 gap-2 md:pt-[5rem] px-4 text-white">
      <div className="flex flex-col gap-4  md:w-[50%] py-8">
        <h1 className="max-md:text-4xl md:text-6xl max-w-[536px]  md:text-left max-md:text-center text-[#139AFA] ">Stay Ahead of the Crypto Curve </h1>
        <p className="max-md:text-center md:text-left max-w-[536px]">
          Dive into the heart of the digital
          currency revolution with our cutting-edge app that brings you real-time and historical
          crypto market data in one seamless experience.
        </p>
        <Link
          activeClass="active"
          to="contact"
          spy
          smooth
          offset={-70}
          duration={500}
          className="capitalize px-5 py-2  max-md:mx-auto outline outline-2 outline-[#2280c3] cursor-pointer rounded-full hover:bg-[#4eccaf] boot md:px-4 md:py-3"
        >
          Explore
        </Link>
      </div>
      <div className="w-[50%] max-md:hidden">
        <img src={crypto} alt="cryto" />
      </div>
    </div>
  </div>

);

export default Banner;
