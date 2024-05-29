import React from 'react';
import { Chart as ChartJS, BarElement, LinearScale, CategoryScale, ArcElement, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, LinearScale, CategoryScale, ArcElement, Tooltip, Legend);

function Histogram({ xAxisData, yAxisData }) {
  const longestLabelLength = Math.max(...xAxisData.map(label => label.length));
  const maxBarThickness = 100; // Maximum bar thickness
  
  const data = {
    labels: xAxisData,
    datasets: [
      {
        label: "JOBS",
        data: yAxisData,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1,
        barThickness: 40,
        categoryPercentage: 0.1, // Adjust to control the gap between the bars
        barPercentage: 0.1, // Adjust to control the width of the bars
      }
    ]
  };

  const options = {
    indexAxis: 'y', // This makes the bars horizontal
    scales: {
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0)"
        },
        title: {
          display: true,
          text: 'Number of Jobs',
          color: 'white'
        }
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0)"
        },
        ticks: {
          color: '#68aeff', // Attractive shade of blue
          font: {
            size: 20, // Increase font size
          },
          maxRotation: 0, // Prevent tilting
          minRotation: 0, // Prevent tilting
          autoSkip: false, // Do not skip labels automatically
        }
      }
    }
  };

  return (
    <div className="npm rounded-xl shadow" style={{ width: "90%", height: "70%" }}>
      <Bar data={data} options={options} />
    </div>
  );
}

export default Histogram;
