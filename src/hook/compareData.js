import { useEffect, useState } from "react";
import { getCompareData } from "../utilities";

export const useCompareDataState = (compare_list) => {
  const [compareDataState, setCompareDataState] = useState({
    loading: true,
    error: null,
    data: null
  });
  useEffect(() => {
    getCompareData(compare_list)
      .then((data) => {
        if (!data) {
          setCompareDataState({
            ...compareDataState,
            error: "No Data",
            loading: false
          });
        } else {
          setCompareDataState({
            data: data,
            error: null,
            loading: false
          });
        }
      })
      .catch((error) => {
        console.log("setCompareDataState Fail");
        setCompareDataState({
          ...compareDataState,
          error: error,
          loading: false
        });
      });
  }, [compare_list]);
  return compareDataState;
};
