import React from "react";
import { Line } from "@ant-design/charts";
import { useMacorDailyState } from "../hook/macroDaily";
import { Col, Row } from "antd/es/grid";
import NoData from "./NoData";
import NotFound from "./NotFound";
import { Spin } from "antd";

const MacroDailyCharts = ({ macroDataProcess }) => {
  const macorDailyState = useMacorDailyState();
  const error =
    macorDailyState.error === null ? null : macorDailyState.error ===
      "No Data" ? (
      <NoData />
    ) : (
      <NotFound />
    );
  const loading =
    macorDailyState.loading || !macorDailyState.data ? <Spin /> : null;
  return error ? (
    error
  ) : loading ? (
    loading
  ) : (
    <>
      <h2>投資時機判斷</h2>
      <Row>
        <Col span={8}>
          <Line
            {...macroDataProcess(
              macorDailyState.data,
              ["恐懼貪婪指數"],
              ["恐懼貪婪指數"]
            )}
          />
        </Col>
        <Col span={8}>
          <Line
            {...macroDataProcess(
              macorDailyState.data,
              ["市場要求回報 (越高危機入市)"],
              ["市場要求回報 (越高危機入市)"]
            )}
          />
        </Col>
        <Col span={8}>
          <Line
            {...macroDataProcess(
              macorDailyState.data,
              ["投資人看空", "投資人中立", "投資人看多"],
              ["投資人看空", "投資人中立", "投資人看多"]
            )}
          />
        </Col>
      </Row>
      <h2>整體景氣趨勢</h2>
      <Row>
        <Col span={8}>
          <Line
            {...macroDataProcess(
              macorDailyState.data,
              ["S&P500指數"],
              ["S&P500指數"]
            )}
          />
        </Col>
        <Col span={8}>
          <Line
            {...macroDataProcess(
              macorDailyState.data,
              ["巴菲特指數 (美股市值/GDP)"],
              ["巴菲特指數 (美股市值/GDP)"]
            )}
          />
        </Col>
        <Col span={8}>
          <Line
            {...macroDataProcess(
              macorDailyState.data,
              ["公債利差 (越低景氣越熱)"],
              ["公債利差 (越低景氣越熱)"]
            )}
          />
        </Col>
      </Row>
      <h2>經濟衰退判斷</h2>
      <Row>
        <Col span={8}>
          <Line
            {...macroDataProcess(
              macorDailyState.data,
              ["全球衰退機率", "恐慌指數Vix"],
              ["全球衰退機率", "恐慌指數Vix"]
            )}
          />
        </Col>
        <Col span={8}>
          <Line
            {...macroDataProcess(
              macorDailyState.data,
              ["疫情指數"],
              ["疫情指數"]
            )}
          />
        </Col>
      </Row>
    </>
  );
};
export default MacroDailyCharts;
