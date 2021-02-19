import { Col, Row, Table, Spin } from "antd";
import { useStockDetailState } from "../hook/stockDetail";
import NoData from "./NoData";
import NotFound from "./NotFound";

const StockDetailInfoTable = ({ symbol }) => {
  let stockDetailState = useStockDetailState(symbol);
  const error =
    stockDetailState.error === null ? null : stockDetailState.error ===
      "No Data" ? (
      <NoData />
    ) : (
      <NotFound />
    );
  const loading =
    stockDetailState.loading || !stockDetailState.data ? <Spin /> : null;
  const stockDetailTables = stockDetailState.data ? (
    <Row>
      <Col span={8}>
        <Table
          size="small"
          columns={[
            {
              title: "估值指標",
              dataIndex: "title"
            },
            {
              title: "數值",
              dataIndex: "data"
            }
          ]}
          dataSource={stockDetailState.data.valuation}
          bordered
          pagination={false}
        />
      </Col>
      <Col span={8}>
        <Table
          size="small"
          columns={[
            {
              title: "財報指標",
              dataIndex: "title"
            },
            {
              title: "數值",
              dataIndex: "data"
            }
          ]}
          dataSource={stockDetailState.data.analysis}
          bordered
          pagination={false}
        />
      </Col>
      <Col span={8}>
        <Table
          size="small"
          columns={[
            {
              title: "預估表現",
              dataIndex: "title"
            },
            {
              title: "數值",
              dataIndex: "data"
            }
          ]}
          dataSource={stockDetailState.data.forecast}
          bordered
          pagination={false}
        />
      </Col>
    </Row>
  ) : null;
  return error ? error : loading ? loading : stockDetailTables;
};

export default StockDetailInfoTable;
