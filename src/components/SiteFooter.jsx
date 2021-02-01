import { Layout } from "antd";
import styled from "styled-components";
const { Footer } = Layout;

const SiteFooter = () => {
  return (
    <Footer className="footer" style={{ textAlign: "center" }}>
      這是 Adrian 的 Side Project，祝福大家都可以在股票市場得到穩健獲利！
    </Footer>
  );
};

export default SiteFooter;
