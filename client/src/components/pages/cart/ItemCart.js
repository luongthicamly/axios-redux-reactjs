import React, { useState } from 'react';
import { FaTrashAlt, FaCaretDown } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import {updateQuality } from '../../../action/action';

function ItemCart(props) {
    const {product} = props;
    const disptach = useDispatch();
    const [quality, setQuality] = useState(product.quality);
    const amount = 20;
    const handlePlusQuality = () => {
        if(quality < amount){
            setQuality(quality + 1);
            const updateProduct = {
                quality: quality+1,
                idProduct: product.idProduct
            }
            disptach(updateQuality(updateProduct))
        }
    }
    const handleMinusQuality = () => {
        if(quality > 1){
            setQuality(quality - 1);
            const updateProduct = {
                quality: quality-1,
                idProduct: product.idProduct
            }
            disptach(updateQuality(updateProduct))
        }
    }
    return (
        <div className='item-cart' >
        <div className='name-product'>
            <div className='img-product'>
                <img src={`.${product.image}`} alt=""/>
            </div>
            <div className='name-sp'>
                {product.name}
            </div>
            <div className='type-product'>
                <div>
                    <div>Phân loại hàng <FaCaretDown/></div>
                    <div>
                        {product.color == 0 && 'Đen'}
                        {product.color == 1 && 'Trắng'}
                        {product.color == 2 && 'Hồng'}
                        <span> + </span> 
                        {product.size}
                    </div>
                </div>
                
            </div>
        </div>
        <div className='price'>
            {product.price}
        </div>
        <div className='quality'>
            <div className='box-quality'>
                <div className={`btn-minus ${product.quality === 1 ? 'readOnly' :'' }`} onClick={()=> handleMinusQuality()}>-</div>
                <input type='text' value={product.quality} readOnly/>
                <div className={`btn-plus ${product.quality === amount ? 'readOnly' :'' }`} onClick={()=> handlePlusQuality()}>+</div>
            </div>
        </div>
        <div className='total-product'>
            {quality * product.price}
        </div>
        <div className='end-title'>
            <FaTrashAlt/>
        </div>
    </div>
    );
}

export default ItemCart;