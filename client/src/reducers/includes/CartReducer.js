export default function CartReducer (state = 0, action){
    switch(action.type){
        case "UPDATE_CART": 
            return action.payload;
        default: 
            return state;
    }
}