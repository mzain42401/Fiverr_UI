// 
"use client"
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const WebsiteChart = () => {
  const data = {
    labels: ['Page View', 'Blog Clicks', 'Visitors'],
    datasets: [
      {
        label: 'Website Metrics',
        data: [65, 59, 80],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
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
        text: 'Website',
      },
    },
    
  };

  return <Bar data={data} options={options} height={1000} width={1000}/>;
};

export default WebsiteChart;
