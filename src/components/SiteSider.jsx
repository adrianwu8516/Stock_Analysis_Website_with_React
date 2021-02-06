import { Layout, Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { Link } from "react-router-dom";
import { useSiderState } from "../hook/siteSider.js";
import stateCheck from "./StateCheck.jsx";
const { Sider } = Layout;

const SiteSider = ({ type }) => {
  const siderState = useSiderState(type);
  const { error, loading } = stateCheck(siderState);
  const items = siderState.data ? (
    <>
      {siderState.data.item.map((obj) => (
        <SubMenu key={obj.group_id} title={obj.group_name}>
          {obj.group_item.map((subObj) => (
            <Menu.Item key={subObj.param}>
              <Link to={`/${siderState.data.key}/${subObj.param}`}>
                {subObj.key}
              </Link>
            </Menu.Item>
          ))}
        </SubMenu>
      ))}
    </>
  ) : null;
  return (
    <>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultOpenKeys={[
            "software",
            "selected_index",
            "compare_group",
            "time_span"
          ]}
          style={{ height: "100%", borderRight: 0 }}
        >
          {error ? error : loading ? loading : items}
        </Menu>
      </Sider>
    </>
  );
};

export default SiteSider;
