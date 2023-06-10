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

export default function Histogram({
  description,
  unit,
  xAxisLabels,
  dataArrays,
}: {
  description: string;
  unit: string;
  xAxisLabels: number[];
  dataArrays: string[][];
}): JSX.Element {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const datasets = dataArrays.map((dataArr, i: number) => ({
    label: `Datapoint ${i + 1}`,
    data: dataArr.slice(1),
    backgroundColor: `hsl(${Math.floor(
      (i * 360) / dataArrays.length
    )}, 80%, 50%)`,
  }));

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: `${description}`,
      },
    },
  };

  const labels = xAxisLabels.map(
    (el, i) => `${el} - ${xAxisLabels[i + 1] || 'Infinity'} ${unit}`
  );

  const data = {
    labels,
    datasets,
  };

  return <Bar options={options} data={data} />;
}
