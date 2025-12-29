import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import ReactFC from "react-fusioncharts";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const CostChart = ({ props }) => {
  const { data, type } = props;
  if (!data || data.length === 0) return null;

  // X-axis categories (Months)
  const categories = [
    {
      category: data.map(d => ({
        label: d.month
      }))
    }
  ];

  const services = Object.keys(data[0]).filter(key => key !== "month");

  const dataset = services.map(service => ({
    seriesname: service,
    data: data.map(d => ({
      value: d[service]
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
        yAxisName: "Cost (USD)",
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
