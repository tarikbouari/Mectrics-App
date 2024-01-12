/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import CryptoChart from '../components/CryptoChart';
// import { FaArrowCircleLeft } from 'react-icons/fa';
const Details = () => {
  const detailsCoins = useSelector((state) => state.detail.details);
  // const historyData = useSelector((state) => state.history.history);
  const detailArr = [detailsCoins];
  console.log('this cons details =>', detailArr);

  const historyData = useSelector((state) => state.history.history);
  console.log(historyData);
  // const url = 'https://api.coincap.io/v2/assets/bitcoin/history?interval=d1';

  // useEffect(() => {
  //   const fecthHistory = async () => {
  //     try {
  //       const response = await fetch(url);
  //       const result = await response.json();
  //       const dataArr = result.data;
  //       console.log('This is the history', dataArr);
  //     } catch (err) {
  //       console.log('Error fetching history');
  //     }
  //   };
  //   fecthHistory();
  // }, []);

  return (
    <>
      <section className="w-full py-[5rem] bg-[#010118]">
        {detailArr.map((item) => (
          <div key={item.uuid} className="container ">
            <div className="py-[2rem]">
              <Link to="price"><span>All price </span></Link>
              <span>&gt; </span>
              <span>
                {item.name}
                &nbsp;
                Price
              </span>
            </div>
            <div className="py-[2rem] flex justify-between gap-2">
              <div className="flex gap-2 items-center">
                <img src={item.iconUrl} alt={item.name} className="w-[35px] h-[35px]" />
                <span className="text-3xl">{item.name}</span>
                <span>{item.symbol}</span>
              </div>
              <div>
                <span>share</span>
                <span>whatchlis</span>
              </div>

            </div>
            <div className="flex gap-10">
              <div className="w-[70%] ">
                <div className="col1 flex flex-col py-[5rem] bg-[#122036] p-4">
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
                    {/* <CryptoChart /> */}
                    {console.log(item.name)}
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
                <div className="col2 my-[5rem] bg-[#122036] p-4">
                  <div className="flex gap-4">
                    <span>About</span>
                    <span>Social & News</span>
                  </div>
                  <div>
                    <div>
                      <h3 className="py-4">About coin</h3>
                      <p>
                        Bitcoin’s price today is US$41,215.51, with a 24-hour trading volume of $39.89 B. BTC is -5.93% in the last 24 hours.
                        It is currently -7.73% from its 7-day all-time high of $44,668.79, and 2.38% from its 7-day all-time low of $40,256.33.
                        BTC has a circulating supply of 19.57 M BTC and a max supply of 21 M BTC.
                      </p>
                    </div>

                  </div>
                </div>

              </div>
              <div className="w-[30%] flex flex-col">
                <div className="mb-[1rem] bg-[#122036] p-4">
                  <h3 className="py-4">About coin</h3>
                  <p>
                    Bitcoin’s price today is US$41,215.51, with a 24-hour trading volume of $39.89 B. BTC is -5.93% in the last 24 hours.
                    It is currently -7.73% from its 7-day all-time high of $44,668.79, and 2.38% from its 7-day all-time low of $40,256.33.
                    BTC has a circulating supply of 19.57 M BTC and a max supply of 21 M BTC.
                  </p>
                </div>

                <div className="mt-[1rem] bg-[#122036] p-4">
                  <h3 className="py-4">About coin</h3>
                  <p>
                    Bitcoin’s price today is US$41,215.51, with a 24-hour trading volume of $39.89 B. BTC is -5.93% in the last 24 hours.
                    It is currently -7.73% from its 7-day all-time high of $44,668.79, and 2.38% from its 7-day all-time low of $40,256.33.
                    BTC has a circulating supply of 19.57 M BTC and a max supply of 21 M BTC.
                  </p>
                </div>

              </div>
            </div>
          </div>
        ))}
      </section>
    </>

  );
};

export default Details;
