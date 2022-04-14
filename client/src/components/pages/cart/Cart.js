import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';


import './cart.scss';
import ItemCart from './ItemCart';

function Cart(props) {
    const {carts} = props;
    const [amount, setAmount] = useState(0);
    const [total, setTotal] = useState(0);
    useEffect(()=>{
        let sum_Amount = 0;
        let sum_Total = 0;
        for(let i=0; i< carts.length; i++){
            sum_Amount += carts[i].quality
            const sum_price = carts[i].quality * carts[i].price;
            sum_Total += sum_price;
        }
        setAmount(sum_Amount);
        setTotal(sum_Total);
    },[carts]) 
    return (
        <div className='container'>
            <div className='page-cart'>
                <div className='title-cart'>
                    <div className='name-product'>
                        Sản phẩm
                    </div>
                    <div className='price'>
                        Giá
                    </div>
                    <div className='quality'>
                        Số lượng
                    </div>
                    <div className='total-product'>
                        Số tiền
                    </div>
                    <div className='end-title'>

                    </div>
                </div>
                {carts.map((product,key)=> (
                    <ItemCart key={key} product={product}/>
                ))}
                <div className='footer-cart'>
                    <div className='total-cart'>
                        TỔNG GIỎ HÀNG
                    </div>
                    <div className='total-product'>
                        Tổng sản phẩm: {amount}
                    </div>
                    <div className='total-price-cart'>
                        Tổng thanh toán: {total} VND
                    </div>
                    <div className='pay-cart'>
                        Mua Hàng
                    </div>
                </div>
            </div>
        </div>
    );
}
const mapState = (state) =>{
    return{
        carts: state.carts
    }
}
export default connect(mapState)(Cart);