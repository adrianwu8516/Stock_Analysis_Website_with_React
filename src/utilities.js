import axios from "axios";
import { siderItem } from "./data.js";

export const getSider = async (type) => {
  return siderItem[type];
};
