// src/components/CryptoBanner.jsx
import React from 'react';

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Discover the Future of Finance</h1>
          <p className="py-6">
            Explore real-time market data, track your favorite cryptocurrencies, and stay up-to-date with the latest trends in the blockchain world.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;