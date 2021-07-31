import axios from "axios";
import { siderItem } from "./data.js";

const domain =
  "https://script.google.com/macros/s/AKfycbw47BIPlb8ZDuvA-e2-W_s0xFwOJDONkUrj7P8DJ1QFCRhrNSTlqx5ZQgbH69I97Utw/exec";

const parseTime = (objList) => {
  const value = objList.map((obj) => ({
    ...obj,
    date: new Date(Date.parse(obj.date))
  }));
  return value;
};

// Sider

export const getSider = async (type) => {
  return siderItem[type];
};

// Stock List API Connection

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

// Single Stock API Connection

export const getStockChartData = async (symbol) => {
  const stockChartData = await axios
    .get(`${domain}?mode=stock&symbol=${symbol}`)
    .then((response) => response.data)
    .then((data) => parseTime(data));
  return stockChartData;
};

export const getStockDetailData = async (symbol) => {
  const stockDetailData = await axios.get(
    `${domain}?mode=stockDetail&symbol=${symbol}`
  );
  return stockDetailData;
};

export const getStockFRData = async (symbol) => {
  const stockFRData = await axios.get(
    `${domain}?mode=stockFR&symbol=${symbol}`
  );
  return stockFRData;
};

// Macro API Connection

export const getMacorDailyData = async () => {
  const macorDailyData = await axios.get(`${domain}?mode=macro&type=daily`);
  return macorDailyData;
};

export const getMacorMonthlyData = async () => {
  const macorMonthlyData = await axios.get(`${domain}?mode=macro&type=monthly`);
  return macorMonthlyData;
};

export const getMacorQuarterlyData = async () => {
  const macorQuarterlyData = await axios.get(
    `${domain}?mode=macro&type=quarterly`
  );
  return macorQuarterlyData;
};

// Compare API Connection

export const getCompareStockData = async (symbol_list) => {
  const compareData = await axios.get(
    `${domain}?mode=compareStock&symbol_list=${symbol_list}`
  );
  return compareData;
};

export const getCompareDetailData = async (symbol_list) => {
  const compareDetailData = await axios.get(
    `${domain}?mode=compareDetail&symbol_list=${symbol_list}`
  );
  return compareDetailData;
};

export const getCompareFRData = async (symbol_list) => {
  const compareFRData = await axios.get(
    `${domain}?mode=compareFR&symbol_list=${symbol_list}`
  );
  return compareFRData;
};
