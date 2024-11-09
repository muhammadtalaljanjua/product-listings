import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";

const AreaChart = () => {
  const options = {
    chart: { type: "area" },
    title: { text: "Website Traffic Over Time" },
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
      title: { text: "Month" },
    },
    yAxis: { title: { text: "Visits (in thousands)" } },
    series: [{ name: "Visits", data: [15, 25, 35, 50, 65, 80, 90, 110, 130, 145, 160, 180] }],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default AreaChart;
