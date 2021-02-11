import React from "react";
import { getStockData } from "../utilities";
import Chart from "../components/Chart";
import { TypeChooser } from "react-stockcharts/lib/helper";
import SiteSider from "../components/SiteSider";
import SiteBreadcrumb from "../components/SiteBreadcrumb";
import { useParams } from "react-router-dom";
import { Table, Layout, Row, Col } from "antd";
import { useStockDetailState } from "../hook/stockDetail";
import { useStockFRState } from "../hook/stockFR";

class ChartComponent extends React.Component {
  componentDidMount() {
    getStockData().then((data) => {
      this.setState({ data });
    });
  }
  render() {
    if (this.state == null) {
      return <div>Loading...</div>;
    }
    return (
      <TypeChooser>
        {(type) => <Chart type={type} data={this.state.data} />}
      </TypeChooser>
    );
  }
}

const columns = [
  {
    title: "指標名稱",
    dataIndex: "title"
  },
  {
    title: "數值",
    dataIndex: "data"
  }
];

const data = [
  {
    key: "1",
    name: "John Brown",
    money: "￥300,000.00",
    address: "New York No. 1 Lake Park"
  },
  {
    key: "2",
    name: "Jim Green",
    money: "￥1,256,000.00",
    address: "London No. 1 Lake Park"
  },
  {
    key: "3",
    name: "Joe Black",
    money: "￥120,000.00",
    address: "Sidney No. 1 Lake Park"
  }
];

const StockInfoPage = () => {
  const { module_type, symbol } = useParams();
  console.log("InfoPage", symbol);
  let stockDetailState = useStockDetailState(symbol)
  let stockFRState = useStockFRState(symbol)
  return (
    <>
      <SiteSider type={module_type} />
      <Layout style={{ padding: "0 24px 24px" }}>
        <SiteBreadcrumb />
        <Row>
          <Col span={8}>
            <Table
              size="small"
              columns={columns}
              dataSource={data}
              bordered
              pagination={false}
              title={() => <b>財務指標</b>}
            />
          </Col>
          <Col span={8}>
            <Table
              size="small"
              columns={columns}
              dataSource={data}
              bordered
              pagination={false}
              title={() => <b>進階指標</b>}
            />
          </Col>
          <Col span={8}>
            <Table
              size="small"
              columns={columns}
              dataSource={data}
              bordered
              pagination={false}
              title={() => <b>EPS表現</b>}
            />
          </Col>
        </Row>
        <ChartComponent />
      </Layout>
    </>
  );
};

export default StockInfoPage;
