import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { GiAmpleDress,GiTrousers, GiSkirt, GiTShirt, GiHandBag, GiSonicShoes, GiDoubleNecklace, GiConverseShoe, GiFire, GiWatch } from "react-icons/gi";
import "./scss/category.scss";

function Category() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 547,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div className='list-category'>
            <Slider {...settings}>
                <div>
                    <div className="item-category">
                        <Link to='/hot-product'>
                            <div>
                                <GiFire/> 
                                <p>Hot products</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="item-category">
                        <Link to='/jean'>
                            <div>
                                <GiTrousers/>
                                <p>Jeans</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="item-category">
                        <Link to='/dress'>
                           <div>
                            <GiAmpleDress/>
                                <p>Dress</p>
                           </div>
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="item-category">
                        <Link to='/t-shirt'>
                            <div>
                                <GiTShirt/>
                                <p>T-shirt</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="item-category">
                        <Link to='/bag'>
                            <div>
                                <GiHandBag/>
                                <p>Bags</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="item-category">
                        <Link to='/shoes'>
                           <div>
                                <GiConverseShoe/>
                                <p>Shoes</p>
                           </div>
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="item-category">
                        <Link to='/accessory'>
                            <div>
                                <GiDoubleNecklace/>
                                <p>Accessory</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="item-category">
                        <Link to='/watch'>
                            <div>
                                <GiWatch/>
                                <p>Watch</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </Slider>
            
        </div>
    );
}
export default Category;