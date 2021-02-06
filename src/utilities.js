import axios from "axios";
import { siderItem, stockListData } from "./data.js";
// Temp
import { tsvParse, csvParse } from "d3-dsv";
import { timeParse } from "d3-time-format";

export const getSider = async (type) => {
  return siderItem[type];
};

export const getStockListData = async (module, type) => {
  const finalList = [];
  const stockListData = await axios.get(
    `https://script.google.com/macros/s/AKfycbzeVZOrXXcNvGQ4PyDyjcrFX6g7vVOHGpuGujcTBhUteSab_pRZWxyZ/exec?mode=${module}&type=${type}`
  );
  Object.keys(stockListData.data).forEach((item) => {
    finalList.push(stockListData.data[item]);
  });
  return finalList;
};

export const getCompareData = async (symbol_list) => {
  return symbol_list;
};

// Temp

function parseData(parse) {
  return function (d) {
    d.date = parse(d.date);
    d.open = +d.open;
    d.high = +d.high;
    d.low = +d.low;
    d.close = +d.close;
    d.volume = +d.volume;

    return d;
  };
}

const parseDate = timeParse("%Y-%m-%d");

export function getData() {
  const promiseMSFT = fetch(
    "https://cdn.rawgit.com/rrag/react-stockcharts/master/docs/data/MSFT.tsv"
  )
    .then((response) => response.text())
    .then((data) => tsvParse(data, parseData(parseDate)));
  return promiseMSFT;
}
