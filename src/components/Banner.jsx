import React from "react";
import { Link } from "react-router"; // Use react-router-dom for modern React Router

const Banner = () => {
  return (
    <div className="hero bg-base-200 h-[calc(100vh-5rem)]">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Discover the Future of Finance</h1>
          <p className="py-6">
            Explore real-time market data, track your favorite cryptocurrencies,
            and stay up-to-date with the latest trends in the blockchain world.
          </p>
          <Link to="/markets">
            <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;