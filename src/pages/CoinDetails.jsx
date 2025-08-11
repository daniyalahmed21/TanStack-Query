import React from 'react';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { fetchCoinDetails } from '../services/fetchCoinDetails';
import CoinDetailsSkeleton from '../loaders/CoinDetailsSkeleton';

const CoinDetails = () => {
    const { coinId } = useParams();

    const { data, isLoading, isError, error } = useQuery({
      queryKey: ['coin-details', coinId],
      queryFn: () => fetchCoinDetails(coinId),
      enabled: !!coinId, // Only run the query if coinId is available
      staleTime: 1000 * 60 * 5, // Data is considered fresh for 5 minutes
    });

    if (isLoading) {
      return (
        <CoinDetailsSkeleton/>
      );
    }

    if (isError) {
      return <div className="alert alert-error">Error: {error.message}</div>;
    }
    
    if (!data) {
        return <div className="text-center p-8">No coin data available.</div>;
    }

    return (
      <div className="container mx-auto p-4 md:p-8">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex items-center gap-4 mb-6">
              <img src={data.image.large} alt={`${data.name} logo`} className="w-16 h-16 rounded-full" />
              <div>
                <h1 className="card-title text-4xl">{data.name}</h1>
                <p className="text-xl text-primary-content uppercase">{data.symbol}</p>
              </div>
            </div>

            <div className="stats stats-vertical lg:stats-horizontal shadow mb-6 w-full">
              <div className="stat">
                <div className="stat-title">Current Price</div>
                <div className="stat-value text-primary">
                  ${data.market_data.current_price.usd.toLocaleString()}
                </div>
                <div className="stat-desc">
                  <span className={
                    data.market_data.price_change_percentage_24h > 0 ? "text-success" : "text-error"
                  }>
                    {data.market_data.price_change_percentage_24h.toFixed(2)}% in 24h
                  </span>
                </div>
              </div>
              <div className="stat">
                <div className="stat-title">Market Cap</div>
                <div className="stat-value">${data.market_data.market_cap.usd.toLocaleString()}</div>
                <div className="stat-desc">24h High: ${data.market_data.high_24h.usd.toLocaleString()}</div>
              </div>
              <div className="stat">
                <div className="stat-title">24h Low</div>
                <div className="stat-value">${data.market_data.low_24h.usd.toLocaleString()}</div>
                <div className="stat-desc">All-time High: ${data.market_data.ath.usd.toLocaleString()}</div>
              </div>
            </div>

            {/* Description */}
            <h2 className="text-2xl font-bold mb-4">About {data.name}</h2>
            <div 
              className="prose max-w-none" 
              dangerouslySetInnerHTML={{ __html: data.description.en }} 
            />
          </div>
        </div>
      </div>
    );
};

export default CoinDetails;