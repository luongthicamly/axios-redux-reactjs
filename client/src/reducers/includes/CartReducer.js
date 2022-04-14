export default function CartReducer (state = [], action){
    switch(action.type){
        case "UPDATE_CART": 
            const data= action.payload;
            return state.map(item => {
                if (item.idProduct == data.idProduct) {
                    let quality = item.quality + data.quality
                    return {...item, quality: quality}
                }
                return item
            })
        case "ADD_TO_CART": 
        
            return [...state, action.payload];
        default: 
            return state;
    }
}