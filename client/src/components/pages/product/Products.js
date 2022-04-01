import React, { useEffect, useState } from 'react';
import ListProduct from '../../../database/listProduct';
import ItemProduct from '../../includes/ItemProduct';
import NavigationPage from '../../includes/NavigationPage';

function Products() {
    const products = ListProduct;
    const [currentPage, setCurrentPage] = useState(1); //current page
    const [newPerPage, setNewPerPage] = useState(5); // number product of a page
    const indexOfLastNews = currentPage*newPerPage; // positon of last product
    const indexOfFirstNews = indexOfLastNews - newPerPage; // positon of first product
    const currentTools = products.slice(indexOfFirstNews, indexOfLastNews); // cut product show a page
    const pageNumber = []; // total pages
    for(let i = 1; i<= Math.ceil(products.length / newPerPage); i++){
        pageNumber.push(i);
    }
    const handleChangePage = (page) => {
        setCurrentPage(page)
    }
    console.log(currentPage);

    return (
        <div className='container product-page pt-5 pb-5'>
            <div className='row-cols-xl-5 row-cols-lg-4 row row-cols-md-3 row-cols-sm-2 row-cols-2'>
                {currentTools.map((product, key) => (
                    <div className='col' key={key}>
                        <ItemProduct product={product} />
                    </div>
                ))}
            </div>
            <NavigationPage  pageNumber={pageNumber} onChangePage={handleChangePage} currentPage={currentPage}/>
        </div>
    );
}

export default Products;