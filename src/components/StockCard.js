import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowCircleRight } from 'react-icons/fa';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { getDetails } from '../redux/Details/coinsDetails';

const Card = (props) => {
  // const { stockName, image, price, symbol } = prop;

  Card.propTypes = {
    coin: propTypes.shape({
      name: propTypes.string.isRequired,
      symbol: propTypes.string,
      price: propTypes.string,
      iconUrl: propTypes.string.isRequired,
    }).isRequired,
  };

  const dispatch = useDispatch();
  const handleDetails = () => {
    dispatch(getDetails(props));
    console.log(props);
  };

  return (
    <div className="cardCoin">
      <div>
        <img src={props.coin.iconUrl} alt="coin-logo" className="coinlogo" />
      </div>
      <div className="symbol">
        <Link to="details" onClick={handleDetails}>
          {' '}
          <FaArrowCircleRight className="arrow-right" />
          {' '}
        </Link>
        <span>{props.coin.name}</span>
      </div>
    </div>
  );
};

// Card.propTypes = {
//   // eslint-disable-next-line
//   stockName: propTypes.string.isRequired,
//   // eslint-disable-next-line
//   image: propTypes.string.isRequired,
//   // eslint-disable-next-line
//   price: propTypes.string,
//   // eslint-disable-next-line
//   symbol: propTypes.string,
// };
export default Card;
