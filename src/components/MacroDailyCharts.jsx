import React from "react";
import { Line } from "@ant-design/charts";
import { useMacorDailyState } from "../hook/macroDaily";
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

const MacroDailyCharts = () => {
  const data = useMacorDailyState();
  return (
    <>
      <Row>
        <Col span={8}>
          <Line {...macroDataProcess(data, ["S&P500指數"])} />
        </Col>
        <Col span={8}>
          <Line {...macroDataProcess(data, ["恐懼貪婪指數"])} />
        </Col>
        <Col span={8}>
          <Line {...macroDataProcess(data, ["全球衰退機率", "恐慌指數Vix"])} />
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <Line
            {...macroDataProcess(data, [
              "投資人看空",
              "投資人中立",
              "投資人看多"
            ])}
          />
        </Col>
        <Col span={8}>
          <Line {...macroDataProcess(data, ["巴菲特指數 (美股市值/GDP)"])} />
        </Col>
        <Col span={8}>
          <Line {...macroDataProcess(data, ["公債利差 (越低景氣越熱)"])} />
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <Line {...macroDataProcess(data, ["市場要求回報 (越高危機入市)"])} />
        </Col>
        <Col span={8}>
          <Line {...macroDataProcess(data, ["疫情指數"])} />
        </Col>
      </Row>
    </>
  );
};
export default MacroDailyCharts;
