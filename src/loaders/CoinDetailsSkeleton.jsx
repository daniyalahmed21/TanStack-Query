import React from "react";

const CoinDetailsSkeleton = () => {
  return (
    <div className="container mx-auto p-4 md:p-8 animate-pulse">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          {/* Header Skeleton */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-gray-300"></div>
            <div>
              <div className="h-8 bg-gray-300 rounded w-48 mb-2"></div>
              <div className="h-6 bg-gray-300 rounded w-24"></div>
            </div>
          </div>

          {/* Stats Skeleton */}
          <div className="stats stats-vertical lg:stats-horizontal shadow mb-6 w-full">
            <div className="stat">
              <div className="stat-title h-4 bg-gray-300 rounded w-24 mb-2"></div>
              <div className="stat-value h-10 bg-gray-300 rounded w-32"></div>
              <div className="stat-desc h-4 bg-gray-300 rounded w-40 mt-2"></div>
            </div>
            <div className="stat">
              <div className="stat-title h-4 bg-gray-300 rounded w-24 mb-2"></div>
              <div className="stat-value h-10 bg-gray-300 rounded w-32"></div>
              <div className="stat-desc h-4 bg-gray-300 rounded w-40 mt-2"></div>
            </div>
            <div className="stat">
              <div className="stat-title h-4 bg-gray-300 rounded w-24 mb-2"></div>
              <div className="stat-value h-10 bg-gray-300 rounded w-32"></div>
              <div className="stat-desc h-4 bg-gray-300 rounded w-40 mt-2"></div>
            </div>
          </div>

          {/* Description Skeleton */}
          <div className="h-6 bg-gray-300 rounded w-64 mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinDetailsSkeleton;