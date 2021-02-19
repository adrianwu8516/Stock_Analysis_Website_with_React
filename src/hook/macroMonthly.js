import { useEffect, useState } from "react";

export const useMacorMonthlyState = () => {
  const [macorMonthlyState, setMacorMonthlyState] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch(
      "https://script.google.com/macros/s/AKfycbzeVZOrXXcNvGQ4PyDyjcrFX6g7vVOHGpuGujcTBhUteSab_pRZWxyZ/exec?mode=macro&type=monthly"
    )
      .then((response) => response.json())
      .then((json) => setMacorMonthlyState(json))
      .catch((error) => {
        console.log("fetch MacorMonthlyState failed", error);
      });
  };
  return macorMonthlyState;
};
