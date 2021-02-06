import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router-dom";

const SiteBreadcrumb = () => {
  const location = useLocation();
  const urlSplitList = location.pathname.split("/");

  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      <Breadcrumb.Item>
        <Link to={`/${urlSplitList[1]}`}>{urlSplitList[1].toUpperCase()}</Link>
      </Breadcrumb.Item>
      {urlSplitList[2] ? (
        <Breadcrumb.Item>
          <Link to={`/${urlSplitList[1]}/${urlSplitList[2]}`}>
            {urlSplitList[2].toUpperCase()}
          </Link>
        </Breadcrumb.Item>
      ) : null}
      {urlSplitList[3] ? (
        <Breadcrumb.Item>
          <Link
            to={`/${urlSplitList[1]}/${urlSplitList[2]}/${urlSplitList[3]}`}
          >
            {urlSplitList[3]}
          </Link>
        </Breadcrumb.Item>
      ) : null}
    </Breadcrumb>
  );
};

export default SiteBreadcrumb;
