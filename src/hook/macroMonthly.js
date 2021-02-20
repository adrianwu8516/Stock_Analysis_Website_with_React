import { useEffect, useState } from "react";
import { getMacorMonthlyData } from "../utilities";

export const useMacorMonthlyState = () => {
  const [macorMonthlyState, setMacorMonthlyState] = useState({
    loading: true,
    error: null,
    data: null
  });
  useEffect(() => {
    getMacorMonthlyData()
      .then((res) =>
        setMacorMonthlyState({
          loading: null,
          error: null,
          data: res.data
        })
      )
      .catch((error) => {
        console.log("fetch MacorMonthlyState failed", error);
        setMacorMonthlyState({
          loading: false,
          error: error,
          data: null
        });
      });
  }, []);
  return macorMonthlyState;
};
