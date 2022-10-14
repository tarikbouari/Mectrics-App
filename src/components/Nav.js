import React from 'react';
import { FaMicrophoneAlt, FaCog } from 'react-icons/fa';

const Nav = () => (
  <div>
    <header>
      <nav className="container ">
        <h3>Crypto App</h3>
        <div className="left">
          <FaMicrophoneAlt className="micro" />
          <FaCog className="setting" />
        </div>
      </nav>
    </header>
  </div>
);

export default Nav;
