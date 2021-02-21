import { Line } from "@ant-design/charts";
import { useCompareStockState } from "../hook/compareStock";
import { Col, Row, Skeleton } from "antd";
import NoData from "./NoData";
import NotFound from "./NotFound";
import { colorSet } from "../data";

const CompareStockCharts = ({ symbol_list }) => {
  const compareStockState = useCompareStockState(symbol_list);
  const error =
    compareStockState.error === null ? null : compareStockState.error ===
      "No Data" ? (
      <NoData />
    ) : (
      <NotFound />
    );
  const loading =
    compareStockState.loading || !compareStockState.data ? (
      <Skeleton active />
    ) : null;
  return error ? (
    error
  ) : loading ? (
    loading
  ) : (
    <>
      <h2>股價比較</h2>
      <Row justify="center">
        <Col span={18}>
          <Line
            data={compareStockState.data}
            xField="date"
            xAxis={{ type: "time" }}
            yField="close"
            seriesField="symbol"
            height={500}
            width={500}
            yAxis={{
              label: {
                formatter: function formatter(v) {
                  return ""
                    .concat(v)
                    .replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) {
                      return "".concat(s, ",");
                    });
                }
              }
            }}
            color={colorSet}
          />
        </Col>
      </Row>
      <h2>漲幅比較</h2>
      <Row justify="center">
        <Col span={18}>
          <Line
            data={compareStockState.data}
            xField="date"
            xAxis={{ type: "time" }}
            yField="ratio"
            seriesField="symbol"
            height={500}
            width={500}
            yAxis={{
              label: {
                formatter: function formatter(v) {
                  return ""
                    .concat(v)
                    .replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) {
                      return "".concat(s, ",");
                    });
                }
              }
            }}
            color={colorSet}
          />
        </Col>
      </Row>
    </>
  );
};

export default CompareStockCharts;
