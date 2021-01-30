import { Layout } from "antd";
const { Footer } = Layout;
import styled from "styled-components";

const StyledSection = styled.div`
  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
  }
`;

const SiteFooter = () => {
  return (
    <StyledSection>
      <Footer className="footer" style={{ textAlign: "center" }}>
        這是 Adrian 的 Side Project，祝福大家都可以在股票市場得到穩健獲利！
      </Footer>
    </StyledSection>
  );
};

export default SiteFooter;
