import React from "react";
import { getStockData } from "../utilities";
import Chart from "../components/Chart";
import { TypeChooser } from "react-stockcharts/lib/helper";
import SiteSider from "../components/SiteSider";
import SiteBreadcrumb from "../components/SiteBreadcrumb";
import { useParams } from "react-router-dom";
import { Layout } from "antd";
import StockDetailInfoTable from "../components/StockDetailInfoTableSection";
import StockFRChartsSection from "../components/StockFRChartsSection";

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

const StockInfoPage = () => {
  const { module_type, symbol } = useParams();
  console.log("InfoPage", symbol);
  return (
    <>
      <SiteSider type={module_type} />
      <Layout style={{ padding: "0 24px 24px" }}>
        <SiteBreadcrumb />
        <StockDetailInfoTable symbol={symbol} />
        {/* <StockFRChartsSection symbol={symbol} /> */}
        <ChartComponent />
      </Layout>
    </>
  );
};

export default StockInfoPage;
