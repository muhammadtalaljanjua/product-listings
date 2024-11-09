import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";

const SplineChart = () => {
  const options = {
    chart: {
      type: "spline",
    },
    title: {
      text: "Monthly Average Temperature",
    },
    xAxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yAxis: {
      title: {
        text: "Temperature (°C)",
      },
    },
    series: [
      {
        name: "Temperature",
        data: [2.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default SplineChart;
