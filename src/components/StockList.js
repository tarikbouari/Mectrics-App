import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStock } from '../redux/SotckActions.js/stocks';
import Card from './StockCard';

const Home = () => {
  const stocks = useSelector((state) => state.stock);
  const dispatch = useDispatch();

  useEffect(() => {
    if (stocks.length === 0) {
      dispatch(getStock());
    }
  }, []);

  return (
    <div className="container p-3 homeContainer">
      <h1 className="hi"> WELCOME TO CryptoCoin</h1>
      <div>
        {console.log(stocks)}
        <h3 className="py-3">Whatchlist</h3>
        <div className="container containerCard">
          {stocks.filter((item) => item.rank < 10)
            .map((item) => (
              <Card
                key={item.uuid}
                stockName={item.symbol}
                image={item.iconUrl}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
export default Home;

/* item.stock_exchange.acronym === 'NYSE') */
