import { Layout, Menu, Skeleton } from "antd";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import { useSiderState } from "../hook/siteSider.js";
import StockInfoPage from "../pages/StockInfoPage.jsx";
import NotFound from "./NotFound.jsx";
const { Sider } = Layout;

const SiteSider = ({ type }) => {
  const siderState = useSiderState(type);
  const siderDetails = siderState.data;
  //let { path, url } = useRouteMatch();
  if (siderState.error) {
    return <NotFound />;
  }
  if (siderState.loading || !siderState.data) {
    return <Skeleton />;
  }
  return (
    <>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["1"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          <Menu.Item key="title" disabled={true}>
            <b>{siderDetails.group_name}</b>
          </Menu.Item>
          {siderDetails.item.map((obj) => (
            <Menu.Item key={obj.param}>
              <Link to={`/${siderDetails.key}/${obj.param}`}>{obj.key}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      {/* <Switch>
        <Route path={`/${siderDetails.key}/:list_type`}>
          <StockInfoPage />
        </Route>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch> */}
    </>
  );
};

export default SiteSider;
