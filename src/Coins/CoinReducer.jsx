

export const CoinReducer=(state,action)=>{
    switch(action.type){
        case "trending_list":
            return{
                ...state,
                trending:action.payload
            }
        case "search":
            return{
                ...state,
                search:action.payload
            }

        case "single":
            return{
                ...state,
                coins:action.payload
            }




        default:
            return{
                ...state
            }
    }
}