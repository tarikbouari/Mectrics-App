import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Card = (prop) => {
  const { stockName, image } = prop;

  return (
    <div className="cardCoin">
      <div>
        <img src={image} alt="coin-logo" className="coinlogo" />
      </div>
      <div className="symbol">
        <FaArrowCircleRight className="arrow-right" />
        <span>{stockName}</span>
      </div>

    </div>
  );
};

Card.propTypes = {
  // eslint-disable-next-line
  stockName: PropTypes.string.isRequired,
  // eslint-disable-next-line
  image: PropTypes.string.isRequired,
};
export default Card;
