import React, { useContext, useEffect } from 'react'
import TrendingList from '../components/TrendingList'
import CoinContext from '../Coins/CoinContext'
import { searchCoin } from '../Coins/CoinServices'
import { useParams } from 'react-router-dom'

const SearchPage = () => {
    const {searchQuery}=useParams()
    const {search : coins,dispatch}=useContext(CoinContext)


    const searched=async (searchQuery)=>{
        const data=await searchCoin(searchQuery)
        console.log(data)
        dispatch({
            type:"search",
            payload:data
        })
        console.log(searchQuery)
    }
    useEffect(()=>{
        searched(searchQuery)
    },[searchQuery])
    
    


    if(!coins  ){
        return(
            <h1 className=' text-6xl font-extrabold text-center text-white my-20'>loading........</h1>
        )}


        if(coins.length===0 || searchQuery==="" ){
        return(
            <h1 className=' text-4xl font-extrabold text-center text-white my-20'>{`No Coins Found Named ${searchQuery}`}</h1>
        )
    }
    return (
        <div className='p-8'>
            <h1 className="text-center text-2xl font-bold text-white">Search Results</h1>
            <TrendingList coins={coins} />
        </div>
    )
}

export default SearchPage 
