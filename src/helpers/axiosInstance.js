import axios from "axios";
import { COINGECKO_API } from "./constants";

export const axiosInstance = axios.create({
    baseURL : COINGECKO_API
}) 