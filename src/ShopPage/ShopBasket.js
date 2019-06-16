import React from 'react';
import shopBasket from './img/shop-basket.png';
import Shop from "../MainPage/nav-bar/Shop";

const ShopBasket = ( props ) => {
    return(
        <div id = 'shop-basket' >
            <img src = { shopBasket } />
        </div>
    );
}

export default ShopBasket;