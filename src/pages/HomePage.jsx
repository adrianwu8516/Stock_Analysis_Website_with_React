import Layout, { Content } from "antd/lib/layout/layout";

const HomePage = () => {
  return (
    <>
      <Layout style={{ padding: "0 24px 24px" }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 900
          }}
        >
          <p>Home</p>
        </Content>
      </Layout>
    </>
  );
};

export default HomePage;
