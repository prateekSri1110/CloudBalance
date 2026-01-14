import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { useMemo } from "react";
import ReactFC from "react-fusioncharts";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const CostChart = ({ data, type }) => {

  const months = useMemo(() => {
    if (!data?.length) return [];
    return Object.keys(data[0].monthlyCost);
  }, [data]);

  const categories = [
    {
      category: months.map(month => ({
        label: month
      }))
    }
  ];

  const dataset = data.map(item => ({
    seriesname: item.groupName,
    data: months.map(month => ({
      value: item.monthlyCost?.[month] ?? 0
    }))
  }));

  const chartConfigs = {
    type,
    width: "100%",
    height: "500",
    dataFormat: "json",
    dataSource: {
      chart: {
        xAxisName: "Months",
        yAxisName: "Cost",
        numberPrefix: "$",
        theme: "fusion",
        showValues: "0",
        legendPosition: "bottom",
        drawAnchors: "0"
      },
      categories,
      dataset
    }
  };

  return <ReactFC {...chartConfigs} />;
};

export default CostChart;
