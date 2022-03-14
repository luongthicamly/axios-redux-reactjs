import React, { useState } from 'react';
import logo from '../../asset/images/logo-white.png';
import './header.scss';
import { Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { BiSearchAlt2, BiPhoneCall } from "react-icons/bi";
import { MdPhonelinkRing } from "react-icons/md";
import { FaUserCog, FaUserPlus, FaUniversalAccess , FaShoppingCart, FaAlignLeft, FaAlignRight, FaTimes} from "react-icons/fa";
import { GiAmpleDress,GiTrousers, GiSkirt, GiTShirt, GiHandBag, GiSonicShoes, GiDoubleNecklace, GiConverseShoe, GiFire, GiWatch } from "react-icons/gi";

function Header() {
    const {pathname} = useLocation();
    const splitLocation = pathname.split("/");
    const [isCategory, setIsCategory] = useState(false);
    const [isMenu, setIsMenu] = useState(false);

    const handleCategory = () => {
        setIsCategory(!isCategory);
    }
    const handleMenu = () => {
        setIsMenu(!isMenu);
    }
    const handleClose = () => {
        setIsCategory(false);
        setIsMenu(false);
    }
    return (
        <header className="header">
            <div className='container'>
                <div className='header-desktop'>
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
                            <Link to='/'><img src={logo} alt=''/></Link>
                        </div>
                        <div className='col-lg-9'>
                            <div className='row'>
                                <div className='col-lg-8'>
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
                                <div className='col-lg-4'>
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
                                        
                                    </ul>
                                </nav>
                                <ul className='cart-header'>
                                    <li className={splitLocation[1] === 'cart' ? 'active' : ''}>
                                        <div className='number-cart'>
                                            <div>
                                                <span>0</span>
                                            </div>
                                        </div>
                                        <Link to='/cart'><FaShoppingCart /></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='header-mobile'>
                    <div className='top-header-mobile'>
                        <Button className='btn-sign'><FaUserPlus/>sign</Button>
                        <Button className='btn-login'><FaUserCog/>login</Button>
                    </div>
                    <div className={`header-main-mobile ${isCategory === true || isMenu === true ? 'active' : ''}`}>
                        <div className='menu-left' onClick={handleCategory}><FaAlignLeft/></div>
                        <div className={`category-mobile ${isCategory === true ? 'active' : ''}`}>
                            <div className='close' onClick={handleClose}>
                                <FaTimes/>
                            </div>
                            <h4>CATEGORY</h4>
                            <ul className='category-menu-mobile'>
                                <li>
                                    <Link to='/hot-product'><GiFire/> Hot products</Link>
                                </li>
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
                                    <Link to='/shoes'><GiConverseShoe/>Shoes</Link>
                                </li>
                                <li>
                                    <Link to='/accessory'><GiDoubleNecklace/>Accessory</Link>
                                </li>
                                <li>
                                    <Link to='/watch'><GiWatch/>Watch</Link>
                                </li>
                                <li>
                                    <Link to='/sandal'><GiSonicShoes/>Sandal</Link>
                                </li>
                                <li>
                                    <Link to='/discount-products'><FaUniversalAccess/>Discount products</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='logo-mobile'>
                            <Link to='/'><img src='./images/logo-white.png' alt=''/></Link>
                        </div>
                        <div className='menu-right' onClick={handleMenu}><FaAlignRight/></div>
                        <div className={`menu-mobile ${isMenu === true ? 'active' : ''}`} >
                            <div className='close' onClick={handleClose}>
                                <FaTimes/>
                            </div>
                            <h4>MENU</h4>
                            <nav className='navbar-menu-mobile'>
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
                                    
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className='cart-mobile'>
                        <ul className='cart-header'>
                            <li className={splitLocation[1] === 'cart' ? 'active' : ''}>
                                <div className='number-cart'>
                                    <div>
                                        <span>0</span>
                                    </div>
                                </div>
                                <Link to='/cart'><FaShoppingCart /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;