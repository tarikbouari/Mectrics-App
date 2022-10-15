import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStock } from '../redux/SotckActions/stocks';
import Card from './StockCard';
import { getCategory } from '../redux/Category/category';

const Home = () => {
  const stocks = useSelector((state) => state.stock);
  const categoriesState = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    if (stocks.length === 0) {
      dispatch(getStock());
    }
  }, []);

  const getTopTen = stocks.filter((item) => item.rank < 10);
  const getTopGainers = stocks.filter(
    (item) => item.rank > 10 && item.rank < 21,
  );

  const getTopLosers = stocks.filter((item) => item.marketCap < 1870280014);

  const handleOption = (e) => {
    e.preventDefault();
    const category = e.target.value;
    dispatch(getCategory(category));
  };

  return (
    <>
      <div className="my-3 homeContainer">
        <h1 className="header-text container"> Welcome To CryptoCoin</h1>
        <div>
          <h3 className="py-3 container">Whatchlist</h3>
          <div className="category py-3">
            <form
              className="form container"
              name="category"
              id="category"
              onChange={handleOption}
            >
              <select>
                <option value="All"> All crypto</option>
                <option value="Top10"> Top 10</option>
                <option value="Gainers"> Top Gainers</option>
                <option value="Losers">Top Losers</option>
              </select>
            </form>
          </div>
          {categoriesState.category === 'Top10' && (
            <section>
              <h2 className="title">Most Popular Coins</h2>
              <div className="containerCard">
                {getTopTen.map((item) => (
                  <Card key={item.id} coin={item} />
                ))}
              </div>
            </section>
          )}

          {categoriesState.category === 'Gainers' && (
            <section>
              <h2 className="title">Top Gainers</h2>
              <div className=" containerCard">
                {getTopGainers.map((item) => (
                  <Card key={item.id} coin={item} />
                ))}
              </div>
            </section>
          )}

          {categoriesState.category === 'Losers' && (
            <section>
              <h2 className="title">Top Losers</h2>
              <div className=" containerCard">
                {getTopLosers.map((item) => (
                  <Card key={item.id} coin={item} />
                ))}
              </div>
            </section>
          )}
          {categoriesState.category === 'All' && (
            <section>
              <h2 className="title container">All coins</h2>
              <div className=" containerCard">
                {stocks.map((item) => (
                  <Card key={item.id} coin={item} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
};
export default Home;
