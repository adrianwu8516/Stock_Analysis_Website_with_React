import React from "react";
import { Line } from "@ant-design/charts";
import { useMacorQuarterlyState } from "../hook/macroQuarterly";
import { Col, Row } from "antd/es/grid";

const macroDataProcess = (data, nameLst) => {
  let processedData = [];
  for (let no in data.period) {
    for (let itemName of nameLst) {
      let singleObj = { period: data.period[no] };
      singleObj.value = data[itemName][no];
      singleObj.category = itemName;
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
    color: ["#1979C9", "#D62A0D", "#FAA219"],
    slider: {
      start: 0.7,
      end: 1
    }
  };
};

const MacroQuarterlyCharts = () => {
  const data = useMacorQuarterlyState();
  console.log(data);
  return (
    <>
      <Row>
        <Col span={12}>
          <Line
            {...macroDataProcess(data, [
              "GDP貢獻-消費",
              "GDP貢獻-投資",
              "GDP貢獻-政府開支",
              "GDP貢獻-出口",
              "GDP貢獻-進口"
            ])}
          />
        </Col>
        <Col span={12}>
          <Line {...macroDataProcess(data, ["真實GDP", "名目GDP"])} />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Line
            {...macroDataProcess(data, ["實際出口額", "實際進口額", "淨出口"])}
          />
        </Col>
        <Col span={12}>
          <Line
            {...macroDataProcess(data, ["GDP貢獻-政府開支", "政府開支(國防)"])}
          />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Line
            {...macroDataProcess(data, [
              "私部門國內投資",
              "私部門住宅固定投資",
              "私部門非住宅固定投資"
            ])}
          />
        </Col>
        <Col span={12}>
          <Line
            {...macroDataProcess(data, [
              "GDP貢獻-消費",
              "耐久財消費",
              "非耐久財消費",
              "服務消費"
            ])}
          />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Line
            {...macroDataProcess(data, [
              "非耐久財消費(衣物)",
              "非耐久財消費(食物)",
              "非耐久財消費(汽油)"
            ])}
          />
        </Col>
        <Col span={12}>
          <Line
            {...macroDataProcess(data, [
              "耐久財消費(交通工具)",
              "耐久財消費(家庭開支)",
              "耐久財消費(休閒)"
            ])}
          />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Line
            {...macroDataProcess(data, [
              "服務消費(家務)",
              "服務消費(健康)",
              "服務消費(通勤)",
              "服務消費(休閒)",
              "服務消費(食物)",
              "服務消費(金融)"
            ])}
          />
        </Col>
        <Col span={12}>
          <Line
            {...macroDataProcess(data, [
              "固定投資",
              "非住宅固定投資",
              "住宅固定投資",
              "存貨投資"
            ])}
          />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Line
            {...macroDataProcess(data, [
              "非住宅固定投資(建築)",
              "非住宅固定投資(設備)",
              "非住宅固定投資(設備-資訊處理)",
              "非住宅固定投資(設備-工業)",
              "非住宅固定投資(設備-運輸)"
            ])}
          />
        </Col>
        <Col span={12}>
          <Line
            {...macroDataProcess(data, [
              "非住宅固定投資(智財)",
              "非住宅固定投資(智財-軟體)",
              "非住宅固定投資(智財-研發)",
              "非住宅固定投資(智財-娛樂)"
            ])}
          />
        </Col>
      </Row>
    </>
  );
};

export default MacroQuarterlyCharts;
