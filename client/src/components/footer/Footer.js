import React from 'react';
import { FaFacebook, FaInstagram, FaPhoneVolume} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import './footer.scss'
import notificationImg from '../../asset/images/sale.png'

function Footer() {
    return (
        <footer className='mt-5'>
            <div className='bg-new-letter pt-2 '>
                <div className='container'>
                   <div className='row'>
                       <div className='col-lg-6 col-md-12 col-12'>
                            <div className='img-notification'>
                                <img src={notificationImg} alt="notification"/>
                            </div>
                       </div>
                       <div className='col-lg-6 col-md-12 col-12'>
                            <form>
                                <input className='form-control' placeholder='email'/>
                                <button type='submit' className='btn btn-send'>Gửi</button>
                            </form>
                       </div>
                   </div>
                </div>
            </div>
            <div className='section-footer container mt-5'>
                <div className='row'>
                    <div className='col-lg-3 col-md-6 col-12'>
                        <p className='title-section-footer'>
                            Giới thiệu
                        </p>
                        <ul>
                            <li>Về Lady Fashion</li>
                            <li>Tuyển dụng</li>
                            <li>Các khuyến mãi</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className='col-lg-3 col-md-6 col-12'>
                        <p className='title-section-footer'>
                            Chính sách cửa hàng
                        </p>
                        <ul>
                            <li>Hình thức đặt hàng</li>
                            <li>Phương thức vận chuyển</li>
                            <li>Chính sách đổi trả</li>
                            <li>Hướng dẫn sử dụng</li>
                        </ul>
                    </div>
                    <div className='col-lg-3 col-md-6 col-12'>
                        <p className='title-section-footer'>
                            Liên hệ
                        </p>
                        <div className='hotline-footer'><FaPhoneVolume/><span><span className='txt-color'>Hotline</span><br/>0367.891.394</span></div>
                        <ul className='icon-contact'>
                            <li><FaFacebook/></li>
                            <li><FaInstagram/></li>
                            <li><IoIosMail/></li>
                        </ul>
                    </div>
                    <div className='col-lg-3 col-md-6 col-12'>
                        <iframe 
                            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FWorldYourHand%2F&tabs=timeline&width=220px&height=140px&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                            width="220px" height="140px" 
                            className='iframe'
                            scrolling="no" frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                        </iframe>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;