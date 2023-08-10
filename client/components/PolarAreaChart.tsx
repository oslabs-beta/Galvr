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
import { ColorPalette } from '@/lib/utils';
import type { ParsedNumberDataPoint, ParsedKeyValue } from '../lib/metricTypes';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend, Title);

// Helper function to format the key value pairs in the metrics.
const printAttrObj = (attrObject: ParsedKeyValue): string => {
  let res = '';
  Object.keys(attrObject).forEach((key) => {
    res += `${key}: ${attrObject[key]}; `;
  });
  return res;
};

// Render a polar chart.
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
  let min = Infinity;
  let needLogScale = false;
  dataPointsArr.forEach((dataPoint) => {
    const currData = dataPoint.asDouble ?? parseInt(dataPoint.asInt!, 10);
    min = Math.min(min, currData);
    if (Math.log10(currData) - Math.log10(min) > 1.5) {
      needLogScale = true;
    }
  });

  // Log scale options
  const optionsLogarithm = {
    plugins: {
      title: {
        display: true,
        text: [`${description}`, `${unit ? `Unit: ${unit}` : ''}`],
        font: {
          size: 14,
        },
      },
      tooltip: {
        callbacks: {
          label: (context: any) => (10 ** context.parsed.r).toLocaleString(),
        },
      },
    },
    scales: {
      r: {
        ticks: {
          callback: (value: number) => {
            const convertedValue = 10 ** value;
            return convertedValue < 1
              ? convertedValue.toFixed(1).toLocaleString()
              : Math.round(convertedValue).toLocaleString();
          },
        },
      },
    },
  };

  // Linear scale options.
  const optionsLinear = {
    plugins: {
      title: {
        display: true,
        text: [`${description}`, `${unit ? `Unit: ${unit}` : ''}`],
        font: {
          size: 14,
        },
      },
    },
  };

  // To determine whether log or linear scale is required.
  dataPointsArr.forEach((dataPoint) => {
    labelArr.push(printAttrObj(dataPoint.attributes));
    const currData = dataPoint.asDouble ?? parseInt(dataPoint.asInt!, 10);
    min = Math.min(min, currData);
    if (Math.log10(currData) - Math.log10(min) > 1.5) {
      needLogScale = true;
    }
    dataArr.push(currData);
  });

  if (needLogScale) {
    for (let i = 0; i < dataArr.length; i += 1) {
      dataArr[i] = Math.log10(dataArr[i]);
    }
  }

  const options = needLogScale ? optionsLogarithm : optionsLinear;

  const data = {
    labels: labelArr,
    datasets: [
      {
        label: '',
        data: dataArr,
        backgroundColor: ColorPalette,
        borderWidth: 2,
        borderColor: 'black',
      },
    ],
  };

  return <PolarArea data={data} options={options} />;
}
