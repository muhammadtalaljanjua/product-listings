import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";

const ColumnChart = () => {
  const options = {
    chart: { type: "column" },
    title: { text: "Quarterly Sales by Product Category" },
    xAxis: {
      categories: ["Electronics", "Apparel", "Home Goods", "Books", "Sports Equipment"],
      title: { text: "Product Category" },
    },
    yAxis: { title: { text: "Sales (in $ thousands)" } },
    series: [{ name: "Quarter 1 Sales", data: [150, 230, 180, 90, 130] }],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default ColumnChart;
