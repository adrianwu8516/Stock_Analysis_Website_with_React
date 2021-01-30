import { useEffect, useState } from "react";
import { getSider } from "../utilities";

export const useSiderState = (siderType) => {
  const [siderState, setSiderState] = useState({
    loading: true,
    error: null,
    data: null
  });
  useEffect(() => {
    getSider(siderType)
      .then((data) => {
        setSiderState({
          ...siderState,
          data: data,
          loading: false
        });
      })
      .catch((error) => {
        console.log("getSiderState Fail");
        setSiderState({
          ...siderState,
          error: error,
          loading: false
        });
      });
  }, [siderType]);
  return siderState;
};
