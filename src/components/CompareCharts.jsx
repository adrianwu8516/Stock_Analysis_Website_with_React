import { Line } from "@ant-design/charts";
import { useCompareDataState } from "../hook/compareData";

const CompareCharts = ({ symbol_list }) => {
  const compareDataState = useCompareDataState(symbol_list);
  console.log(compareDataState);
  var config = {
    data: compareDataState,
    xField: "date",
    yField: "close",
    seriesField: "symbol",
    yAxis: {
      label: {
        formatter: function formatter(v) {
          return "".concat(v).replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) {
            return "".concat(s, ",");
          });
        }
      }
    },
    color: ["#1979C9", "#D62A0D", "#FAA219"]
  };
  return <Line {...config} />;
};

export default CompareCharts;
