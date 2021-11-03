
const defaultState = {
                        rank:1, 
                        currency: 'usd',
                        toggleTime: 0
}

export default function pagenum(state = defaultState, action){
    switch(action.type){
        case 'changeRank':
            return{ 
                ...state,
                    rank: action.rank
                }
        case 'changeCurrency':
            return{
                ...state,
                    currency: action.currency
            }
        case 'changeTime':
            return{
                ...state,
                    toggleTime: action.toggleTime
            }
        default:
            return state;
    }
}