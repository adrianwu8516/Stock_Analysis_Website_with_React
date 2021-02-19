import Layout, { Content } from "antd/lib/layout/layout";
import { useParams } from "react-router-dom";
import MacroDailyCharts from "../components/MacroDailyCharts";
import MacroMonthlyCharts from "../components/MacroMonthlyCharts";
import MacroQuarterlyCharts from "../components/MacroQuarterlyCharts";
import SiteBreadcrumb from "../components/SiteBreadcrumb";
import SiteSider from "../components/SiteSider";

const MacroPage = () => {
  const { type } = useParams();
  return (
    <>
      <SiteSider type="macro" />
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
          {type == "daily" ? (
            <MacroDailyCharts />
          ) : type == "monthly" ? (
            <MacroMonthlyCharts />
          ) : type == "quarterly" ? (
            <MacroQuarterlyCharts />
          ) : null}
        </Content>
      </Layout>
    </>
  );
};
export default MacroPage;
