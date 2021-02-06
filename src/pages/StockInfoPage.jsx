// Temp
import React from "react";
import { getData } from "../utilities";
import Chart from "../components/Chart";
import { TypeChooser } from "react-stockcharts/lib/helper";
import SiteSider from "../components/SiteSider";
import Layout from "antd/lib/layout/layout";
import SiteBreadcrumb from "../components/SiteBreadcrumb";
import { useParams } from "react-router-dom";

class ChartComponent extends React.Component {
  componentDidMount() {
    getData().then((data) => {
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
  const { module_type } = useParams();
  console.log("InfoPage", module_type);
  return (
    <>
      <SiteSider type={module_type} />
      <Layout style={{ padding: "0 24px 24px" }}>
        <SiteBreadcrumb />
        <ChartComponent />
      </Layout>
    </>
  );
};

export default StockInfoPage;
