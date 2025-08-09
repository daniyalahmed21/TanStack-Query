export const fetchCoinDetails = async (coinId) => {
    if (!coinId) {
      throw new Error("Coin ID is required.");
    }
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch coin details');
    }
    return response.json();
  };