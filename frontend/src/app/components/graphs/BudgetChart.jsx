"use client"
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const BudgetChart = () => {
  const data = {
    labels: ['Budget Use', 'Remaining Budget'],
    datasets: [
      {
        label: 'My Doughnut Chart',
        data: [12, 20],
        backgroundColor: [
          'rgb(229, 157, 216,.2)',
          'rgb(201, 243, 191,.2)',
          
        ],
        borderColor: [
          'rgb(229, 157, 216)',
          'rgb(201, 243, 191,1)',
          
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
      title: {
        display: true,
        text: 'Budget Ultilisation',
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

export default BudgetChart;

  