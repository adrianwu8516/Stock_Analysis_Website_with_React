import { useEffect, useState } from "react";

export const useMacorQuarterlyState = () => {
  const [macorQuarterlyState, setMacorQuarterlyState] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch(
      "https://script.google.com/macros/s/AKfycbzeVZOrXXcNvGQ4PyDyjcrFX6g7vVOHGpuGujcTBhUteSab_pRZWxyZ/exec?mode=macro&type=quarterly"
    )
      .then((response) => response.json())
      .then((json) => setMacorQuarterlyState(json))
      .catch((error) => {
        console.log("fetch MacorQuarterlyState failed", error);
      });
  };
  return macorQuarterlyState;
};
