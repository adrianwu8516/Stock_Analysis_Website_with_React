import { Layout, Menu } from "antd";
import logoImage from "../image/temp_logo.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

const { Header } = Layout;

const StyledSection = styled.div`
  .logo {
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3);
  }
`;

const MainNav = () => {
  return (
    <StyledSection>
      <Header className="header">
        <div className="logo"></div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="selected">
            <Link to={`/selected`}>指標選股</Link>
          </Menu.Item>
          <Menu.Item key="stocks">
            <Link to={`/stocks`}>股票總覽</Link>
          </Menu.Item>
          <Menu.Item key="compare">
            <Link to={`/compare`}>概念股比較</Link>
          </Menu.Item>
          <Menu.Item key="macro">
            <Link to={`/macro`}>總經比較</Link>
          </Menu.Item>
          <Menu.Item key="home">
            <Link to={`/home`}>專案介紹</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </StyledSection>
  );
};

export default MainNav;
