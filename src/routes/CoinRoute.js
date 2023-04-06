import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CoinRoutes.css'



const CoinRoute = () => {

    const params = useParams()
    const [coin, setCoin] = useState({})
    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`

    useEffect(() => {
        axios.get(url).then((response) => {
            console.log(response)
            setCoin(response.data)
            

        }).catch((error) => {
            console.log(error)
        })
    }, [])
    return (
        <div>
            <div className="coin-container">
                <div className="content">
                    <h1>{coin.name}</h1>
                </div>
                <div className="content">
                    <div className="rank">
                        <span className="rank-btn">Rank # {coin.market_cap_rank}</span>
                    </div>
                    <div className="info">
                        <div className="coin-heading">
                            {coin.image ? <img src={coin.image.small} alt='' /> : null}
                            <p>{coin.name}</p>
                            <p>{coin.symbol}</p>
                        </div>
                        <div className="coin-price">
                            { coin.market_data ?  <h1>{coin.market_data.current_price.usd}</h1> : null }
                        </div>
                    </div>
                </div>
                <div className="content">
                    <table>
                        <thead>
                            <tr>
                                <th>1h</th>
                                <th>24h</th>
                                <th>7d</th>
                                <th>14d</th>
                                <th>30d</th>
                                <th>1yr</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{coin.market_data?.price_change_percentage_1h_in_currency ? <p>{coin.market_data.price_change_percentage_1h_in_currency.usd}</p> : null }</td>
                                <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_24h_in_currency.usd}</p> : null }</td>
                                <td>{coin.market_data?.price_change_percentage_7d_in_currency ? <p>{coin.market_data.price_change_percentage_7d_in_currency.usd}</p> : null }</td>
                                <td>{coin.market_data?.price_change_percentage_14d_in_currency ? <p>{coin.market_data.price_change_percentage_14d_in_currency.usd}</p> : null }</td>
                                <td>{coin.market_data?.price_change_percentage_30d_in_currency ? <p>{coin.market_data.price_change_percentage_30d_in_currency.usd}</p> : null }</td>
                                <td>{coin.market_data?.price_change_percentage_1y_in_currency ? <p>{coin.market_data.price_change_percentage_1y_in_currency.usd}</p> : null }</td>
                            </tr>   
                        </tbody>
                    </table>
                </div>
                <div className="content">
                    <div className="stats">
                        <div className="left">
                            <div className="row">
                                <h4>24 Hour Low</h4>
                                {coin.market_data.low_24h ? <p>{coin.market_data.low_24h.usd}</p> : null}
                            </div>
                            <div className="row">
                                <h4>24 Hour High</h4>
                                {coin.market_data.high_24h ? <p>{coin.market_data.high_24h.usd}</p> : null}
                            </div>
                            <div className="right">
                                <div className="row">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoinRoute