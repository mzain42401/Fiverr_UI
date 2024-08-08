
"use client"
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SEOChart = () => {
  const data = {
    labels: ['Search Engine Ranking', 'Organic Traffic Growth'],
    datasets: [
      {
        label: 'SEO Metrics',
        data: [65, 59],
        backgroundColor: [
          'rgba(201, 243, 191, 0.2)', // Light green for Lead Source A
          'rgba(229, 157, 216, 0.2)',   // Light cyan for Lead Source C
        ],
        borderColor: [
          'rgba(201, 243, 191, 1)',  // Green for Lead Source A
          'rgba(229, 157, 216, 1)',   // Cyan for Lead Source C
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
        text: 'SEO',
      },
    },
    
  };

  return <Bar data={data} options={options} height={1000} width={1000}/>;
};

export default SEOChart;
