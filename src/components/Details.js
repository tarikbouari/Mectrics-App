import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';

const Details = () => {
  const detailsCoins = useSelector((state) => state.detail.details.coin);
  const price = parseInt(detailsCoins.price, 10).toFixed(4).toString();

  const {
    stockName: __,
    sparkline: ___,
    image: ____,
    color: _____,
    uuid: ______,
    ...rest
  } = detailsCoins;

  return (
    <>
      <section className="container my-3">
        <NavLink to="/">
          <FaArrowCircleLeft className="arrow-left" />
        </NavLink>
        <div className="head-item">
          <img src={detailsCoins.iconUrl} alt={detailsCoins.name} />
          <div>
            <h2 className="my-0">
              {detailsCoins.name}
            </h2>
            <span className="text-center">{price}</span>
          </div>
        </div>
      </section>

      <ul className="detail-List ">
        {Object.entries(rest).map(([key, value]) => (
          <li className="list-item" key={key}>
            {key}
            {' '}
            <span className="SpanValue">{value}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Details;
