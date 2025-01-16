import React, { useRef, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Tooltip } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Tooltip);

const GradientChart = () => {
  const chartRef = useRef(null);

  // Data for the chart
  const data = {
    labels: ['7:15 PM', '12:55 AM', '6:35 AM', '12:15 PM', '5:55 PM'], // Example time labels
    datasets: [
      {
        label: 'Price',
        data: [1200, 1250, 1235, 1290, 1275], // Example data points
        borderColor: '#6C63FF',
        borderWidth: 2,
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            return null;
          }
          const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
          gradient.addColorStop(0, 'rgba(108, 99, 255, 0.5)');
          gradient.addColorStop(1, 'rgba(108, 99, 255, 0.01)');
          return gradient;
        },
        fill: true,
        pointRadius: 0, // Hide points
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#6B7280', // Gray for labels
        },
      },
      y: {
        grid: {
          color: 'rgba(107, 114, 128, 0.1)', // Light gray grid
        },
        ticks: {
          color: '#6B7280',
        },
      },
    },
  };

  return (
    <div className="h-48">
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default GradientChart;
