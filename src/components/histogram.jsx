import React from 'react';
import { Chart as ChartJS, BarElement, LinearScale, CategoryScale, ArcElement, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, LinearScale, CategoryScale, ArcElement, Tooltip, Legend);

function Histogram({ xAxisData, yAxisData }) {
  const longestLabelLength = Math.max(...xAxisData.map(label => label.length));
  const maxBarThickness = 100; // Maximum bar thickness
  const barThickness = Math.min(maxBarThickness, 40 + longestLabelLength * 5); // Adjust based on label length

  const data = {
    labels: xAxisData,
    datasets: [
      {
        label: "JOBS",
        data: yAxisData,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1,
        barThickness: barThickness,
        categoryPercentage: 0.01 
      }
    ]
  };

  const options = {
    scales: {
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0)"
        },
        ticks: {
          color: 'rgba(30, 144, 200, 1)',
          font: {
            size: 14,
          },
         
          maxRotation: 0,
          autoSkip: false, 
          autoSkipPadding: 20, 
        }
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0)"
        },
        title: {
          display: true,
          text: 'Number of Jobs',
          color: 'white'
        }
      }
    }
  };

  return (
    <div className="npm border-2" style={{ width: "90%", height: "70%" }}>
      <Bar data={data} options={options} />
    </div>
  );
}

export default Histogram;
