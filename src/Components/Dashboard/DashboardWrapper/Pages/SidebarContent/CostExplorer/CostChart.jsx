import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import ReactFC from "react-fusioncharts";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const CostChart = ({ data, type }) => {

  const months = [
    "jan", "feb", "mar", "apr", "may", "jun",
    "jul", "aug", "sep", "oct", "nov", "dec"
  ];

  const group = data.map(item => item.subtype);
  console.log("group", group);

  // X-axis categories (Months)
  const categories = [
    {
      category: months.map(month => ({
        label: month.toUpperCase()
      }))
    }
  ];

  const dataset = data.map(item => ({
    seriesname: item.subtype,
    data: months.map(month => ({
      value: item.monthCost?.[month] ?? 0
    }))
  }));

  const chartConfigs = {
    type: type,
    width: "100%",
    height: "500",
    dataFormat: "json",
    dataSource: {
      chart: {
        xAxisName: "Months",
        yAxisName: "Cost (in $)",
        numberPrefix: "$",
        theme: "fusion",
        showValues: "0",
        legendPosition: "bottom"
      },
      categories,
      dataset
    }
  };

  return <ReactFC {...chartConfigs} />;
};

export default CostChart;
