import { useEffect, useState } from "react";

export const useCompareFRState = (symbol_list) => {
  const [compareFRState, setCompareFRState] = useState([]);
  useEffect(() => {
    asyncFetch(symbol_list);
  }, []);
  const asyncFetch = (symbol_list) => {
    fetch(
      `https://script.google.com/macros/s/AKfycbzeVZOrXXcNvGQ4PyDyjcrFX6g7vVOHGpuGujcTBhUteSab_pRZWxyZ/exec?mode=compareFR&symbol_list=${symbol_list}`
    )
      .then((response) => response.json())
      .then((json) => setCompareFRState(json))
      .catch((error) => {
        console.log("fetch CompareFRState failed", error);
      });
  };

  return compareFRState;
};
