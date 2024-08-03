"use client"
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'My Doughnut Chart',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(1, 254, 252, .2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(229, 157, 216, .2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 243, 191, .2)',
        ],
        borderColor: [
          'rgba(1, 254, 252, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(229, 157, 216, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(201, 243, 191, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            let label = context.label || '';

            if (context.parsed !== null) {
              label += `: ${context.parsed}%`;
            }

            return label;
          },
        },
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
