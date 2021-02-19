import { useCompareDetailState } from "../hook/compareDetail";
import { Row, Table } from "antd";

const CompareDetails = ({ symbol_list }) => {
  let compareDetailState = useCompareDetailState(symbol_list);
  console.log(compareDetailState.columns);
  // const error =
  //   compareDetailState.error === null ? null : compareDetailState.error ===
  //     "No Data" ? (
  //     <NoData />
  //   ) : (
  //     <NotFound />
  //   );
  // const loading =
  //   compareDetailState.loading || !compareDetailState.data ? <Spin /> : null;

  return (
    <>
      <Row>
        <Table
          columns={compareDetailState.columns.valuation}
          dataSource={compareDetailState.aggrData.valuation}
          size="small"
          bordered
          pagination={false}
        />
      </Row>
      <Row>
        <Table
          columns={compareDetailState.columns.analysis}
          dataSource={compareDetailState.aggrData.analysis}
          size="small"
          bordered
          pagination={false}
        />
      </Row>
      <Row>
        <Table
          columns={compareDetailState.columns.forecast}
          dataSource={compareDetailState.aggrData.forecast}
          size="small"
          bordered
          pagination={false}
        />
      </Row>
    </>
  );
};

export default CompareDetails;
