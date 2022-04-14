import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './cart.scss';

function DialogCart(props) {
    const [total, setTotal] = useState(0)
    const {carts} = props;
    useEffect(()=>{
        let total = 0
        for(let i=0; i<carts.length; i++){
            const sum = carts[i].quality * carts[i].price;
            total += sum;
        }
        setTotal(total)
        
    },[carts])
    
    return (
        <div className='dialog_cart'>
            {carts.length > 0  && 
                carts.map((product,key) => (
                    <div className='dialog-item' key={key}>
                        <div className='img-product'>
                            <img src={`.${product.image}`} alt="" />
                        </div>
                        <div className='detail-item-product'>
                            <p>{product.name}</p>
                            <p>{product.quality}x{product.price}</p>
                        </div>
                    </div>
                ))
            }
            <p>Tổng cộng: {total}</p>
            <button className='btn btn-see-carts'>
                <Link to='/cart' > xem giỏ hàng</Link>
            </button>
            <button className='btn btn-pay-carts'>thanh toán</button>
        </div>
    );
}
const mapState =(state) => {
    return{
        carts: state.carts
    }
}
export default connect(mapState)(DialogCart);