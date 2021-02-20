import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../image/logo1.png";
const { Header } = Layout;

const Logo = styled.div`
  background-image: url(${logo});
  float: left;
  width: 180px;
  height: 36px;
  margin: 10px 0px 0px 0px;
`;

const MainNav = () => {
  return (
    <Header className="header">
      <Logo />
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
  );
};

export default MainNav;
