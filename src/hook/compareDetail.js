import { useEffect, useState } from "react";
import { getCompareDetailData } from "../utilities";

export const useCompareDetailState = (symbol_list) => {
  const [compareDetailState, setCompareDetailState] = useState({
    loading: true,
    error: null,
    data: null
  });
  useEffect(() => {
    setCompareDetailState({
      loading: true,
      error: null,
      data: null
    });
    getCompareDetailData(symbol_list)
      .then((res) =>
        setCompareDetailState({
          loading: null,
          error: null,
          data: res.data
        })
      )
      .catch((error) => {
        console.log("fetch compareDetailState failed", error);
        setCompareDetailState({
          loading: false,
          error: error,
          data: null
        });
      });
  }, [symbol_list]);
  return compareDetailState;
};
