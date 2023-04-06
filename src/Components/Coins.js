import React from 'react'
import CoinItems from './CoinItems'
import './Coins.css'
import { Link } from 'react-router-dom'
import CoinRoute from '../routes/CoinRoute'

const Coins = (props) => {
  return (
    <div className='container'>
        <div>
            <div className="heading">
                <div>#</div>
                <div className='coin-name'>Coin</div>
                <p>Price</p>
                <p>24h</p>
                <p className='hide-mobile'>Volume</p>
                <p className='hide-mobile'>Mkt Cap</p>
            </div>

            {props.coins.map(coins => {
                return (
                    <Link to={`/CoinRoute/${coins.id}`} element={<CoinRoute />} key={coins.id}>
                    <CoinItems coins={coins} />
                    </Link>
                )
            })}
        </div>
    </div>
  )
}

export default Coins