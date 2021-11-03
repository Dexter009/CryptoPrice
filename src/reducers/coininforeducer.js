
const defaultState = {
    coinId: null,
    showCoinInfo: false,
}

export default function coininforeducer(state=defaultState,action){
    switch(action.type){
        case 'setCoinId':
            return{
                ...state,
                    coinId : action.coinId,
                    showCoinInfo: action.showInfo,
            }
        case 'unsetCoinId':
            return{
                ...state,
                    coinId: null,
                    showCoinInfo: false,
            }
        default:
            return state;
        }
    
}