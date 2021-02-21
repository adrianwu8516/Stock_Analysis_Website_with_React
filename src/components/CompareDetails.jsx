import { useCompareDetailState } from "../hook/compareDetail";
import { Row, Table, Skeleton } from "antd";
import NoData from "./NoData";
import NotFound from "./NotFound";
import styled from "styled-components";

const StyledSection = styled.div`
  .compareDetailTable {
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
  }
`;

const CompareDetails = ({ symbol_list }) => {
  let compareDetailState = useCompareDetailState(symbol_list);
  const error =
    compareDetailState.error === null ? null : compareDetailState.error ===
      "No Data" ? (
      <NoData />
    ) : (
      <NotFound />
    );
  const loading =
    compareDetailState.loading || !compareDetailState.data ? (
      <Skeleton active />
    ) : null;
  return error ? (
    error
  ) : loading ? (
    loading
  ) : (
    <StyledSection>
      <Row justify="center">
        <Table
          className="compareDetailTable"
          columns={compareDetailState.data.columns.valuation}
          dataSource={compareDetailState.data.aggrData.valuation}
          size="small"
          bordered
          pagination={false}
          scroll={{ x: 1000 }}
        />
      </Row>
      <Row justify="center">
        <Table
          className="compareDetailTable"
          columns={compareDetailState.data.columns.analysis}
          dataSource={compareDetailState.data.aggrData.analysis}
          size="small"
          bordered
          pagination={false}
          scroll={{ x: 1000 }}
        />
      </Row>
      <Row justify="center">
        <Table
          className="compareDetailTable"
          columns={compareDetailState.data.columns.forecast}
          dataSource={compareDetailState.data.aggrData.forecast}
          size="small"
          bordered
          pagination={false}
          scroll={{ x: 1000 }}
        />
      </Row>
    </StyledSection>
  );
};

export default CompareDetails;
