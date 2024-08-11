// components/PieChart.js
"use client"
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const EmailCompaign = () => {
  const data = {
    labels: ['Open Rate', 'Click Through Rate', 'List Growth'],
    datasets: [
      {
        
        data: [12, 19, 3],
        backgroundColor: [
          'rgb(229, 157, 216,.2)',
          'rgb(1, 254, 252,.2)',
          'rgb(201, 243, 191,.2)',
         
        ],
        borderColor: [
          'rgb(229, 157, 216)',
          'rgb(1, 254, 252)',
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
        text: 'Email Compaigns',
      },
    },
    
  };

  return <Pie data={data}  options={options}/>;
};

export default EmailCompaign;
