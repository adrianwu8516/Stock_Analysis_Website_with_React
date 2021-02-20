import React from "react";
import Chart from "../components/Chart";
import { TypeChooser } from "react-stockcharts/lib/helper";
import SiteSider from "../components/SiteSider";
import SiteBreadcrumb from "../components/SiteBreadcrumb";
import { useParams } from "react-router-dom";
import { Layout } from "antd";
import StockDetailInfoTable from "../components/StockDetailInfoTableSection";
import StockFRChartsSection from "../components/StockFRChartsSection";
import { useStockChartState } from "../hook/stockChart";

const StockInfoPage = () => {
  const { module_type, symbol } = useParams();
  const { data, loading, error } = useStockChartState(symbol);
  return (
    <>
      <SiteSider type={module_type} />
      <Layout style={{ padding: "0 24px 24px" }}>
        <SiteBreadcrumb />
        <h2>{symbol.toUpperCase()} 詳細財務數據</h2>
        <StockDetailInfoTable symbol={symbol} />
        <StockFRChartsSection symbol={symbol} />
        <h2>{symbol.toUpperCase()} 股價走勢</h2>
        {error ? (
          error
        ) : loading ? (
          loading
        ) : (
          <TypeChooser>
            {(type) => <Chart type={type} data={data} />}
          </TypeChooser>
        )}
      </Layout>
    </>
  );
};

export default StockInfoPage;
