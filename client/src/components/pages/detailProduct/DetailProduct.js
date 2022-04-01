import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import hotProduct from '../../../database/hotProduct';
import { FaStar} from "react-icons/fa";
import './detailProduct.scss';
import imagesProduct from '../../../database/imagesProduct';
import FeedBack from '../../includes/FeedBack';
import { connect } from 'react-redux';

function DetailProduct(props) {
    let {id} = useParams();
    const [quality, setQuality] = useState(1);
    const listProduct = hotProduct;
    const lengList = listProduct.length;
    const listImages = imagesProduct;
    const lengthImg = listImages.length;
    const listImgProduct = [];
    const stars = [1,2,3,4,5];
    const [color, setColor] = useState(0);
    const [size, setSize] = useState('s');
    const amount = 5;
    const tabs = ['Chi tiết sản phẩm', 'Đánh giá'];
    const [tab, setTab] = useState('Chi tiết sản phẩm');
    
    for(let j=0; j<lengthImg; j++){
        if(listImages[j].idProduct == id){
            listImgProduct.push(listImages[j]);
        }
    }
    const [imgDefault, setImgDefault] = useState(
        listImgProduct.length>0 ? listImgProduct[0].img : './images/product/img4.jpg'
    );
    const handleClickImg = (Img) => {
        setImgDefault(Img);
    }
    const handleClickColor = (color) => {
        setColor(color);
    }
    const handleClickSize = (size) => {
        setSize(size);
    }
    const handlePlusQuality = () => {
        if(quality < amount){
            setQuality(quality + 1);
        }
    }
    const handleMinusQuality = () => {
        if(quality > 1){
            setQuality(quality - 1);
        }
    }
    const renderUI = () => {
        for(let i = 0; i < lengList; i++){
            if(listProduct[i].id == id){
                return(
                    <>
                    <div className='info-product'>
                        <div className='detail-images'>
                           <img src={`.${imgDefault}`} alt=''/>
                            <div className='list-img mt-4'>
                                <div className='img-product'>
                                    {listImgProduct.length >0 ?
                                        listImgProduct.map((value, key) => (
                                            <div className={`item-img ${imgDefault == value.img ? 'active' : ''}`} 
                                                key={key} onClick={()=> handleClickImg(value.img)}>
                                                <img src={`.${value.img}`} alt='' />
                                            </div>
                                        ))
                                    :   <div className='item-img'>
                                            <img src="../images/product/img4.jpg" alt='' />
                                        </div>
                                    }
                                </div>    
                            </div>
                        </div>
                        <div className='content-product'>
                            <p className='name-product'>{listProduct[i].name}</p>
                            <div className='tab-info-product'>
                                <div className='stars'>
                                    <span className='numvber-star'>5.0</span>
                                    {stars.map(value => (
                                        <FaStar key={value}/>
                                        ))
                                    }
                                </div>
                                <div className='feedback'>
                                    <span>170</span>
                                    <span> Đánh giá</span>
                                </div>
                                <div className='sold'>
                                    <span>200</span>
                                    <span> Đã bán</span>
                                </div>
                            </div>
                            <p className='price-product'>
                                <span>{listProduct[i].price}</span>
                            </p>
                            <div className='color-product'>
                                <div className='title'>
                                    Màu sắc 
                                </div>
                                <ul>
                                    <li className={` ${color === 0 ? 'active' : ''}`} onClick={()=>handleClickColor(0)}>Đen</li>
                                    <li className={` ${color === 1 ? 'active' : ''}`} onClick={()=>handleClickColor(1)}>Trắng</li>
                                    <li className={` ${color === 2 ? 'active' : ''}`} onClick={()=>handleClickColor(2)}>Hồng</li>
                                </ul>
                            </div>
                            <div className='size-product'>
                                <div className='title'>
                                   Kích thước
                                </div>
                                <ul>
                                    <li className={` ${size === 's' ? 'active' : ''}`} onClick={()=> handleClickSize('s')}>S</li>
                                    <li className={` ${size === 'm' ? 'active' : ''}`} onClick={()=> handleClickSize('m')}>M</li>
                                    <li className={` ${size === 'l' ? 'active' : ''}`} onClick={()=> handleClickSize('l')}>L</li>
                                    <li className={` ${size === 'xl' ? 'active' : ''}`} onClick={()=> handleClickSize('xl')}>XL</li>
                                </ul>
                            </div>
                            <div className='box-quality'>
                                <div className='title'>
                                    Số lượng
                                </div>
                                <div className='quality'>
                                    <div className={`btn-minus ${quality === 1 ? 'readOnly' :'' }`} onClick={()=> handleMinusQuality()}>-</div>
                                    <input type='text' value={quality} readOnly/>
                                    <div className={`btn-plus ${quality === amount ? 'readOnly' :'' }`} onClick={()=> handlePlusQuality()}>+</div>
                                </div>
                                <div className='quality-amount'>
                                    Còn {amount} sản phẩm
                                </div>
                            </div>
                            <div className='div-btn'>
                                <div className='buy-now'>
                                    Mua ngay
                                </div>
                                <div className='add-to-cart'>
                                    Thêm vào giỏ hàng
                                </div>
                            </div>
                            <div className='shipping-policy'>
                                <div className='logo'>
                                    <img src='../images/logo.png' alt=''/>
                                </div>
                                <div className='policy'>
                                    <ul>
                                        <li>Được kiểm tra hàng trước khi thanh toán <strong className='red'>(KHÔNG ĐƯỢC THỬ)</strong></li>
                                        <li>Đổi hàng theo chính sách 
                                            <Link to='/' className='click-policy'> Tại đây</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='content-detail mt-5'>
                        <div className='tab-detail'>
                            {tabs.map(value => (
                                <div className={`title-tab ${tab === value ? 'active' : ''}`} onClick={()=> setTab(value)} key={value}>
                                    {value}
                                </div>
                            ))}
                        </div>
                        <div className='container-tab mt-4'>
                            <div className={`content-product content-tab ${tab === 'Chi tiết sản phẩm' ? 'active' : ''}`}>
                                <pre>{listProduct[i].detail}
                                </pre>
                            </div>
                            <div className={`feedback content-tab ${tab === 'Đánh giá' ? 'active' : ''}`}>
                                <FeedBack/>
                            </div>
                        </div>
                    </div>
                    </>
                )
            }
        }
    }
    return (
        <div className='detail-page pt-5'>
            <div className='container'>
                <div className='detail-product'>
                {renderUI()}
                </div>
            </div>
        </div>
    );
}
const mapState = (state) => {
    return{
        cart: state.cart
    }
}
export default connect(mapState)(DetailProduct);