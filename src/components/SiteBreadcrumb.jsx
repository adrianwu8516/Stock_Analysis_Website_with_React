import { Breadcrumb } from "antd";
import { useLocation } from "react-router-dom";

const SiteBreadcrumb = () => {
  const location = useLocation();
  console.log(location.pathname.split("/"));
  let breadcrumbList = [];
  switch (location.pathname.split("/")[1]) {
    case "stocks":
      breadcrumbList.push("股票總覽");
      break;
    case "selected":
      breadcrumbList.push("指標選股");
      break;
    case "stock":
      breadcrumbList.push("個股數據");
      break;
    case "compare":
      breadcrumbList.push("概念股比較");
      break;
    case "compareCharts":
      breadcrumbList.push("概念股比較");
      break;
    case "macro":
      breadcrumbList.push("總經數據");
      break;
    default:
      break;
  }
  if (location.pathname.split("/")[2])
    breadcrumbList.push(location.pathname.split("/")[2]);
  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      <Breadcrumb.Item>{breadcrumbList[0]}</Breadcrumb.Item>
      <Breadcrumb.Item>{breadcrumbList[1]}</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default SiteBreadcrumb;
