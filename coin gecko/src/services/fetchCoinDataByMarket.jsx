import { axiosInstance } from "../helpers/axiosinstance";

export const fetchCoinData = async (page = 1, currency = "usd") => {
  const PerPage = 10;
  try {
    const response = await axiosInstance.get(
      `coins/markets?vs_currency=${currency}&per_page=${PerPage}&page=${page}`
    );
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};
