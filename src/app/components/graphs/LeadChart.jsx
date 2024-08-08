
"use client"
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const LeadChart = () => {
  const data = {
    labels: ['Lead Source A','Lead Source B','Lead Source C'],
    datasets: [
      {
        label: 'Lead',
        data: [65, 59,67],
        backgroundColor: 'rgb(201, 243, 191,0.2)',
        borderColor: 'rgb(201, 243, 191,1)',
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
        text: 'Lead',
      },
    },
    
  };

  return <Bar data={data} options={options} height={1000} width={1000}/>;
};

export default LeadChart;
