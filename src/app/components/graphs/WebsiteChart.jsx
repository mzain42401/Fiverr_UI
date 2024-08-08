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
        backgroundColor: [
          'rgba(201, 243, 191, 0.2)', // Light green for Lead Source A
          'rgba(229, 157, 216, 0.2)', // Light pink for Lead Source B
          'rgba(1, 254, 252, 0.2)'   // Light cyan for Lead Source C
        ],
        borderColor: [
          'rgba(201, 243, 191, 1)',  // Green for Lead Source A
          'rgba(229, 157, 216, 1)',  // Pink for Lead Source B
          'rgba(1, 254, 252, 1)'     // Cyan for Lead Source C
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
        text: 'Website',
      },
    },
    
  };

  return <Bar data={data} options={options} height={1000} width={1000}/>;
};

export default WebsiteChart;
