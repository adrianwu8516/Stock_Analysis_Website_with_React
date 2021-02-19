import { GroupedColumnChart } from "@ant-design/charts";

const FRChartGroup = ({ data }) => {
  const revenueProfitData = [];
  for (let no in data.period) {
    revenueProfitData.unshift({
      name: "Revenue",
      月份: data.period[no],
      比例: data.incomeMargin[no]
    });
    revenueProfitData.unshift({
      name: "Profit",
      月份: data.period[no],
      比例: data.profitMargin[no]
    });
  }
  console.log(revenueProfitData);

  const config = {
    data: revenueProfitData,
    height: 400,
    isGroup: true,
    xField: "月份",
    yField: "比例",
    seriesField: "name",
    label: {
      position: "middle",
      layout: [
        { type: "interval-adjust-position" },
        { type: "interval-hide-overlap" },
        { type: "adjust-color" }
      ]
    }
  };
  return <GroupedColumnChart {...config} />;
};

export default FRChartGroup;
