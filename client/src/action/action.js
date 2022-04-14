export const getAllProduct = (mess) => {
    return{
        type: 'SETTER_MESSAGE',
        payload: mess
    }
}
export const updateCart = (payload) => {
    return{
        type: 'UPDATE_CART',
        payload: payload
    }
}
export const updateQuality = (payload) => {
    return{
        type: 'UPDATE_QUALITY',
        payload: payload
    }
}
export const addtocart = (product) => {
    return{
        type: 'ADD_TO_CART',
        payload: product
    }
}