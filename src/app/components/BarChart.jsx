import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";

const BarChart = () => {
  const options = {
    chart: { type: "bar" },
    title: { text: "Employee Skills Comparison" },
    xAxis: {
      categories: ["Coding", "Communication", "Project Management", "Design", "Problem Solving"],
      title: { text: "Skills" },
    },
    yAxis: { title: { text: "Skill Level" } },
    series: [
      { name: "Employee A", data: [8, 6, 7, 5, 9] },
      { name: "Employee B", data: [6, 7, 8, 6, 7] },
      { name: "Employee C", data: [9, 8, 6, 7, 8] },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default BarChart;
