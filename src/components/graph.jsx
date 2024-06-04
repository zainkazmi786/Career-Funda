import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, ArcElement, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, ArcElement, Tooltip, Legend);

function Graph({ xAxisData, yAxisData }) {
  const data = {
    labels: xAxisData,
    datasets: [
      {
        label: "CHATGPT users in Billions",
        data: yAxisData,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.3,
        pointBackgroundColor: "rgb(75, 192, 192)", // Example: Customize point color
        pointRadius: 5 // Example: Customize point radius
      }
    ]
  };

  const options = {
    scales: {
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.5)" // Set x-axis grid color to white with opacity
        },
        ticks: {
          color: "white", // Set x-axis ticks color to white
          font: {
            size: 20 // Increase font size for x-axis ticks
          }
        }
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.5)" // Set y-axis grid color to white with opacity
        },
        ticks: {
          color: "white", // Set y-axis ticks color to white
          font: {
            size: 20 // Increase font size for y-axis ticks
          }
        },
        title: {
          display: true,
          text: 'Chat GPT users in Billions', // Label for y-axis
          color: 'white' // Optional: Set color of the label
        }
      }
    }
  };

  return (
    <div className="npm" style={{ width: "90%", height: "70%" }}>
      <Line data={data} options={options} />
    </div>
  );
}

export default Graph;
