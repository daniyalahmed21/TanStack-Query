// This component will be our skeleton loader for a single table row
const CoinTableSkeletonRow = () => (
    <tr>
      <td colSpan="5">
        <div className="flex items-center space-x-3 py-2">
          <div className="mask mask-squircle w-8 h-8 bg-gray-300 animate-pulse"></div>
          <div>
            <div className="h-4 bg-gray-300 rounded w-32 animate-pulse mb-1"></div>
            <div className="h-3 bg-gray-300 rounded w-20 animate-pulse"></div>
          </div>
        </div>
      </td>
    </tr>
  );
  
  // This is the main skeleton component for the whole table
  const CoinTableSkeleton = () => {
    return (
      <div className="container mx-auto p-4 animate-pulse">
        <div className="h-10 bg-gray-300 rounded w-64 mx-auto mb-6"></div>
        <div className="overflow-x-auto shadow-xl rounded-box">
          <table className="table w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Coin</th>
                <th>Price</th>
                <th>Market Cap</th>
                <th>24h Change</th>
              </tr>
            </thead>
            <tbody>
              {/* Display 10 skeleton rows to match your typical data fetch */}
              {Array.from({ length: 10 }).map((_, index) => (
                <CoinTableSkeletonRow key={index} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center gap-4 mt-6">
          <div className="btn h-12 bg-gray-300 rounded w-24"></div>
          <div className="btn h-12 bg-gray-300 rounded w-24"></div>
        </div>
      </div>
    );
  };
  
  export default CoinTableSkeleton;