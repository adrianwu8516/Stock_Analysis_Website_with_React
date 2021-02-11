import axios from "axios";
import { siderItem } from "./data.js";

const domain =
  "https://script.google.com/macros/s/AKfycbzeVZOrXXcNvGQ4PyDyjcrFX6g7vVOHGpuGujcTBhUteSab_pRZWxyZ/exec";

const parseTime = (objList) => {
  const value = objList.map((obj) => ({
    ...obj,
    date: new Date(Date.parse(obj.date))
  }));
  return value;
};

export const getSider = async (type) => {
  return siderItem[type];
};

export const getStockListData = async (module, type) => {
  const finalList = [];
  const stockListData = await axios.get(
    `${domain}?mode=${module}&type=${type}`
  );
  Object.keys(stockListData.data).forEach((item) => {
    finalList.push(stockListData.data[item]);
  });
  return finalList;
};

export const getCompareData = async (symbol_list) => {
  return symbol_list;
};

export const getStockData = async () => {
  const stockData = await axios
    .get(`${domain}?mode=stock&symbol=jd`)
    .then((response) => response.data)
    .then((data) => parseTime(data));
  return stockData;
};

export const getStockDetailData = async () => {
  const stockDetailData = await axios
    .get(`${domain}?mode=stockDetail&type=${type}`)
    .then((response) => response.data);
  return stockDetailData;
};

export const getStockFRData = async () => {
  const stockFRData = await axios
    .get(`${domain}?mode=stockFR&type=${type}`)
    .then((response) => response.data);
  return stockFRData;
};
