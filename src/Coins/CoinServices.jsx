//trending xcoins
export const fetchTrending= async ()=>{
    const res= await fetch("https://api.coingecko.com/api/v3/search/trending")
    const data= await res.json()
    return data.coins
}

// search coin
export const searchCoin=async(searchTerm)=>{
    const res=await fetch(`https://api.coingecko.com/api/v3/search?query=${searchTerm}`)
    const data=await res.json()
    return data.coins
}

// single coin
export const SingleCoin=async(id)=>{
    const res=await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
    const data=await res.json()
    return data
}