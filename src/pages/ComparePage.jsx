import Layout, { Content } from "antd/lib/layout/layout";
import { useParams } from "react-router-dom";
import CompareCharts from "../components/CompareCharts";
import CompareDetails from "../components/CompareDetails";
import SiteBreadcrumb from "../components/SiteBreadcrumb";
import SiteSider from "../components/SiteSider";

const ComparePage = () => {
  const { symbols } = useParams();
  let symbol_list = [];
  // change to case when
  if (symbols === "gaming") {
    symbol_list = "aapl,msft,jd,pdd";
  }
  console.log(symbol_list);
  return (
    <>
      <SiteSider type="compare" />
      <Layout style={{ padding: "0 24px 24px" }}>
        <SiteBreadcrumb />
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 900
          }}
        >
          <CompareDetails symbol_list={symbol_list} />
          {/* <CompareCharts symbol_list={symbol_list} /> */}
        </Content>
      </Layout>
    </>
  );
};

export default ComparePage;
