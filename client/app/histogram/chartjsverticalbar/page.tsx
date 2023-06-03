'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const serviceName = 'todo-getmidsvc';

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: `http latency histogram: ${serviceName}`,
    },
  },
};

const xAxisLabels = [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000];
const unit = 'ms';
const labels = xAxisLabels.map(
  (el, i) => `${el} - ${xAxisLabels[i + 1] || 'Infinity'} ${unit}`
);
const inboundData = ['0', '0', '0', '0', '1', '1', '0', '1', '2', '0', '1'];
const outboundData = ['0', '0', '0', '1', '1', '0', '0', '1', '2', '1', '0'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Inbound',
      data: inboundData.slice(1),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Outbound',
      data: outboundData.slice(1),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function App(): JSX.Element {
  return <Bar options={options} data={data} />;
}
