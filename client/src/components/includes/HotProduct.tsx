import React from 'react';
import ItemProduct from '../pages/product/ItemProduct';

function HotProduct() {
    const renderProduct = () => {
        for(let i = 0; i<= 20; i++){
            return (<div className='col-xl-2 col-lg-3 col-md-4 col-6'>
                        <ItemProduct/>
                    </div>)
        }
    }
    return (
        <div className='hot-product mt-4'>
            <div className='container'>
                <h3 className='heading-title'>
                    <span>Sản phẩm bán chạy</span>
                </h3>
                <div className='bottom-heading'></div>
                <div className='signature'>
                    <span>LadyShop</span>
                </div>
                <div className='row'>
                   {renderProduct}
                </div>
            </div>
        </div>
    );
}

export default HotProduct;