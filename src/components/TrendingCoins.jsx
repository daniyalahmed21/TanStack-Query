import axios from "axios";
import React, { useEffect } from "react";

const TrendingCoins = () => {
  const download = async () => {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/search/trending"
    );
    console.log(response.data);
  };

  useEffect(() => {
    download();
  }, []);

  return <div>TrendingCoins</div>;
};

export default TrendingCoins;
