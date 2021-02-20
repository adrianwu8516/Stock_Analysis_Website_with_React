import { Col, Row, Spin } from "antd";
import { useStockFRState } from "../hook/stockFR";
import NoData from "./NoData";
import NotFound from "./NotFound";
import StockFRChart from "./StockFRChart";

const StockFRChartsSection = ({ symbol }) => {
  const stockFRState = useStockFRState(symbol);
  const error =
    stockFRState.error === null ? null : stockFRState.error === "No Data" ? (
      <NoData />
    ) : (
      <NotFound />
    );
  const loading = stockFRState.loading || !stockFRState.data ? <Spin /> : null;
  return error ? (
    error
  ) : loading ? (
    loading
  ) : (
    <>
      <h2>每季財務數據</h2>
      <Row>
        <Col span={6}>
          <StockFRChart
            data={stockFRState.data}
            periodType={"periodQ"}
            typeLst={["revenueQ", "profitQ"]}
            nameLst={["每季營收", "每季利潤"]}
          />
        </Col>
        <Col span={6}>
          <StockFRChart
            data={stockFRState.data}
            periodType={"periodQ"}
            typeLst={["incomeMarginQ", "profitMarginQ"]}
            nameLst={["每季毛利率", "每季淨利率"]}
          />
        </Col>
        <Col span={6}>
          <StockFRChart
            data={stockFRState.data}
            periodType={"periodQ"}
            typeLst={["totalAssetQ", "totalDebtQ"]}
            nameLst={["每季資產", "每季負債"]}
          />
        </Col>
        <Col span={6}>
          <StockFRChart
            data={stockFRState.data}
            periodType={"periodQ"}
            typeLst={["cashFlowRatioQ"]}
            nameLst={["每季現金比例"]}
          />
        </Col>
      </Row>
      <h2>每年財務數據</h2>
      <Row>
        <Col span={8}>
          <StockFRChart
            data={stockFRState.data}
            periodType={"period"}
            typeLst={["incomeMargin", "profitMargin"]}
            nameLst={["毛利率", "淨利率"]}
          />
        </Col>
        <Col span={8}>
          <StockFRChart
            data={stockFRState.data}
            periodType={"period"}
            typeLst={["revenue", "profit"]}
            nameLst={["營收", "淨利"]}
          />
        </Col>
        <Col span={8}>
          <StockFRChart
            data={stockFRState.data}
            periodType={"period"}
            typeLst={["totalAsset", "totalDebt"]}
            nameLst={["總資產", "總負債"]}
          />
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <StockFRChart
            data={stockFRState.data}
            periodType={"period"}
            typeLst={["ebitda", "freeCash"]}
            nameLst={["息稅折舊攤銷前利潤", "自由現金流"]}
          />
        </Col>
        <Col span={8}>
          <StockFRChart
            data={stockFRState.data}
            periodType={"period"}
            typeLst={["cashFlowRatio", "cashAdaquacyRatio", "reinvestment"]}
            nameLst={["現金比例", "現金允當比例", "現金再投資比例"]}
          />
        </Col>
        <Col span={8}>
          <StockFRChart
            data={stockFRState.data}
            periodType={"period"}
            typeLst={["revenueGrowth", "profitGrowth", "assetGrowth"]}
            nameLst={["營收成長", "利潤成長", "資產成長"]}
          />
        </Col>
      </Row>
    </>
  );
};

export default StockFRChartsSection;
