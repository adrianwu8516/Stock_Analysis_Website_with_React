import { Spin } from "antd";
import { useStockFRState } from "../hook/stockFR";
import NoData from "./NoData";
import NotFound from "./NotFound";
import { GroupedColumnChart } from "@ant-design/charts";

const StockFRChartsSection = ({ symbol }) => {
  let stockFRState = useStockFRState(symbol);
  const error =
    stockFRState.error === null ? null : stockFRState.error === "No Data" ? (
      <NoData />
    ) : (
      <NotFound />
    );
  const loading = stockFRState.loading || !stockFRState.data ? <Spin /> : null;
  const revenueProfitData = [];
  if (stockFRState.data) {
    for (let no in stockFRState.data.period) {
      revenueProfitData.unshift({
        name: "Revenue",
        月份: stockFRState.data.period[no],
        比例: stockFRState.data.incomeMargin[no]
      });
      revenueProfitData.unshift({
        name: "Profit",
        月份: stockFRState.data.period[no],
        比例: stockFRState.data.profitMargin[no]
      });
    }
  }
  const config = revenueProfitData
    ? {
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
      }
    : null;
  return error ? error : loading ? loading : <GroupedColumnChart {...config} />;
};

export default StockFRChartsSection;
