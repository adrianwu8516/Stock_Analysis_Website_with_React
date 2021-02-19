import { useEffect, useState } from "react";

export const useMacorDailyState = () => {
  const [macorDailyState, setMacorDailyState] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch(
      "https://script.google.com/macros/s/AKfycbzeVZOrXXcNvGQ4PyDyjcrFX6g7vVOHGpuGujcTBhUteSab_pRZWxyZ/exec?mode=macro&type=daily"
    )
      .then((response) => response.json())
      .then((json) => setMacorDailyState(json))
      .catch((error) => {
        console.log("fetch MacorDailyState failed", error);
      });
  };
  return macorDailyState;
};
