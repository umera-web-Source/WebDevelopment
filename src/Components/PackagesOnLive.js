import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";

// Register necessary Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement);

const cardData = [
  { id: 1, number: "813", title: "T20 2020 Cricket" },
  { id: 2, number: "814", title: "T20 2020 Cricket" },
  { id: 3, number: "815", title: "T20 2020 Cricket" },
  { id: 4, number: "816", title: "T20 2020 Cricket" },
  { id: 5, number: "813", title: "T20 2020 Cricket" },
  { id: 6, number: "813", title: "T20 2020 Cricket" },
  { id: 6, number: "813", title: "T20 2020 Cricket" },
  { id: 6, number: "813", title: "T20 2020 Cricket" },
];

const PackagesOnLive = () => {
  const percentage = 64;

  const colors = ["#742CDF", "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"];

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "80%",
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
    layout: {
      padding: 0,
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
  };

  return (
    <div className="card">
      <div>
        <div className="card-header">
          <h5>Packages On Live</h5>
        </div>
        <div className="Packages-cards chart-container">
          {cardData.map((card, index) => {
            const data = {
              datasets: [
                {
                  data: [percentage, 100 - percentage],
                  backgroundColor: [colors[index % colors.length], "#e6e6e6"],
                  borderWidth: 0,
                },
              ],
            };

            return (
              <div key={card.id} className="col-lg-6 p-0 m-0">
                <div className="card m-2 py-3">
                  <div className="card-body d-flex align-items-center justify-content-between ">
                    <div className="col-lg-6">
                      <p>{card.number}</p>
                      <h6 className="fw-bold">{card.title}</h6>
                    </div>
                    <div className="col-lg-6 ps-4">
                      <div className="Packages_On_Live_chart">
                        <Pie data={data} options={options} />
                        <div className="Packages_On_Live_chart_PercentageData">
                          {percentage}%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PackagesOnLive;
