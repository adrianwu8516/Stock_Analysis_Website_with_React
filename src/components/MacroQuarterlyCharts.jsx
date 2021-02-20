import React from "react";
import { Line } from "@ant-design/charts";
import { useMacorQuarterlyState } from "../hook/macroQuarterly";
import { Col, Row } from "antd/es/grid";
import NoData from "./NoData";
import NotFound from "./NotFound";
import { Spin } from "antd";

const MacroQuarterlyCharts = ({ macroDataProcess }) => {
  const macorQuarterlyState = useMacorQuarterlyState();
  const error =
    macorQuarterlyState.error === null ? null : macorQuarterlyState.error ===
      "No Data" ? (
      <NoData />
    ) : (
      <NotFound />
    );
  const loading =
    macorQuarterlyState.loading || !macorQuarterlyState.data ? <Spin /> : null;
  return error ? (
    error
  ) : loading ? (
    loading
  ) : (
    <>
      <h2>美國整體經濟</h2>
      <Row>
        <Col span={12}>
          <Line
            {...macroDataProcess(
              macorQuarterlyState.data,
              ["真實GDP", "名目GDP"],
              ["真實GDP", "名目GDP"]
            )}
          />
        </Col>
        <Col span={12}>
          <Line
            {...macroDataProcess(
              macorQuarterlyState.data,
              [
                "GDP貢獻-消費",
                "GDP貢獻-投資",
                "GDP貢獻-政府開支",
                "GDP貢獻-出口",
                "GDP貢獻-進口"
              ],
              ["消費", "投資", "政府開支", "出口", "進口"]
            )}
          />
        </Col>
      </Row>
      <h2>進出口/政府消費分析</h2>
      <Row>
        <Col span={12}>
          <Line
            {...macroDataProcess(
              macorQuarterlyState.data,
              ["實際出口額", "實際進口額", "淨出口"],
              ["出口", "進口", "淨出口"]
            )}
          />
        </Col>
        <Col span={12}>
          <Line
            {...macroDataProcess(
              macorQuarterlyState.data,
              ["GDP貢獻-政府開支", "政府開支(國防)"],
              ["政府總開支", "國防開支"]
            )}
          />
        </Col>
      </Row>
      <h2>民間消費分析</h2>
      <Row>
        <Col span={12}>
          <Line
            {...macroDataProcess(
              macorQuarterlyState.data,
              ["耐久財消費", "非耐久財消費", "服務消費"],
              ["耐久財消費", "非耐久財消費", "服務消費"]
            )}
          />
        </Col>
        <Col span={12}>
          <Line
            {...macroDataProcess(
              macorQuarterlyState.data,
              ["私部門國內投資", "私部門住宅固定投資", "私部門非住宅固定投資"],
              ["國內投資", "國內住宅投資", "國內非住宅投資"]
            )}
          />
        </Col>
      </Row>
      <h2>民間消費分析，細項(非耐久財/耐久財/服務消費)</h2>
      <Row>
        <Col span={8}>
          <Line
            {...macroDataProcess(
              macorQuarterlyState.data,
              [
                "非耐久財消費(衣物)",
                "非耐久財消費(食物)",
                "非耐久財消費(汽油)"
              ],
              ["衣物", "食物", "汽油"]
            )}
          />
        </Col>
        <Col span={8}>
          <Line
            {...macroDataProcess(
              macorQuarterlyState.data,
              [
                "耐久財消費(交通工具)",
                "耐久財消費(家庭開支)",
                "耐久財消費(休閒)"
              ],
              ["交通工具", "家庭重大開支", "休閒"]
            )}
          />
        </Col>
        <Col span={8}>
          <Line
            {...macroDataProcess(
              macorQuarterlyState.data,
              [
                "服務消費(家務)",
                "服務消費(健康)",
                "服務消費(通勤)",
                "服務消費(休閒)",
                "服務消費(食物)",
                "服務消費(金融)"
              ],
              [
                "家庭服務",
                "健康服務",
                "通勤服務",
                "休閒服務",
                "餐飲服務",
                "金融服務"
              ]
            )}
          />
        </Col>
      </Row>
      <h2>民間投資分析</h2>
      <Row>
        <Col span={12}>
          <Line
            {...macroDataProcess(
              macorQuarterlyState.data,
              ["非住宅固定投資", "住宅固定投資", "存貨投資"],
              ["非住宅投資", "住宅投資", "存貨"]
            )}
          />
        </Col>
        <Col span={12}>
          <Line
            {...macroDataProcess(
              macorQuarterlyState.data,
              [
                "非住宅固定投資(建築)",
                "非住宅固定投資(設備)",
                "非住宅固定投資(智財)"
              ],
              ["建築", "設備", "智慧財產"]
            )}
          />
        </Col>
      </Row>
      <h2>民間投資分析，細項(設備/智財)</h2>
      <Row>
        <Col span={12}>
          <Line
            {...macroDataProcess(
              macorQuarterlyState.data,
              [
                "非住宅固定投資(設備-資訊處理)",
                "非住宅固定投資(設備-工業)",
                "非住宅固定投資(設備-運輸)"
              ],
              ["資訊處理", "工業", "運輸"]
            )}
          />
        </Col>
        <Col span={12}>
          <Line
            {...macroDataProcess(
              macorQuarterlyState.data,
              [
                "非住宅固定投資(智財-軟體)",
                "非住宅固定投資(智財-研發)",
                "非住宅固定投資(智財-娛樂)"
              ],
              ["軟體", "研發", "娛樂"]
            )}
          />
        </Col>
      </Row>
    </>
  );
};

export default MacroQuarterlyCharts;
