import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';

const CryptoChart = () => {
  // const [chartData, setChartData] = useState({});
  const historyData = useSelector((state) => state.history.history);
  console.log('history data', historyData);
  const labels = historyData[0].map((price) => price.time);
  console.log('labels', labels);
  const data = historyData[0].map((price) => price.priceUsd);

  // Set up chart data
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Price (USD)',
        data,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
      },
    },
  };

  return (
    <div>
      <h2>Price Chart</h2>
      {/* Line chart using react-chartjs-2 */}
      <Line data={chartData} options={options} />
    </div>
  );
};

// CryptoChart.propTypes = {
//   coinId: PropTypes.string.isRequired,
// };

export default CryptoChart;
