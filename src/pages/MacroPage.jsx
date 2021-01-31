import Layout, { Content } from "antd/lib/layout/layout";
import SiteBreadcrumb from "../components/SiteBreadcrumb";
import SiteSider from "../components/SiteSider";

const MacroPage = () => {
  return (
    <>
      <SiteSider type="macro" />
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
          <p>Macro</p>
        </Content>
      </Layout>
    </>
  );
};

export default MacroPage;
