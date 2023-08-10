'use client';

import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

// Register the optional components for ChartJS.
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
  labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
  datasets: [
    {
      label: 'Sum',
      data: [5.5, 9, 3, 5, 2, 3],
      backgroundColor: 'rgba(62, 138, 255, 0.2)',
      borderColor: 'rgba(62, 138, 255, 1)',
      borderWidth: 1,
    },
  ],
};

export const options = {
  scales: {
    r: {
      angleLines: {
        display: true,
      },
      suggestedMin: 0,
      suggestedMax: 10,
    },
  },
};

export function RadarChart(): JSX.Element {
  return <Radar data={data} options={options} />;
}
