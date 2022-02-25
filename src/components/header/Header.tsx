import React from 'react';
import './header.scss';
import { Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { BiSearchAlt2, BiPhoneCall } from "react-icons/bi";
import { MdPhonelinkRing } from "react-icons/md";
import { FaUserCog, FaUserPlus, FaUniversalAccess } from "react-icons/fa";
import { GiAmpleDress,GiTrousers, GiSkirt, GiTShirt, GiHandBag, GiSonicShoes, GiDoubleNecklace } from "react-icons/gi";

function Header() {
    const {pathname} = useLocation();
    const splitLocation = pathname.split("/");
    console.log(splitLocation)
    return (
        <header className="header">
            <div className='container'>
                <div className='top-bar'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-12'>
                            Welcome you to ladyshop
                        </div>
                        <div className='col-lg-6 col-md-6 col-12'>
                            <Button className='btn-sign'><FaUserPlus/>sign</Button>
                            <Button className='btn-login'><FaUserCog/>login</Button>
                        </div>
                    </div>
                </div>
                <div className='header-main'>
                    <div className=' col-lg-3 logo'>
                        <img src='./images/logo-white.png' alt=''/>
                    </div>
                    <div className='col-lg-6 '>
                        <div className='search-form'>
                            <select>
                                <option>all</option>
                                <option>1</option>
                                <option>1</option>
                                <option>1</option>
                                <option>1</option>
                                <option>1</option>
                            </select>
                            <input type='search' placeholder='Search product' />
                            <Button className='btn-search'>
                                <BiSearchAlt2 />
                            </Button>
                        </div>
                    </div>
                    <div className='col-lg-3 '>
                        <div className='hotline'>
                            <div className='icon-hotline'>
                                <MdPhonelinkRing/>
                            </div>
                            <div className='descreption-hotline'>
                                <p>Call to order</p>
                                <p>0123.456.789</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='header-bottom d-flex'>
                    <div className='category'>
                        category
                        <ul className='category-menu'>
                            <li>
                                <Link to='/jean'><GiTrousers/>Jeans</Link>
                            </li>
                            <li>
                                <Link to='/dress'><GiAmpleDress/>Dress</Link>
                            </li>
                            <li>
                                <Link to='/skirt'><GiSkirt/>Skirt</Link>
                            </li>
                            <li>
                                <Link to='/t-shirt'><GiTShirt/>T-shirt</Link>
                            </li>
                            <li>
                                <Link to='/bag'><GiHandBag/>Bags</Link>
                            </li>
                            <li>
                                <Link to='/shoes'><GiSonicShoes/>Shoes</Link>
                            </li>
                            <li>
                                <Link to='/accessory'><GiDoubleNecklace/>Accessory</Link>
                            </li>
                            <li>
                                <Link to='/discount-products'><FaUniversalAccess/>Discount products</Link>
                            </li>
                        </ul>
                    </div>
                    <nav className='navbar-menu'>
                        <ul>
                            <li className={splitLocation[1] === '' ? 'active' : ''}>
                                <Link to='/'>Home</Link>
                            </li>
                            <li className={splitLocation[1] === 'product' ? 'active' : ''}>
                                <Link to='/product'>Product</Link>
                            </li>
                            <li className={splitLocation[1] === 'service' ? 'active' : ''}>
                                <Link to='/service'>Service</Link>
                            </li>
                            <li className={splitLocation[1] === 'contact' ? 'active' : ''}>
                                <Link to='/contact'>Contact</Link>
                            </li>
                            <li className={splitLocation[1] === 'news' ? 'active' : ''}>
                                <Link to='/news'>News</Link>
                            </li>
                            <li className={splitLocation[1] === 'cart' ? 'active' : ''}>
                                <Link to='/cart'>Cart</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;