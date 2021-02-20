import { useEffect, useState } from "react";
import { getMacorQuarterlyData } from "../utilities";

export const useMacorQuarterlyState = () => {
  const [macorQuarterlyState, setMacorQuarterlyState] = useState({
    loading: true,
    error: null,
    data: null
  });
  useEffect(() => {
    getMacorQuarterlyData()
      .then((res) =>
        setMacorQuarterlyState({
          loading: null,
          error: null,
          data: res.data
        })
      )
      .catch((error) => {
        console.log("fetch MacorQuarterlyState failed", error);
        setMacorQuarterlyState({
          loading: false,
          error: error,
          data: null
        });
      });
  }, []);
  return macorQuarterlyState;
};
