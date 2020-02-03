
const homeReducer =(state={},action)=>{
    switch (action.type) {
        case 'GREETING': 
        return{
            ...state,
            greet: 'welcome'
        }
        case 'GOOD BYE': 
        return{
            ...state,
            greet: 'Good Bye'
        }
        default: return state
            

    }
}
export default homeReducer;