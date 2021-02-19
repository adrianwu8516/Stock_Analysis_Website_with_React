import { useEffect, useState } from "react";

export const useCompareDataState = (symbol_list) => {
  const [compareDataState, setCompareDataState] = useState([]);
  useEffect(() => {
    asyncFetch(symbol_list);
  }, []);
  const asyncFetch = (symbol_list) => {
    fetch(
      `https://script.google.com/macros/s/AKfycbzeVZOrXXcNvGQ4PyDyjcrFX6g7vVOHGpuGujcTBhUteSab_pRZWxyZ/exec?mode=compareStock&symbol_list=${symbol_list}`
    )
      .then((response) => response.json())
      .then((json) => setCompareDataState(json))
      .catch((error) => {
        console.log("fetch CompareDataState failed", error);
      });
  };

  return compareDataState;
};
