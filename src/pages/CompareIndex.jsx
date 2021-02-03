import Layout, { Content } from "antd/lib/layout/layout";
import SiteBreadcrumb from "../components/SiteBreadcrumb";
import SiteSider from "../components/SiteSider";

const CompareIndexPage = () => {
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
          <p>Compare Index</p>
        </Content>
      </Layout>
    </>
  );
};

export default CompareIndexPage;
