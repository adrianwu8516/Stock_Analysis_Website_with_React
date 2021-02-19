import React from "react";
import { Line } from "@ant-design/charts";
import { useMacorMonthlyState } from "../hook/macroMonthly";
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

const MacroMonthlyCharts = () => {
  const data = useMacorMonthlyState();
  console.log(data);
  return (
    <>
      <Row>
        <Col span={12}>
          <Line {...macroDataProcess(data, ["核心CPI"])} />
        </Col>
        <Col span={12}>
          <Line
            {...macroDataProcess(data, ["5週以下短期失業", "27週以上長期失業"])}
          />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Line
            {...macroDataProcess(data, [
              "個人消費支出",
              "個人可支配所得",
              "零售/食物/服務銷售"
            ])}
          />
        </Col>
        <Col span={12}>
          <Line
            {...macroDataProcess(data, [
              "耐久財訂單",
              "個人耐久財",
              "商業庫存總數"
            ])}
          />
        </Col>
      </Row>
    </>
  );
};

export default MacroMonthlyCharts;
