import CoinCard from './CoinCard'
import CoinContext from '../Coins/CoinContext'

const TrendingList = ({coins}) => {
    
    

    return (
        <div className='p-8 grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                coins.map(coin=><CoinCard key={coin?.item?.id || coin?.id} coin={coin} />)
            }
        </div>
    )
}

export default TrendingList
