import { Bar } from 'react-chartjs-2';

const Chart = ({ data, options }) => {
  return <Bar data={data} options={options} />;
};

export default Chart;
