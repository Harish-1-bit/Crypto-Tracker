import React, { useContext, useState } from 'react'
import { Link, Links, useNavigate } from 'react-router-dom'
import { searchCoin } from '../Coins/CoinServices'
import CoinContext from '../Coins/CoinContext'

const Form = () => {
    const navigate=useNavigate()
    const {dispatch}=useContext(CoinContext)
    const [search,setSearch]=useState("")
    const handleSearch=async (e)=>{
        e.preventDefault()
        const data =await searchCoin(search)
        dispatch({
            type:"search",
            payload:data
        })
        navigate("/search/"+search)
    }
    return (
        <form onSubmit={handleSearch} className='rounded-lg p-4 py-6 my-6'>
            <input value={search} onChange={e=>setSearch(e.target.value)} type="text" className='border border-gray-300 w-full p-2.5 rounded-md placeholder:text-sm placeholder:text-gray-400 focus:outline-none text-white' placeholder='Search Crypto Here...' />
            <button className='text-lg font-bold text-white my-4 py-1.5 rounded-md hover:bg-emerald-600 cursor-pointer bg-emerald-500 w-full'>Search</button>
        </form>
    )
}

export default Form
