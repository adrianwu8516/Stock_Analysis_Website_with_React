import { Row } from "antd";
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
          <Row justify="center">
            <h2>專案目的</h2>
          </Row>
          <Row justify="center">
            <h2 style={{ color: "#5e9ca0" }}>
              提供一個專業的股票資料庫，
              <br />
              用戶可以一目瞭然地看到大量股票數據， <br />
              以及進行數據比較!
            </h2>
            <ul>
              <li>
                <h4>主動 Highlight 特殊指標，例如 EPS 優於預期等等</h4>
              </li>
              <li>
                <h4>詳細且圖示化的財報數據，資訊快速獲取</h4>
              </li>
              <li>
                <h4>方便快速比較各種類股之間的估值，股價差異</h4>
              </li>
            </ul>
          </Row>
          <Row justify="center">
            <h2>為什麼這麼慢？</h2>
          </Row>
          <Row justify="center">
            <img src="https://i.imgur.com/DRENNcL.png" />
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default HomePage;
