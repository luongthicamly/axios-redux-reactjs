import React from 'react';
import './scss/navigationPage.scss'
function NavigationPage(props) {
    const {pageNumber, currentPage} = props;
    const handleCurrentPage = (page) => {
        props.onChangePage(page);
    }
    return (
        <div className='navigation-page mt-5'>
            <ul>
                {pageNumber.map((page,key)=>(
                    <li 
                        key={key} 
                        onClick={()=> handleCurrentPage(page)}
                        className={currentPage == page ? 'active' : ''}
                    >{page}</li>
                ))}
            </ul>
        </div>
    );
}

export default NavigationPage;