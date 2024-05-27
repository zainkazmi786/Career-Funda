import React from 'react';
import { Chart as ChartJS, BarElement, LinearScale, CategoryScale, ArcElement, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, LinearScale, CategoryScale, ArcElement, Tooltip, Legend);

function Histogram({ xAxisData, yAxisData }) {
  const data = {
    labels: xAxisData,
    datasets: [
      {
        label: "CHATGPT users",
        data: yAxisData,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1
      }
    ]
  };

  const options = {
    scales: {
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.5)"
        }
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.5)"
        },
        title: {
          display: true,
          text: 'Chat GPT users in Billions',
          color: 'white'
        }
      }
    }
  };
  
  return (
    <div className="npm" style={{ width: "90%", height: "70%"}}>
      <Bar data={data} options={options} />
    </div>
  );
}

export default Histogram;
