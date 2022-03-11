import React, { useState } from 'react';
import ItemProduct from './ItemProduct';
import hotProduct from '../../database/hotProduct';
function HotProduct() {
    const [products, setProduct] = useState(hotProduct);
    return (
        <div className='hot-product mt-4'>
            <div className='container'>
                <h3 className='heading-title'>
                    <span>Sản phẩm bán chạy</span>
                </h3>
                <div className='bottom-heading'></div>
                <div className='signature mb-4'>
                    <span>LadyShop</span>
                </div>
                <div className='row-cols-xl-5 row-cols-lg-4 row row-cols-md-3 row-cols-sm-2 row-cols-2'>
                   {
                    products.map((value, key) => (
                        <div className='col' key={key}>
                            <ItemProduct product={value}/>
                        </div>
                        ))
                   }
                </div>
            </div>
        </div>
    );
}

export default HotProduct;