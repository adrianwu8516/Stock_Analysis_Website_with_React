import axios from "axios";
import { siderItem, stockListData } from "./data.js";

export const getSider = async (type) => {
  return siderItem[type];
};

export const getStockListData = async (type) => {
  const finalList = [];
  Object.keys(stockListData[type]).forEach((item) => {
    finalList.push(stockListData[type][item]);
  });
  return finalList;
};
