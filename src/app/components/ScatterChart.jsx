import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";

const ScatterChart = () => {
  const options = {
    chart: { type: "scatter" },
    title: { text: "Height vs. Weight of Students" },
    xAxis: { title: { text: "Height (cm)" } },
    yAxis: { title: { text: "Weight (kg)" } },
    series: [
      {
        name: "Students",
        data: [
          [160, 55],
          [165, 58],
          [170, 62],
          [175, 65],
          [180, 70],
          [155, 50],
          [167, 63],
          [172, 68],
          [158, 54],
          [176, 72],
        ],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default ScatterChart;
