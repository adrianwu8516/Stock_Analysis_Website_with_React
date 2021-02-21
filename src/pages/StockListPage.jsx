import { Spin, Table } from "antd";
import Layout, { Content } from "antd/lib/layout/layout";
import { Link, useLocation, useParams } from "react-router-dom";
import NoData from "../components/NoData";
import NotFound from "../components/NotFound";
import SiteBreadcrumb from "../components/SiteBreadcrumb";
import SiteSider from "../components/SiteSider";
import { useStockListState } from "../hook/stockList";

const StockListPage = ({ module_type }) => {
  const location = useLocation();
  const pathList = location.pathname.split("/");
  const columns = [
    {
      title: "代號",
      dataIndex: "symbol",
      fixed: "left",
      width: 100,
      render: (symbol, row) => (
        <>
          <a href={row.url} target="_blank" rel="noopener noreferrer">
            🌐
          </a>
          {symbol}
        </>
      )
    },
    {
      title: "公司名稱",
      dataIndex: "companyName",
      fixed: "left",
      width: 150,
      render: (companyName, row) => (
        <Link
          to={`/${pathList[1]}/${pathList[2]}/${row.symbol.toLowerCase()}`}
          key={`${pathList[2]}/${row.symbol}`}
        >
          {companyName}
        </Link>
      )
    },
    {
      title: "股價",
      dataIndex: "price",
      width: 100,
      sorter: (a, b) => a.price - b.price
    },
    {
      title: "52週高點",
      dataIndex: "52weekHigh",
      width: 120,
      render: (number, row) =>
        number / row.price < 1.05 ? (
          <span style={{ backgroundColor: "green", color: "white" }}>
            {number}
          </span>
        ) : (
          <span>{number}</span>
        )
    },
    {
      title: "52週低點",
      dataIndex: "52weekLow",
      width: 120,
      render: (number, row) =>
        row.price / number < 1.1 ? (
          <span style={{ backgroundColor: "red", color: "white" }}>
            {number}
          </span>
        ) : (
          <span>{number}</span>
        )
    },
    {
      title: "漲跌",
      dataIndex: "delta",
      width: 80,
      sorter: (a, b) => a.delta - b.delta,
      render: (ratio) => <span>{Math.round(ratio * 1000) / 10}%</span>
    },
    {
      title: "市值(億)",
      dataIndex: "value",
      width: 120,
      sorter: (a, b) => a.value - b.value,
      render: (value) =>
        value < 20 * Math.pow(10, 8) ? (
          <span style={{ color: "green" }}>
            {Math.round(value / 10000000) / 10}
          </span>
        ) : value > 100 * Math.pow(10, 8) ? (
          <span style={{ color: "red" }}>
            {Math.round(value / 10000000) / 10}
          </span>
        ) : (
          <span style={{ color: "orange" }}>
            {Math.round(value / 10000000) / 10}
          </span>
        )
    },
    {
      title: "PE",
      dataIndex: "TTM",
      width: 80,
      sorter: (a, b) => a["TTM"] - b["TTM"],
      render: (pe) => <span>{Math.round(pe * 10) / 10}</span>
    },
    {
      title: "預估PE",
      dataIndex: "forwardPe",
      width: 120,
      sorter: (a, b) => a.forwardPe - b.forwardPe,
      render: (forwardPe, row) =>
        forwardPe <= 0 ? (
          <span style={{ color: "red" }}>{forwardPe}</span>
        ) : forwardPe < row.TTM ? (
          <span style={{ color: "green" }}>{forwardPe}</span>
        ) : (
          <span style={{ color: "orange" }}>{forwardPe}</span>
        )
    },
    {
      title: "PB",
      dataIndex: "pb",
      width: 80,
      sorter: (a, b) => a.pb - b.pb,
      render: (pb) => <span>{Math.round(pb * 10) / 10}</span>
    },
    {
      title: "PS",
      dataIndex: "ps",
      width: 80,
      sorter: (a, b) => a.ps - b.ps,
      render: (ps) => <span>{Math.round(ps * 10) / 10}</span>
    },
    {
      title: "分析師評價",
      dataIndex: "analysis",
      width: 250
    },
    {
      title: "關注度",
      dataIndex: "analystPopularity",
      width: 80,
      sorter: (a, b) => a.analystPopularity - b.analystPopularity
    },
    {
      title: "財務指標",
      dataIndex: "fscore",
      width: 90,
      sorter: (a, b) => a.fscore - b.fscore,
      render: (fscore) =>
        fscore <= 3 ? (
          <span style={{ color: "red" }}>{fscore}</span>
        ) : fscore >= 7 ? (
          <span style={{ color: "green" }}>{fscore}</span>
        ) : (
          <span style={{ color: "orange" }}>{fscore}</span>
        )
    },
    {
      title: "操縱指標",
      dataIndex: "mscore",
      width: 90,
      sorter: (a, b) => a.mscore - b.mscore,
      render: (mscore) =>
        mscore <= -2.22 ? (
          <span style={{ color: "green" }}>{mscore}</span>
        ) : mscore >= -1.78 ? (
          <span style={{ color: "red" }}>{mscore}</span>
        ) : (
          <span style={{ color: "orange" }}>{mscore}</span>
        )
    },
    {
      title: "破產指標",
      dataIndex: "zscore",
      width: 90,
      sorter: (a, b) => a.zscore - b.zscore,
      render: (zscore) =>
        zscore <= 1.81 ? (
          <span style={{ color: "green" }}>{zscore}</span>
        ) : zscore >= 2.99 ? (
          <span style={{ color: "red" }}>{zscore}</span>
        ) : (
          <span style={{ color: "orange" }}>{zscore}</span>
        )
    },
    {
      title: "殖利率",
      dataIndex: "yield",
      width: 100,
      sorter: (a, b) => a.yield - b.yield,
      render: (ratio) => <span>{Math.round(ratio * 1000) / 10}%</span>
    },
    {
      title: "業績增長(今/明)",
      dataIndex: "thisRevenue",
      width: 160,
      sorter: (a, b) => a.thisRevenue - b.thisRevenue,
      render: (ratio, row) =>
        ratio > 30 || row.nextRevenue > 30 ? (
          <span style={{ color: "red" }}>
            {ratio}%/{row.nextRevenue}%
          </span>
        ) : ratio < -20 || row.nextRevenue < -20 ? (
          <span style={{ color: "green" }}>
            {ratio}%/{row.nextRevenue}%
          </span>
        ) : (
          <span>
            {ratio}%/{row.nextRevenue}%
          </span>
        )
    },
    {
      title: "利潤增長(今/明)",
      dataIndex: "thisEPS",
      width: 160,
      sorter: (a, b) => a.thisEPS - b.thisEPS,
      render: (ratio, row) =>
        ratio > 50 ? (
          <span style={{ color: "red" }}>
            {ratio}%/{row.nextEPS}%
          </span>
        ) : ratio < -50 ? (
          <span style={{ color: "green" }}>
            {ratio}%/{row.nextEPS}%
          </span>
        ) : (
          <span>
            {ratio}%/{row.nextEPS}%
          </span>
        )
    },
    {
      title: "未來業績",
      dataIndex: "next5Year",
      width: 80,
      sorter: (a, b) => a.next5Year - b.next5Year,
      render: (ratio) =>
        !ratio ? (
          <span></span>
        ) : ratio > 20 ? (
          <span style={{ color: "red" }}>
            <strong>{ratio}%</strong>
          </span>
        ) : ratio < -10 ? (
          <span style={{ color: "green" }}>
            <strong>{ratio}%</strong>
          </span>
        ) : (
          <span>{ratio}%</span>
        )
    },
    {
      title: "林奇估值",
      dataIndex: "lynchvalue",
      width: 90,
      sorter: (a, b) => a.lynchvalue - b.lynchvalue,
      render: (value, row) =>
        !value ? (
          <span></span>
        ) : value >= row.price ? (
          <span style={{ color: "green" }}>
            <strong>{value}</strong>
          </span>
        ) : (
          <span>{value}</span>
        )
    },
    {
      title: "葛拉漢估值",
      dataIndex: "grahamnumber",
      width: 100,
      sorter: (a, b) => a.grahamnumber - b.grahamnumber,
      render: (value, row) =>
        !value ? (
          <span></span>
        ) : value >= row.price ? (
          <span style={{ color: "green" }}>
            <strong>{value}</strong>
          </span>
        ) : (
          <span>{value}</span>
        )
    },
    {
      title: "DCF估值",
      dataIndex: "iv_dcf",
      width: 90,
      sorter: (a, b) => a.iv_dcf - b.iv_dcf,
      render: (value, row) =>
        !value ? (
          <span></span>
        ) : value >= row.price ? (
          <span style={{ color: "green" }}>
            <strong>{value}</strong>
          </span>
        ) : (
          <span>{value}</span>
        )
    },
    {
      title: "FCF估值",
      dataIndex: "iv_dcf_share",
      width: 90,
      sorter: (a, b) => a.iv_dcf_share - b.iv_dcf_share,
      render: (value, row) =>
        !value ? (
          <span></span>
        ) : value >= row.price ? (
          <span style={{ color: "green" }}>
            <strong>{value}</strong>
          </span>
        ) : (
          <span>{value}</span>
        )
    },
    {
      title: "PS回歸估值",
      dataIndex: "medpsvalue",
      width: 100,
      sorter: (a, b) => a.medpsvalue - b.medpsvalue,
      render: (value, row) =>
        !value ? (
          <span></span>
        ) : value >= row.price ? (
          <span style={{ color: "green" }}>
            <strong>{value}</strong>
          </span>
        ) : (
          <span>{value}</span>
        )
    }
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  const { list_type } = useParams();
  const stockListState = useStockListState(module_type, list_type);
  const error =
    stockListState.error === null ? null : stockListState.error ===
      "No Data" ? (
      <NoData />
    ) : (
      <NotFound />
    );
  const loading =
    stockListState.loading || !stockListState.data ? <Spin /> : null;
  return (
    <>
      <SiteSider type={module_type} />
      <Layout style={{ padding: "0 24px 24px" }}>
        <SiteBreadcrumb />
        {error ? (
          error
        ) : loading ? (
          loading
        ) : (
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 900
            }}
          >
            <Table
              columns={columns}
              dataSource={stockListState.data}
              onChange={onChange}
              scroll={{ x: 1500 }}
              pagination={{ pageSize: 30 }}
            />
          </Content>
        )}
      </Layout>
    </>
  );
};

export default StockListPage;
