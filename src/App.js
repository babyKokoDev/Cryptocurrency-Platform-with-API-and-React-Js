import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Coins from './Components/Coins';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import CoinRoute from './routes/CoinRoute';


function App() {

  const [coins, setCoins] = useState([])
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en"

  useEffect(()=> {
        axios.get(url).then((response)=>{
          setCoins(response.data)
          console.log(response.data)
        }).catch((error)=> {
          console.log(error)
        })
  }, [])


  return (
      <>
       <Navbar />
       <Routes>
        <Route path='/' element={<Coins coins={coins}/>} />
        <Route path = '/CoinRoute' element={<CoinRoute />}>
        <Route path=':coinId' element={<CoinRoute />} />
        </Route>
       </Routes>
       
      </>
  );
}

export default App;
