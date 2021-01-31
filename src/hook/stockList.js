import { useEffect, useState } from "react";
import { getStockListData } from "../utilities";

export const useStockListState = (listType) => {
  const [stockListState, setStockListState] = useState({
    loading: true,
    error: null,
    data: null
  });
  useEffect(() => {
    getStockListData(listType)
      .then((data) => {
        if (!data) {
          setStockListState({
            ...stockListState,
            error: "No Data",
            loading: false
          });
        } else {
          setStockListState({
            data: data,
            error: null,
            loading: false
          });
        }
      })
      .catch((error) => {
        console.log("setStockListData Fail");
        setStockListState({
          ...stockListState,
          error: error,
          loading: false
        });
      });
  }, [listType]);
  return stockListState;
};
