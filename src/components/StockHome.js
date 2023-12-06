import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStock } from '../redux/SotckActions/stocks';

const StockHome = () => {
  const stockData = useSelector((state) => state.stock.data);
  console.log(stockData);
  //   const categoriesState = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    if (stockData.length === 0) {
      dispatch(getStock());
    }
  }, [dispatch, stockData.length]);

  const getTopTen = stockData.filter((item) => item.rank < 5);

  console.log(getTopTen);

  return (
    <div className="flex flex-col gap-11 py-[5rem]">
      <h3 className="text-5xl w-[50%] mx-auto ">
        Buy Bitcoin, Ethereum, and 250+ cryptocurrencies.
      </h3>
      <div className=" w-[60%] mx-auto py-[5rem]">
        {getTopTen.map((item) => (
          <div key={item.uuid} className=" border-b border-blue-50  grid grid-cols-4 p-4">
            <div className="flex gap-2 items-center">
              <img src={item.iconUrl} alt={item.name} className="w-[40px] h-[40px] " />
              <span>
                {' '}
                {item.name}
              </span>
            </div>
            <span>
              {Number(item.price).toFixed(2)}
              {' '}
              $
            </span>
            <span>{item.change}</span>
            <span>1961</span>
          </div>
        ))}

        {/* <div className=" border-b border-blue-50  grid grid-cols-4 p-4">
          <span>Witchy Woman</span>
          <span>The Eagles</span>
          <span>1972</span>
          <span>1972</span>
        </div>
        <div className=" border-b border-blue-50  grid grid-cols-4 p-4">
          <span>Shining Star</span>
          <span>Earth, Wind, and Fire</span>
          <span>1975</span>
          <span>1972</span>
        </div> */}
      </div>

    </div>
  );
};

export default StockHome;
