import { useEffect, useState } from "react";
import { getMacorDailyData } from "../utilities";

export const useMacorDailyState = () => {
  const [macorDailyState, setMacorDailyState] = useState({
    loading: true,
    error: null,
    data: null
  });
  useEffect(() => {
    getMacorDailyData()
      .then((res) =>
        setMacorDailyState({
          loading: null,
          error: null,
          data: res.data
        })
      )
      .catch((error) => {
        console.log("fetch MacorDailyState failed", error);
        setMacorDailyState({
          loading: false,
          error: error,
          data: null
        });
      });
  }, []);
  return macorDailyState;
};
