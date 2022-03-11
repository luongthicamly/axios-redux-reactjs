import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus, FaStar} from "react-icons/fa";
import './scss/product.scss';
function ItemProduct(props) {
    const {product} = props;
    const stars = [1,2,3,4,5];
    return (
        <div className='item-product'>
            <Link to={`/detail-product/${product.id}`}>
                <div className='img-product'>
                    <img src={product.img} alt='' />
                </div>
                <div className='body-product'>
                    <p className='name-product'>{product.name}</p>
                    <div className='d-flex'>
                        <div>
                            <div className='stars'>
                                {stars.map(value => (
                                    <FaStar key={value}/>
                                    ))
                                }
                            </div>
                            <p>{product.price}</p> 
                        </div>
                        <div className='add-to-cart'><FaCartPlus/></div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ItemProduct;