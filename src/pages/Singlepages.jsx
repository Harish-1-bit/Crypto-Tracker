import React, { useContext, useEffect } from 'react'
import { FaGithub, FaGlobe } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import CoinContext from '../Coins/CoinContext'
import { SingleCoin } from '../Coins/CoinServices'

const Singlepages = () => {
  const {coinid}=useParams()
  const {coins,dispatch}=useContext(CoinContext)
  // console.log(coins)
  console.log(coinid)
  const getCoin=async(coinid)=>{
    const data= await SingleCoin(coinid)
    dispatch({
      type:"single",
      payload:data
    })
  }
  useEffect(()=>{
    getCoin(coinid)
  },[])
  


  if(!coins){
    return(
      <h1 className=' text-4xl font-bold text-center text-white my-10'>Loading the data..........</h1>
    )
  }
  return (
    <div className=' p-10 min-h-screen'>
      <div className=' border-2 border-gray-400 rounded-2xl p-5 flex justify-around  items-center relative flex-col md:flex-row'>
          <img className='shadow-2xl m-auto h-50 w-50 md:h-52 bg-white rounded-full p-2 rotate-x-15 -rotate-y-30' src={coins?.image?.large} alt="img" />
            <div className=' space-y-2'>
                <h1 className="text-white text-4xl font-bold">{coins?.name}</h1>
                <h1 className="text-white text-3xl font-bold">Price : {coins?.market_data?.current_price?.inr}</h1>
                <p className="text-white text-2xl font-bold">Symbol : {coins?.symbol}</p>
                <p className="text-white text-xl font-bold">{coins?.description?.en} </p>
            </div>

            <div className='bg-white p-1 rounded-lg absolute text-xs md:text-lg font-bold right-[-10px] top-[-10px]'>Rank #{coins?.market_cap_rank}</div>
      </div>
        <div className=' flex justify-evenly md:gap-4 md:justify-start mt-4'>
                  <a href={coins?.links?.homepage} target='_blank' className=' bg-amber-50 px-7 py-2  font-bold rounded-2xl text-  text-center md:px-7 md:text-lg flex items-center gap-3'><FaGlobe/> Offical  </a>
          <a href={coins?.links?.repos_url?.github} target='_blank' className=' bg-gray-700 text-white font-bold px-14 py-2 rounded-2xl  text-center md:px-14 md:text-lg flex items-center gap-3'><FaGithub/> Github</a>
        </div>
    </div>
  )
}

export default Singlepages
