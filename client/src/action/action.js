export const getAllProduct = (mess) => {
    return{
        type: 'SETTER_MESSAGE',
        payload: mess
    }
}
export const cartProduct = (quality) => {
    return{
        type: 'UPDATE_CART',
        payload: quality
    }
}