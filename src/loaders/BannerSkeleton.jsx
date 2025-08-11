import React from 'react';

const BannerSkeleton = () => {
  return (
    <div className="hero min-h-screen bg-base-200 animate-pulse">
      <div className="hero-content text-center">
        <div className="max-w-md">
          {/* Title placeholder */}
          <div className="h-12 bg-gray-300 rounded w-64 md:w-96 mx-auto mb-6"></div>
          
          {/* Paragraph placeholder */}
          <div className="space-y-2 mb-8">
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6 mx-auto"></div>
          </div>
          
          {/* Button placeholder */}
          <div className="h-12 w-36 bg-gray-300 rounded mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default BannerSkeleton;