'use client';

import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import type { ParsedNumberDataPoint, ParsedKeyValue } from '../lib/metricTypes';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend, Title);

const printAttrObj = (attrObject: ParsedKeyValue): string => {
  let res = '';
  Object.keys(attrObject).forEach((key) => {
    res += `${key}: ${attrObject[key]}; `;
  });
  return res;
};

export default function PolarAreaChart({
  description,
  unit,
  dataPointsArr,
}: {
  description: string;
  unit: string;
  dataPointsArr: ParsedNumberDataPoint[];
}): JSX.Element {
  const labelArr: string[] = [];
  const dataArr: number[] = [];

  dataPointsArr.forEach((dataPoint) => {
    labelArr.push(printAttrObj(dataPoint.attributes));
    dataArr.push(dataPoint.asDouble ?? parseInt(dataPoint.asInt!, 10));
  });

  const data = {
    labels: labelArr,
    datasets: [
      {
        label: '',
        data: dataArr,
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderWidth: 3,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: [`${description}`, `${unit ? `Unit: ${unit}` : ''}`],
      },
    },
  };

  return <PolarArea data={data} options={options} />;
}
