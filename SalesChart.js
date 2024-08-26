// src/SalesChart.js
import React, { useState } from "react";
import { Chart, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';

Chart.register(...registerables);

const SalesChart = () => {
  const [timeframe, setTimeframe] = useState("allTime");

  const data = {
    allTime: [
      { year: "2014", directBooking: 300, package: 200 },
      { year: "2015", directBooking: 350, package: 250 },
      { year: "2016", directBooking: 200, package: 450 },
      { year: "2017", directBooking: 400, package: 300 },
      { year: "2018", directBooking: 500, package: 350 },
      { year: "2019", directBooking: 450, package: 400 },
      { year: "2020", directBooking: 400, package: 300 },
      { year: "2021", directBooking: 350, package: 350 },
      { year: "2022", directBooking: 400, package: 400 },
    ],
    thisYear: [{ year: "2022", directBooking: 400, package: 400 }],
    thisWeek: [{ year: "Week 1", directBooking: 100, package: 150 }],
    today: [{ year: "Today", directBooking: 50, package: 70 }],
  };

  const chartData = {
    labels: data[timeframe].map((d) => d.year),
    datasets: [
      {
        label: "Direct booking",
        data: data[timeframe].map((d) => d.directBooking),
        backgroundColor: "rgba(0, 0, 255, 0.3)",
        borderColor: "blue",
        borderWidth: 1,
        pointRadius: 2,
        fill: true,
        tension: 0.4,
      },
      {
        label: "Package",
        data: data[timeframe].map((d) => d.package),
        backgroundColor: "rgba(255, 0, 255, 0.3)",
        borderColor: "magenta",
        borderWidth: 1,
        pointRadius: 2,
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 10,
          },
        },
      },
      title: {
        display: true,
        text: 'Sales Statistics',
        font: {
          size: 16,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 10,
          },
        },
      },
      y: {
        min: 0,
        max: 600,
        title: {
          display: true,
          text: 'Sales',
          font: {
            size: 12,
          },
        },
        ticks: {
          font: {
            size: 10, 
          },
        },
      },
    },
  };

  return (
    <div className="card">
      <div className="card-header">
        <h5>Sales Statistics</h5>
      </div>
      <div className="card-body chart-container">
        <div className="sales-stats-tabs">
          <button
            className={`button ${timeframe === "allTime" ? "active" : ""}`}
            onClick={() => setTimeframe("allTime")}
          >
            All time
          </button>
          <button
            className={`button ${timeframe === "thisYear" ? "active" : ""}`}
            onClick={() => setTimeframe("thisYear")}
          >
            This year
          </button>
          <button
            className={`button ${timeframe === "thisWeek" ? "active" : ""}`}
            onClick={() => setTimeframe("thisWeek")}
          >
            This week
          </button>
          <button
            className={`button ${timeframe === "today" ? "active" : ""}`}
            onClick={() => setTimeframe("today")}
          >
            Today
          </button>
        </div>
        <Line data={chartData} options={options}  className="SalesStatisticsCart"/>
      </div>
    </div>
  );
};

export default SalesChart;
