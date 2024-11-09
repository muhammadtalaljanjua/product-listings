import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";

const PieChart = () => {
  const options = {
    chart: { type: "pie" },
    title: { text: "Smartphone Market Share in 2024" },
    series: [
      {
        name: "Market Share",
        data: [
          { name: "Brand A", y: 40 },
          { name: "Brand B", y: 30 },
          { name: "Brand C", y: 20 },
          { name: "Brand D", y: 10 },
        ],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default PieChart;
