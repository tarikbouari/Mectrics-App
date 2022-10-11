import React from 'react';
import {getStock} from '../redux/SotckActions.js/stocks';

const Home = () => (
  <div>
    <h1 className="w-50"> GET Stock Real Time Data</h1>
    {/* {console.log(getStock())} */}
  </div>
);
export default Home;
