import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);

export const ChartLine = ({ datas, labels, height, maxValue = 300 }) => {
  const setup = [
    {
      color: "#FC9D68",
      lable: "Total",
    },
    {
      color: "#2BBA23",
      lable: "Actual",
    },
  ];

  const data = {
    labels: labels,
    datasets: datas?.map((item, i) => {
      return {
        label: setup[i]?.lable,
        data: item,
        datasetStrokeWidth: 3,
        pointDotStrokeWidth: 4,
        backgroundColor: setup[i]?.color,
        borderColor: setup[i]?.color,
        tension: 0.0,
        pointRadius: 4,
        pointBackgroundColor: "#FFF",
        borderWidth: 2.5,
      };
    }),
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 0,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      // y: {min: 0, max: Number(maxValue) * 1.2, stepSize: 0}
    },
    plugins: {
      legend: {
        display: false
      },
    },
  };

  return (
    <>
      <Line data={data} options={options} height={height} />
    </>
  );
};
