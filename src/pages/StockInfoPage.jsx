import React from "react";
import Chart from "../components/Chart";
import { TypeChooser } from "react-stockcharts/lib/helper";
import SiteSider from "../components/SiteSider";
import SiteBreadcrumb from "../components/SiteBreadcrumb";
import { useParams } from "react-router-dom";
import { Layout, Tooltip } from "antd";
import StockDetailInfoTable from "../components/StockDetailInfoTableSection";
import StockFRChartsSection from "../components/StockFRChartsSection";
import { useStockChartState } from "../hook/stockChart";
import yahoo_logo from "../image/yahoo-finance-icon-128.png";
import guru_logo from "../image/gurufocus_icon.jpg";
import webull_logo from "../image/webull_icon.jpg";
import snowball_logo from "../image/snowball_icon.jpeg";
import seeking_alpha_logo from "../image/seeking_alpha_icon.png";

const StockInfoPage = () => {
  const { module_type, symbol } = useParams();
  const { data, loading, error } = useStockChartState(symbol);
  return (
    <>
      <SiteSider type={module_type} />
      <Layout style={{ padding: "0 24px 24px" }}>
        <SiteBreadcrumb />
        <h2>
          {symbol.toUpperCase()} 詳細財務數據{" "}
          <Tooltip title="前往 GuruFocus 網站">
            <a
              href={
                "https://www.gurufocus.com/stock/" +
                symbol +
                "/summary?search=" +
                symbol
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={guru_logo} width={20} />{" "}
            </a>
          </Tooltip>
          <Tooltip title="前往 Yahoo Finance 網站">
            <a
              href={
                "https://finance.yahoo.com/quote/" +
                symbol +
                "/analysis?p=" +
                symbol
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={yahoo_logo} width={20} />{" "}
            </a>
          </Tooltip>
          <Tooltip title="前往 Webull 網站">
            <a
              href={"https://www.webull.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={webull_logo} width={22} />{" "}
            </a>
          </Tooltip>
          <Tooltip title="前往雪球討論區">
            <a
              href={"https://xueqiu.com/S/" + symbol}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={snowball_logo} width={20} />{" "}
            </a>
          </Tooltip>
          <Tooltip title="前往 Seeking Alpha 討論區">
            <a
              href={"https://seekingalpha.com/symbol/" + symbol}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={seeking_alpha_logo} width={20} />{" "}
            </a>
          </Tooltip>
        </h2>
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
