import React from "react";
import { Line } from "@ant-design/charts";
import { useMacorMonthlyState } from "../hook/macroMonthly";
import { Col, Row } from "antd/es/grid";
import NoData from "./NoData";
import NotFound from "./NotFound";
import { Spin } from "antd";

const MacroMonthlyCharts = ({ macroDataProcess }) => {
  const macorMonthlyState = useMacorMonthlyState();
  const error =
    macorMonthlyState.error === null ? null : macorMonthlyState.error ===
      "No Data" ? (
      <NoData />
    ) : (
      <NotFound />
    );
  const loading =
    macorMonthlyState.loading || !macorMonthlyState.data ? <Spin /> : null;
  return error ? (
    error
  ) : loading ? (
    loading
  ) : (
    <>
      <h2>民間消費能力衡量（美國）</h2>
      <Row>
        <Col span={12}>
          <Line
            {...macroDataProcess(
              macorMonthlyState.data,
              ["核心CPI"],
              ["核心CPI"]
            )}
          />
        </Col>
        <Col span={12}>
          <Line
            {...macroDataProcess(
              macorMonthlyState.data,
              ["5週以下短期失業", "27週以上長期失業"],
              ["5週以下短期失業", "27週以上長期失業"]
            )}
          />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Line
            {...macroDataProcess(
              macorMonthlyState.data,
              ["個人消費支出", "個人可支配所得", "零售/食物/服務銷售"],
              ["個人消費支出", "個人可支配所得", "零售/食物/服務銷售"]
            )}
          />
        </Col>
        <Col span={12}>
          <Line
            {...macroDataProcess(
              macorMonthlyState.data,
              ["耐久財訂單", "個人耐久財", "商業庫存總數"],
              ["耐久財訂單", "個人耐久財", "商業庫存總數"]
            )}
          />
        </Col>
      </Row>
    </>
  );
};

export default MacroMonthlyCharts;
