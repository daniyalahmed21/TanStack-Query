import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import MainLayout from "../pages/Layout";
import CoinTableSkeleton from "../loaders/CoinTableSkeleton";
import CoinDetailsSkeleton from "../loaders/CoinDetailsSkeleton";
import BannerSkeleton from "../loaders/BannerSkeleton";

// Lazy load the components for the routes
const CoinDetails = lazy(() => import("../pages/CoinDetails"));
const CoinTable = lazy(() => import("../pages/CoinTable"));
const Home = lazy(() => import("../pages/Home"));

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<BannerSkeleton/>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/details/:coinId"
          element={
            <Suspense fallback={<CoinDetailsSkeleton/>}>
              <CoinDetails />
            </Suspense>
          }
        />
        <Route
          path="/markets"
          element={
            <Suspense fallback={<CoinTableSkeleton/>}>
              <CoinTable />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default Routing;
