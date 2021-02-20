import { useEffect, useState } from "react";
import { getStockDetailData } from "../utilities";

export const useStockDetailState = (symbol) => {
  const [stockDetailState, setStockDetailState] = useState({
    loading: true,
    error: null,
    data: null
  });
  useEffect(() => {
    getStockDetailData(symbol)
      .then((res) => {
        if (!res) {
          setStockDetailState({
            ...stockDetailState,
            error: "No Data",
            loading: false
          });
        } else {
          setStockDetailState({
            data: res.data,
            error: null,
            loading: false
          });
        }
      })
      .catch((error) => {
        console.log("setStockDetailData Fail: ", error);
        setStockDetailState({
          ...stockDetailState,
          error: error,
          loading: false
        });
      });
  }, [symbol]);
  return stockDetailState;
};
