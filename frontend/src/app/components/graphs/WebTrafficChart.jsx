
"use client"
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const WebTrafficChart = () => {
  const data = {
    labels: ['Social Media', 'Search Engines', 'Email Compaigns','Direct'],
    datasets: [
      {
        
        data: [12, 19, 3,7],
        backgroundColor: [
          'rgb(229, 157, 216,.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgb(201, 243, 191,.2)',
          'rgb(1, 254, 252,.2)'
         
        ],
        borderColor: [
          'rgb(229, 157, 216)',
          'rgba(54, 162, 235, 1)',
          'rgb(201, 243, 191,1)',
          'rgb(1, 254, 252)'
          
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
        text: 'Email Compaigns',
      },
    },
    
  };

  return <Pie data={data}  options={options}/>;
};

export default WebTrafficChart;
