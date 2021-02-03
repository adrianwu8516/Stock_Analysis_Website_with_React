import Layout, { Content } from "antd/lib/layout/layout";
import { useParams } from "react-router-dom";
import SiteBreadcrumb from "../components/SiteBreadcrumb";
import SiteSider from "../components/SiteSider";
import stateCheck from "../components/StateCheck";
import { useCompareDataState } from "../hook/compareData";

const ComparePage = ({ type }) => {
  const { symbols } = useParams();
  const compareDataState = useCompareDataState(symbols);
  const { error, loading } = stateCheck(compareDataState);
  return (
    <>
      <SiteSider type={type} />
      <Layout style={{ padding: "0 24px 24px" }}>
        <SiteBreadcrumb />
        {error ? (
          error
        ) : loading ? (
          loading
        ) : (
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 900
            }}
          >
            <p>Compare Page</p>
          </Content>
        )}
      </Layout>
    </>
  );
};

export default ComparePage;
