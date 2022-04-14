import React from 'react';
import {connect, useDispatch } from 'react-redux';
import { addtocart, updateCart } from '../../../action/action';

function AddToCart(props) {
    const {idProduct,name, image, size, quality, color, price, carts} = props;
    const dispatch = useDispatch();
    console.log(carts)
    const handleAddToCart = () => {
        const checkProduct = carts.findIndex(i=> parseInt(i.idProduct) == idProduct);
        
        if(checkProduct != -1 ){
            const updateProduct = {
                // indexProduct: checkProduct,
                quality: quality,
                idProduct: idProduct
            }
            dispatch(updateCart(updateProduct));
            console.log('da ton tai',checkProduct)
        } else{
            const product = {
                idProduct,
                name: name,
                image: image,
                size: size, 
                quality: quality, 
                color: color,
                price: price
            }
            dispatch(addtocart(product))
        }
        
    }
    return (
        <div className='div-btn'>
            <div className='buy-now'>
                Mua ngay
            </div>
            <div className='add-to-cart' onClick={handleAddToCart}>
                Thêm vào giỏ hàng
            </div>
        </div>
    );
}
const mapState = (state) => {
    return{
        carts: state.carts
    }
}
export default connect(mapState)(AddToCart);