import Layout, { Content } from "antd/lib/layout/layout";
import { useParams } from "react-router-dom";
import CompareStockCharts from "../components/CompareStockCharts";
import CompareDetails from "../components/CompareDetails";
import SiteBreadcrumb from "../components/SiteBreadcrumb";
import SiteSider from "../components/SiteSider";
import { Col, Row } from "antd";
import { comparePairIndex } from "../data";

const ComparePage = () => {
  const { symbols } = useParams();
  const symbol_list = comparePairIndex[symbols]
    ? comparePairIndex[symbols]
    : symbols;
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
          <Row justify="center">
            <Col span={18}>
              <CompareStockCharts symbol_list={symbol_list} />
            </Col>
          </Row>
          <Row justify="center">
            <Col span={18}>
              <CompareDetails symbol_list={symbol_list} />
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default ComparePage;
