import React from "react";

// Import FusionCharts library
import FusionCharts from "fusioncharts";

// Import chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Import theme
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Import React wrapper
import ReactFC from "react-fusioncharts";

// Pass chart and theme as dependency
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const CostChart = () => {
  const chartConfigs = {
    type: "column2d", // The chart type
    width: "100%",    // Width of the chart
    height: "400",    // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      chart: {
        caption: "Sales by Region",
        subCaption: "2025",
        xAxisName: "Region",
        yAxisName: "Sales (in USD)",
        numberPrefix: "$",
        theme: "fusion",
      },
      data: [
        { label: "North", value: "10000" },
        { label: "South", value: "15000" },
        { label: "East", value: "12000" },
        { label: "West", value: "18000" },
      ],
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default CostChart;
