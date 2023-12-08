import React from 'react';
import { Link } from 'react-scroll';
// import Sponsor from './Sponsor';

const Banner = () => (
  <div className=" banner h-[80vh] flex">
    <div className="container flex items-center justify-center gap-2  p-4 text-white">
      <div className="flex flex-col gap-4 w-[60%] px-8">
        <h1 className="text-6xl text-[#139AFA]">Stay Ahead of the Crypto Curve </h1>
        <p className="c">
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
          className="capitalize px-5 py-2   outline outline-2 outline-[#2280c3] cursor-pointer rounded-full hover:bg-[#4eccaf] boot md:px-4 md:py-3"
        >
          Explore
        </Link>
      </div>
      <div className="coin  w-[60%]" />

    </div>
  </div>

);

export default Banner;
