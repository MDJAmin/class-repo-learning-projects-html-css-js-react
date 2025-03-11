import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
    ArcElement,
    RadialLinearScale,
  } from "chart.js";


  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
    ArcElement,
    RadialLinearScale
  );
  
export default function ChartJs() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [{
      label: 'Sales',
      data: [10, 20, 30, 40, 50],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 2
    }]
  };

  const options = {
    title: {
      display: true,
      text: 'Sales Chart'
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  )
}