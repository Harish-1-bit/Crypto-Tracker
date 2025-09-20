import React, { useContext, useEffect } from 'react'
import Form from '../components/Form'
import TrendingList from '../components/TrendingList'
import CoinContext from '../Coins/CoinContext'
import { fetchTrending } from '../Coins/CoinServices'

const Home = () => {
    const {trending : coins,dispatch}=useContext(CoinContext)



    useEffect(()=>{
        const getTrending= async () => {
            const data=await fetchTrending()
            dispatch({
                type:"trending_list",
                payload:data
            })
        }
        getTrending()
    },[])


    if(!coins || coins.length===0){
        return(
            <h1 className=' text-6xl font-extrabold text-center text-white my-20'>loading........</h1>
        )
    }
    return (
        <>
            <div className="p-8">
                <h1 className="text-center my-2 text-white font-bold text-4xl">Track Crypto Coins 24/7</h1>
                <h2 className='text-center my-2 text-gray-400 font-semibold text-sm'>Get Crypto Coins Details 24 Hours At Instant</h2>
                <Form />

            </div>

            <h1 className="text-center text-2xl font-bold text-white">Trending Coins</h1>
            <TrendingList coins={coins} />
        </>
    )
}

export default Home
