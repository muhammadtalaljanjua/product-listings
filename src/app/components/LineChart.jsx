import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import GridLight from "highcharts/themes/grid-light";

GridLight(Highcharts);

// import DarkUnica from "highcharts/themes/dark-unica";
// DarkUnica(Highcharts);

// import SandSignika from "highcharts/themes/sand-signika";
// SandSignika(Highcharts);

const data = [
  { date: "2024-01-01", price: 60 },
  { date: "2024-01-02", price: 75 },
  { date: "2024-01-03", price: 80 },
  { date: "2024-01-04", price: 95 },
  { date: "2024-01-05", price: 100 },
  { date: "2024-01-06", price: 90 },
  { date: "2024-01-07", price: 105 },
  { date: "2024-01-08", price: 120 },
  { date: "2024-01-09", price: 130 },
  { date: "2024-01-10", price: 125 },
];

const LineChart = () => {
  const [chartData, setChartData] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const prices = data.map((item) => item.price);
    setChartData(prices);

    const dates = data.map((item) => item.date);
    setCategories(dates);
  }, []);

  const options = {
    title: {
      text: "Product Prices Over Time",
    },
    xAxis: {
      categories: categories,
      title: {
        text: "Date",
      },
    },
    yAxis: {
      title: {
        text: "Price ($)",
      },
    },
    series: [
      {
        name: "Product Prices",
        data: chartData,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default LineChart;
