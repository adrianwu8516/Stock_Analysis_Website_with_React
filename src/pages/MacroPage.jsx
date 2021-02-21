import Layout, { Content } from "antd/lib/layout/layout";
import { useParams } from "react-router-dom";
import MacroDailyCharts from "../components/MacroDailyCharts";
import MacroMonthlyCharts from "../components/MacroMonthlyCharts";
import MacroQuarterlyCharts from "../components/MacroQuarterlyCharts";
import SiteBreadcrumb from "../components/SiteBreadcrumb";
import SiteSider from "../components/SiteSider";
import { colorSet } from "../data";

const MacroPage = () => {
  const { type } = useParams();
  const macroDataProcess = (data, typeLst, nameLst) => {
    let processedData = [];
    for (let periodNo in data.period) {
      for (let typeNo in typeLst) {
        let typeName = typeLst[typeNo];
        let singleObj = { period: data.period[periodNo] };
        singleObj.value = data[typeName][periodNo];
        singleObj.category = nameLst[typeNo];
        processedData.push(singleObj);
        singleObj = {};
      }
    }
    return {
      data: processedData,
      xField: "period",
      yField: "value",
      height: 300,
      seriesField: "category",
      yAxis: {
        label: {
          formatter: function formatter(v) {
            return "".concat(v).replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) {
              return "".concat(s, ",");
            });
          }
        }
      },
      color: colorSet,
      //["#ff4d4f", "#faad14", "#52c41a", "#13c2c2", "#9254de", "#ff85c0"],
      slider: {
        start: 0.7,
        end: 1
      }
    };
  };
  return (
    <>
      <SiteSider type="macro" />
      <Layout style={{ padding: "0 24px 24px" }}>
        <SiteBreadcrumb />
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 900
          }}
        >
          {type == "daily" ? (
            <MacroDailyCharts macroDataProcess={macroDataProcess} />
          ) : type == "monthly" ? (
            <MacroMonthlyCharts macroDataProcess={macroDataProcess} />
          ) : type == "quarterly" ? (
            <MacroQuarterlyCharts macroDataProcess={macroDataProcess} />
          ) : null}
        </Content>
      </Layout>
    </>
  );
};
export default MacroPage;
