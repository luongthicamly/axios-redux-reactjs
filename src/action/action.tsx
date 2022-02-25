export const getAllProduct = (mess: any) => {
    return{
        type: 'SETTER_MESSAGE',
        payload: mess
    }
}