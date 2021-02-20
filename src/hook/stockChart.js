import { useEffect, useState } from "react";
import { getStockChartData } from "../utilities";

export const useStockChartState = (symbol) => {
  const [stockChartState, setStockChartState] = useState({
    loading: true,
    error: null,
    data: null
  });
  useEffect(() => {
    getStockChartData(symbol)
      .then((res) => {
        if (!res) {
          setStockChartState({
            ...stockChartState,
            error: "No Data",
            loading: false
          });
        } else {
          setStockChartState({
            data: res,
            error: null,
            loading: false
          });
        }
      })
      .catch((error) => {
        console.log("setStockChartData Fail: ", error);
        setStockChartState({
          ...stockChartState,
          error: error,
          loading: false
        });
      });
  }, [symbol]);
  return stockChartState;
};
