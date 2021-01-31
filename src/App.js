import React from "react";
import MainNav from "./components/MainNav";
import SiteFooter from "./components/SiteFooter";
import "antd/dist/antd.css";
import { Layout } from "antd";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import StockListPage from "./pages/StockListPage";
import HomePage from "./pages/HomePage";
import CompareIndexPage from "./pages/CompareIndex";
import MacroPage from "./pages/MacroPage";
import StockInfoPage from "./pages/StockInfoPage";
import ComparePage from "./pages/ComparePage";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <MainNav />
          <Layout>
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
              <Route
                exact
                path="/selected"
                render={() => {
                  return <Redirect to="/selected/beat_analysis" />;
                }}
              ></Route>
              <Route path={`/selected/:list_type`}>
                <StockListPage type="selected" />
              </Route>
              <Route
                exact
                path="/stocks"
                render={() => {
                  return <Redirect to="/stocks/energy" />;
                }}
              ></Route>
              <Route exact path="/stocks/:list_type">
                <StockListPage type="stock_type" />
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
              <Route
                exact
                path="/macro"
                render={() => {
                  return <Redirect to="/macro/daily" />;
                }}
              ></Route>
              <Route exact path="/macro/:type">
                <MacroPage />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Layout>
          <SiteFooter />
        </Layout>
      </BrowserRouter>
    </div>
  );
}
