import { GroupedColumnChart } from "bizcharts";

const StockFRChart = ({ data, periodType, typeLst, nameLst }) => {
  let chartData = [];
  for (let period_no in data[periodType]) {
    for (let type_no in typeLst) {
      let typeKeyName = typeLst[type_no];
      if (data[typeKeyName][period_no] === 0) continue;
      chartData.push({
        name: nameLst[type_no],
        月份: data[periodType][period_no],
        比例: data[typeKeyName][period_no]
      });
    }
  }

  return (
    <GroupedColumnChart
      data={chartData}
      height={300}
      isGroup={true}
      autoFit
      label={{
        visible: true
      }}
      xField="月份"
      yField="比例"
      seriesField="name"
    />
  );
};
export default StockFRChart;
