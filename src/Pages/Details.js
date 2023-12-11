/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { FaArrowCircleLeft } from 'react-icons/fa';

const Details = () => {
  const detailsCoins = useSelector((state) => state.detail.details.coin);
  console.log(detailsCoins);
  // const price = parseInt(detailsCoins.price, 10).toFixed(4).toString();

  // const {
  //   stockName: __,
  //   sparkline: ___,
  //   image: ____,
  //   color: _____,
  //   uuid: ______,
  //   ...rest
  // } = detailsCoins;

  return (

    <section className="w-full">
      <div className="container py-[5rem]">
        <div className="py-[2rem]">
          <Link to="price"><span>All price </span></Link>
          <span>&gt; </span>
          <span>All price</span>
        </div>
        <div className="py-[2rem] flex justify-between gap-2">
          <div>
            <span>Btcicon</span>
            <span>btcSymbol</span>
          </div>
          <div>
            <span>share</span>
            <span>whatchlis</span>
          </div>

        </div>
        <div className="flex">
          <div className="w-[70%] p-4">
            <div className="col1 flex flex-col py-[5rem]">
              <div className="flex flex-col py-[2rem]">
                <div className="flex">
                  <span>Price brtc</span>
                  <span> change24</span>
                </div>
                <div className="flex">
                  <span>100 BTC</span>
                  <span> +00</span>
                </div>
              </div>

              <div className="  py-[5rem] ">
                <span>display chart </span>
              </div>
              <div className="other  py-[5rem] grid grid-cols-5  ">
                <div>
                  <span>Market cap</span>
                  <span>Price</span>
                </div>
                <div>
                  <span>Market cap</span>
                  <span>Price</span>
                </div>
                <div>
                  <span>Market cap</span>
                  <span>Price</span>
                </div>
                <div>
                  <span>Market cap</span>
                  <span>Price</span>
                </div>
                <div>
                  <span>Market cap</span>
                  <span>Price</span>
                </div>
              </div>
            </div>
            <div className="col2">
              <div>
                <span>About</span>
                <span>Social & News</span>
              </div>
              <div>
                <div>
                  <h3 className="p-4">About coin</h3>
                  <p>
                    Bitcoin’s price today is US$41,215.51, with a 24-hour trading volume of $39.89 B. BTC is -5.93% in the last 24 hours.
                    It is currently -7.73% from its 7-day all-time high of $44,668.79, and 2.38% from its 7-day all-time low of $40,256.33.
                    BTC has a circulating supply of 19.57 M BTC and a max supply of 21 M BTC.
                  </p>
                </div>

              </div>
            </div>

          </div>
          <div className="w-[30%]" />
        </div>
      </div>

    </section>

  );
};

export default Details;
