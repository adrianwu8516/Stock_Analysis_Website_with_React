import { useEffect, useState } from "react";
import { getCompareStockData } from "../utilities";

export const useCompareStockState = (symbol_list) => {
  const [compareStockState, setCompareStockState] = useState({
    loading: true,
    error: null,
    data: null
  });
  useEffect(() => {
    getCompareStockData(symbol_list)
      .then((res) =>
        setCompareStockState({
          loading: null,
          error: null,
          data: res.data
        })
      )
      .catch((error) => {
        console.log("fetch compareStockState failed", error);
        setCompareStockState({
          loading: false,
          error: error,
          data: null
        });
      });
  }, [symbol_list]);
  return compareStockState;
};
