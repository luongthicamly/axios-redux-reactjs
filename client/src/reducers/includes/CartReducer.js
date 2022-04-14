const init = [ { color: 0,
    idProduct: "4",
    image: "./images/product/img4.jpg",
    name: "sản phẩm4",
    price: 150000,
    quality: 2,
    size: "s"}]
export default function CartReducer (state = init, action){
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
        case "UPDATE_QUALITY": 
            return state.map(item => {
                if (item.idProduct == action.payload.idProduct) {
                    return {...item, quality: action.payload.quality}
                }
                return item
            })
        case "ADD_TO_CART": 
        
            return [...state, action.payload];
        default: 
            return state;
    }
}