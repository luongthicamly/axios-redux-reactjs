import React from 'react';
import './home.scss';
import BannerHome from '../../includes/BannerHome';
import HotProduct from '../../includes/HotProduct';

function Home() {
    return (
        <div>
          <BannerHome/>
          <HotProduct/>
        </div>
    );
}

export default Home;