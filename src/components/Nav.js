import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <header className="w-full">
    <nav className="container">
      <h3>CryptoCoin</h3>
      <div className="left w-[60]">
        <ul className="flex gap-2 items-center ">
          <li>Price</li>
          <li>About</li>
          <li>blog</li>
        </ul>
        <Link to="/home" className="capitalize px-2 py-2 outline outline-2 outline-[#52eeca] bg-[#35967f] cursor-pointer rounded hover:bg-[#132D3E] conect  md:px-4 md:py-1">login</Link>
      </div>
    </nav>
  </header>
);

export default Nav;
