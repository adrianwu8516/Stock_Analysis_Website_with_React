import { useEffect, useState } from "react";

export const useCompareDetailState = (symbol_list) => {
  const [compareDetailState, setCompareDetailState] = useState([]);
  useEffect(() => {
    asyncFetch(symbol_list);
  }, []);
  const asyncFetch = (symbol_list) => {
    fetch(
      `https://script.google.com/macros/s/AKfycbzeVZOrXXcNvGQ4PyDyjcrFX6g7vVOHGpuGujcTBhUteSab_pRZWxyZ/exec?mode=compareDetail&symbol_list=${symbol_list}`
    )
      .then((response) => response.json())
      .then((json) => setCompareDetailState(json))
      .catch((error) => {
        console.log("fetch CompareDetailState failed", error);
      });
  };

  return compareDetailState;
};
