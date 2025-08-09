import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { fetchCoinData } from '../services/fetchCoinDataByMarket'

const CoinTable = () => {
    const [page, setPage] = useState(1)

    const {data, isLoading, isError, error} = useQuery({
      queryKey: ["coins", page],
      queryFn: () => fetchCoinData(page, "usd"),
      retry: 2,
      retryDelay: 1000,
      cacheTime: 1000*60*2,
    })

    if (isLoading) {
      return (
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      );
    }

    if (isError) {
      return <div className="alert alert-error">Error: {error.message}</div>;
    }

    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Top Cryptocurrencies</h1>
        <div className="overflow-x-auto shadow-xl rounded-box">
          <table className="table w-full">
            {/* Table Head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Coin</th>
                <th>Price</th>
                <th>Market Cap</th>
                <th>24h Change</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {data.data.map((coin, index) => (
                <tr key={coin.id} className="hover">
                  <th>{(page - 1) * 100 + index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-8 h-8">
                          <img src={coin.image} alt={`${coin.name} logo`} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{coin.name}</div>
                        <div className="text-sm opacity-50 uppercase">{coin.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td>${coin.current_price.toLocaleString()}</td>
                  <td>${coin.market_cap.toLocaleString()}</td>
                  <td className={
                    coin.price_change_percentage_24h > 0 ? "text-success" : "text-error"
                  }>
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Controls */}
        <div className="flex justify-center gap-4 mt-6">
            <button 
                className="btn btn-primary" 
                onClick={() => setPage(old => Math.max(old - 1, 1))}
                disabled={page === 1}
            >
                Previous
            </button>
            <button 
                className="btn btn-primary"
                onClick={() => setPage(old => old + 1)}
            >
                Next
            </button>
        </div>
      </div>
    );
}

export default CoinTable