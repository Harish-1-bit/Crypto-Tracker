import React from 'react'
import { Link } from 'react-router-dom'

const CoinCard = ({coin}) => {
    console.log(coin.id)
    return (
        <Link to={ `/coins/${coin.id || coin.item.id} `} className="relative border border-gray-300 p-4 rounded-md shadow-xl flex space-x-8">
            <img className='shadow-2xl h-26 bg-white rounded-full p-2 rotate-x-15 -rotate-y-30' src={coin?.item?.large || coin?.large} alt="img" />
            <div>
                <h1 className="text-white text-2xl font-bold">{coin?.item?.name || coin?.name}</h1>
                <h1 className="text-white text-xl font-bold">Price : {coin?.item?.data.price_change_percentage_24h?.inr?.toFixed(3) || ""}</h1>
                <p className="text-white text-sm font-bold">Symbol : {coin?.item?.symbol || coin?.symbol}</p>
            </div>
            <div className='bg-white p-1 rounded-lg absolute text-xs font-bold bottom-5 right-3'>Rank #{coin?.item?.market_cap_rank || coin?.market_cap_rank}</div>
        </Link>
    )
}

export default CoinCard
