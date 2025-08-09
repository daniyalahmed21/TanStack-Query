import React from 'react'
import { Route, Routes } from 'react-router'
import MainLayout from '../pages/Layout'
import Home from '../pages/Home'
import CoinDetails from '../pages/CoinDetails'
import CoinTable from '../pages/CoinTable'

const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='/details/:coinId' element={<CoinDetails/>}/>
            <Route path='/markets' element={<CoinTable/>}/>
        </Route>
    </Routes>
  )
}

export default Routing