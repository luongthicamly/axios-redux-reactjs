import React from 'react';
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Category from './Category';

function BannerHome() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
      };
    return (
       <div className='bg-dark-custom'>
           <div  className='container'>
                <div className='banner-home'>
                    <div className='slider-home'>
                        <Slider {...settings}>
                            <div>
                                <img src='./images/banner/banner-2.jpg' alt=''/>
                            </div>
                            <div>
                                <img src='./images/banner/banner-3.jpg' alt=''/>
                            </div>
                        </Slider>
                    </div>
                    <div className='banner-small'>
                        <div className='item-banner-img'>
                            <img src='./images/banner/banner-mini-1.jpg'/>
                        </div>
                        <div className='item-banner-img'>
                            <img src='./images/banner/banner-mini-2.jpg'/>
                        </div>
                    </div>
                </div>
                <Category/>
            </div>
       </div>
    );
}

export default BannerHome;