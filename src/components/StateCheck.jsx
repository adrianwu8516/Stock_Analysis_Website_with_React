import { Spin } from "antd";
import NoData from "./NoData";
import NotFound from "./NotFound";

const StateCheck = (state) => {
  console.log("state: ", state);
  const error =
    state.error === null ? null : state.error === "No Data" ? (
      <NoData />
    ) : (
      <NotFound />
    );
  const loading = state.loading || !state.data ? <Spin /> : null;
  console.log("loading: ", loading);
  loading ? console.log("Loading True") : console.log("Loading False");
  return { error, loading };
};

export default StateCheck;
