import { Skeleton } from "antd";
import NoData from "./NoData";
import NotFound from "./NotFound";

const stateCheck = (state) => {
  const error =
    state.error === null ? null : state.error === "No Data" ? (
      <NoData />
    ) : (
      <NotFound />
    );
  const loading = state.loading || !state.data ? <Skeleton /> : null;
  return { error, loading };
};

export default stateCheck;
