import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import { getStock } from '../redux/SotckActions/stocks';
import { getCategory } from '../redux/Category/category';
// import { getDetails } from '../redux/Details/coinsDetails';
// import Card from '../components/StockCard';

const Price = () => {
  const stocks = useSelector((state) => state.stock.data);
  const categoriesState = useSelector((state) => state.category.category);
  const stockDetails = useSelector((state) => state.detail.details);
  const dispatch = useDispatch();
  // fetch api base on a specific stock detail

  const handleStockClick = (stockId) => {
    const url = `https://coinranking1.p.rapidapi.com/coin/${stockId}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b9f261dee6mshf5721e09b0a9f8ep1a16b9jsnc187afe74e7b',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
      },
    };

    const fetchStockDetails = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        const detail = result.data.coin;
        console.log(detail);
        dispatch(getDetails(detail));
      } catch (error) {
        throw new Error('Failed fecthing stock details');
      }
    };
    fetchStockDetails();
  };

  useEffect(() => {
    if (stocks.length === 0) {
      dispatch(getStock());
    }
  }, [dispatch, stocks.length]);

  const getTopTwenty = stocks.filter((item) => item.rank < 20);
  const getTopGainers = stocks.filter(
    (item) => item.rank > 10 && item.rank < 21,
  );

  const getTopLosers = stocks.filter((item) => item.marketCap < 1870280014);
  const getTopMovers = stocks.filter(
    (item) => item.rank > 10 && item.rank < 16,
  );

  const handleOption = (e) => {
    e.preventDefault();
    const category = e.target.value;
    dispatch(getCategory(category));
  };
  const HandleAll = () => {
    const category = 'All';
    dispatch(getCategory(category));
  };
  return (
    <div className="w-full bg-[#010118]">
      <div className="container py-[5rem] ">
        <div className=" bg-[#122040] px-4  py-4 mb-5 flex gap-4">
          <div className="flex">
            <button type="button" className="border-r p-2 border-[#cecece] hover:text-[#2280c3]" onClick={HandleAll}>All coin</button>
          </div>
          <form
            onChange={() => handleOption}
            name="category"
            id="category"
            className="text-[#010118] rounded-sm "
          >
            <select>
              <option value="All">All</option>
              <option value="Top20">Top 20</option>
              <option value="Gainers">Top Gainers</option>
              <option value="Losers">Top Losers</option>
            </select>
          </form>

        </div>
        <div className="p-4 flex gap-4">
          {getTopMovers.map((item) => (
            <div key={item.uuid} className="flex flex-col gap-2 bg-[#232755] rounded-lg p-4">
              <div className="flex">
                <img src={item.iconUrl} alt={item.name} className="w-[25px] h-[25px] " />

              </div>
              <div className="flex gap-2 justify-between flex-wrap">
                <span>
                  {item.name}
                </span>
                <span>{item.symbol}</span>
              </div>
              <div className="flex justify-between">
                <span>
                  $
                  {Number(item.price).toFixed(2)}
                </span>
                <span className={item.change < 0 ? 'text-[#E62F31]' : 'text-[#1DB39B]'}>{item.change}</span>
              </div>
            </div>
          ))}
        </div>
        {categoriesState === 'Top20' && (
        <>
          <h3 className="mt-[5rem] text-3xl">Today &apos;s Top 20 Cryptocurrency prices</h3>
          <section className=" my-[2rem] bg-[#122036]  pb-4 ">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-[#122040]  ">
                  <th className="px-4 py-4">name</th>
                  <th>price</th>
                  <th>24 change</th>
                  <th>24 Volume</th>
                  <th>24 marketCap</th>
                </tr>
              </thead>
              <tbody>
                {getTopTwenty.map((item) => (
                  <tr key={item.uuid} className="border-b border-[#cecece5c]">
                    <td className="flex items-center gap-2  px-4 py-4">
                      <img src={item.iconUrl} alt={item.name} className="w-[25px] h-[25px] " />
                      <div className="flex flex-col">
                        <span className="text-sm">
                          {item.name}
                          {' '}
                        </span>
                        <span className="text-sm">
                          {item.symbol}
                          {' '}
                        </span>
                      </div>
                    </td>
                    <td>
                      $
                      {Number(item.price).toFixed(2)}
                    </td>
                    <td className={item.change < 0 ? 'text-[#E62F31]' : 'text-[#1DB39B]'}>{item.change}</td>
                    <td>{item.rank}</td>
                    <td>{item.marketCap}</td>
                  </tr>
                ))}

              </tbody>

            </table>

          </section>
        </>

        )}
        {categoriesState === 'All' && (
        <>
          <h3 className="mt-[5rem] text-3xl">Today &apos; Cryptocurrency prices</h3>

          <section className=" my-[2rem] bg-[#122036]  pb-4 ">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-[#122040]  ">
                  <th className="px-4 py-4">#</th>
                  <th className="px-4 py-4">name</th>
                  <th>price</th>
                  <th>24 change</th>
                  <th>24 Volume</th>
                  <th>24 marketCap</th>
                </tr>
              </thead>
              <tbody>
                {stocks.map((item) => (
                  <tr key={item.uuid} className="border-b border-[#cecece5c]">
                    <td className="px-4 py-4">{item.rank}</td>
                    <td className="flex items-center gap-2  px-4 py-4">
                      <img src={item.iconUrl} alt={item.name} className="w-[25px] h-[25px] " />
                      <div className="flex flex-col">
                        <span className="text-sm">
                          {item.name}
                          {' '}
                        </span>
                        <span className="text-sm">
                          {item.symbol}
                          {' '}
                        </span>
                      </div>
                    </td>
                    <td>
                      $
                      {Number(item.price).toFixed(2)}
                    </td>
                    <td className={item.change < 0 ? 'text-[#E62F31]' : 'text-[#1DB39B]'}>{item.change}</td>
                    <td>{item.rank}</td>
                    <td>{item.marketCap}</td>
                  </tr>
                ))}
              </tbody>

            </table>

          </section>
        </>

        )}
        {categoriesState === 'Gainers' && (
        <>
          <h3 className="mt-[5rem] text-3xl">Today &apos; Cryptocurrency prices</h3>
          <section className=" my-[2rem] bg-[#122036]  pb-4 ">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-[#122040]  ">
                  <th>#</th>
                  <th className="px-4 py-4">name</th>
                  <th>price</th>
                  <th>24 change</th>
                  <th>24 Volume</th>
                  <th>24 marketCap</th>
                </tr>
              </thead>
              <tbody>
                {getTopGainers.map((item) => (
                  <tr key={item.uuid} className="border-b border-[#cecece5c]">
                    <td>{item.length}</td>
                    <td className="flex items-center gap-2  px-4 py-4">
                      <img src={item.iconUrl} alt={item.name} className="w-[25px] h-[25px] " />
                      <div className="flex flex-col">
                        <span className="text-sm">
                          {item.name}
                          {' '}
                        </span>
                        <span className="text-sm">
                          {item.symbol}
                          {' '}
                        </span>
                      </div>
                    </td>
                    <td>
                      $
                      {Number(item.price).toFixed(2)}
                    </td>
                    <td className={item.change < 0 ? 'text-[#E62F31]' : 'text-[#1DB39B]'}>{item.change}</td>
                    <td>{item.rank}</td>
                    <td>{item.marketCap}</td>
                  </tr>
                ))}

              </tbody>

            </table>

          </section>
        </>

        )}
        {categoriesState === 'Losers' && (
        <>
          <h3 className="mt-[5rem] text-3xl">Today &apos; Cryptocurrency prices</h3>
          <section className=" my-[2rem] bg-[#122036]  pb-4 ">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-[#122040]  ">
                  <th className="px-4 py-4">name</th>
                  <th>price</th>
                  <th>24 change</th>
                  <th>24 Volume</th>
                  <th>24 marketCap</th>
                </tr>
              </thead>
              <tbody>
                {getTopLosers.map((item) => (
                  <tr key={item.uuid} className="border-b border-[#cecece5c]">
                    <td className="flex items-center gap-2  px-4 py-4">
                      <img src={item.iconUrl} alt={item.name} className="w-[25px] h-[25px] " />
                      <div className="flex flex-col">
                        <span className="text-sm">
                          {item.name}
                          {' '}
                        </span>
                        <span className="text-sm">
                          {item.symbol}
                          {' '}
                        </span>
                      </div>
                    </td>
                    <td>
                      $
                      {Number(item.price).toFixed(2)}
                    </td>
                    <td className={item.change < 0 ? 'text-[#E62F31]' : 'text-[#1DB39B]'}>{item.change}</td>
                    <td>{item.rank}</td>
                    <td>{item.marketCap}</td>
                  </tr>
                ))}
              </tbody>
            </table>

          </section>
        </>

        )}
      </div>
    </div>

  );
};

export default Price;
