import { axiosInstance } from "../helpers/axiosinstance";

export const fetchCoinData = async () => {
  try {
    const response = await axiosInstance.get("/coins/markets?vs_currency=usd");
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};
