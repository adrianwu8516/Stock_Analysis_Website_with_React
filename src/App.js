import React from "react";
import MainNav from "./components/MainNav";
import SiteFooter from "./components/SiteFooter";
import "antd/dist/antd.css";
import { Layout } from "antd";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import SiteBreadcrumb from "./components/SiteBreadcrumb";
import SiteSider from "./components/SiteSider";
import StockListView from "./pages/StockListPage";
import HomePage from "./pages/Home";
import CompareIndexPage from "./pages/CompareIndex";
import MacroPage from "./pages/MacroPage";
import StockInfoPage from "./pages/StockInfoPage";
import ComparePage from "./pages/ComparePage";
import NotFound from "./components/NotFound";
const { Content } = Layout;

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <MainNav />
          <Layout>
            <SiteSider type="selected" />
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
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={() => {
                      return <Redirect to="/home" />;
                    }}
                  ></Route>
                  <Route exact path="/home">
                    <HomePage />
                  </Route>
                  <Route path="/selected">
                    <StockListView />
                  </Route>
                  <Route exact path="/stocks">
                    <StockListView />
                  </Route>
                  <Route exact path="/stock/:symbol">
                    <StockInfoPage />
                  </Route>
                  <Route exact path="/compare">
                    <CompareIndexPage />
                  </Route>
                  <Route exact path="/compareCharts/:symbols">
                    <ComparePage />
                  </Route>
                  <Route exact path="/macro">
                    <MacroPage />
                  </Route>
                  <Route path="*">
                    <NotFound />
                  </Route>
                </Switch>
              </Content>
              <SiteFooter />
            </Layout>
          </Layout>
        </Layout>
      </BrowserRouter>
    </div>
  );
}
