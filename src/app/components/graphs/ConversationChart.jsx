
"use client"
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ConversationChart = () => {
  const data = {
    labels: ['Total Conversations','Total Cost Per Conversations','Return On Advertising Spend'],
    datasets: [
      {
        label: 'Lead',
        data: [65, 59,67],
        backgroundColor: 'rgb(1, 254, 252,0.2)',
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
        text: 'Coversations Metrics ',
      },
    },
    
  };

  return <Bar data={data} options={options} height={1000} width={1000}/>;
};

export default ConversationChart;
