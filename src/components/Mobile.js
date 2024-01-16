import React from 'react';
import { Link } from 'react-router-dom';
import phone from '../images/rvimage.png';

const Mobile = () => (
  <div className="w-full banner">
    <div className="container flex max-md:flex-col py-[5rem] justify-center items-center">
      <div className="max-md:w-full w-[40%] ">
        <h3 className="text-2xl md:text-4xl w-[80%] max-md:mx-auto text-center"> Get the best trading expereince with our mobile app</h3>
        <p className="py-[2rem] max-md:text-center text-[#fff] ">
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit

        </p>
        <Link
          to="contact"
          className="capitalize px-5 py-2   outline outline-2 outline-[#2280c3] cursor-pointer rounded-full hover:bg-[#4eccaf] boot md:px-4 md:py-3"
        >
          Explore
        </Link>
      </div>
      <div className="w-[50%]">
        <img src={phone} alt="phone" />
      </div>

    </div>
  </div>
);

export default Mobile;
