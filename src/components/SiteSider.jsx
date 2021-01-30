import { Layout, Menu, Skeleton } from "antd";
import { Link } from "react-router-dom";
import { useSiderState } from "../hook/siteSider.js";
import NotFound from "./NotFound.jsx";
const { Sider } = Layout;
const SiteSider = ({ type }) => {
  const siderState = useSiderState(type);
  const siderDetails = siderState.data;
  if (siderState.error) {
    return <NotFound />;
  }
  if (siderState.loading || !siderState.data) {
    return <Skeleton />;
  }

  return (
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
            <Link to={`/selected/${obj.param}`}>{obj.key}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default SiteSider;
