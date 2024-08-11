"use client"
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SocialMediaChart = () => {
  const data = {
    labels: ['FaceBook', 'Insta', 'LinkeIn', 'X'],
    datasets: [
      {
        label: 'Likes',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgb(229, 157, 216,.2)',
        borderColor: 'rgb(229, 157, 216)',
        borderWidth: 1,
      },
      {
        label: 'Clicks',
        data: [28, 48, 40, 19, 86, 27, 90],
        backgroundColor: 'rgb(201, 243, 191,.2)',
        borderColor: 'rgb(201, 243, 191,1)',
        borderWidth: 1,
      },
      {
        label: 'Engagment(%)',
        data: [28, 48, 40, 19, 86, 27, 90],
        backgroundColor: ' rgb(1, 254, 252,0.2)',
        borderColor: 'rgb(1, 254, 252)',
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
        text: 'Social Media',
      },
    },
    
  };

  return <Bar data={data} options={options} height={1000} width={1000}/>;
};

export default SocialMediaChart;
