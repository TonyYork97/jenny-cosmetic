import React, { useState } from "react";
import { CgHeart } from 'react-icons/cg';
import { CgShoppingCart } from 'react-icons/cg';
import { useSelector } from "react-redux";
import { Cart } from "../cart";
import { Favorites } from "../favorites";
import './nav-right.scss'

export const NavRight = () => {
    const [cartToggle, setCartToggle] = useState(false);
    const [favoritesToggle, setFavoritesToggle] = useState(false);
    const countItems = useSelector(state => state.cart.cartItems.reduce((sum, obj) => {
        return (obj.count + sum)
    }, 0));

    const isActiveFav = favoritesToggle ? 'favorites-active' : '';
    const isActiveContainerBlock = favoritesToggle ? 'favorites__container-active' : '';


    return (
        <div className="nav-right">
            <div className="nav-right__item">
                <CgHeart className="nav-right__heart-icon" onClick={() => setFavoritesToggle(!favoritesToggle)} />
                {<Favorites isActiveFav={isActiveFav} isActiveContainerBlock={isActiveContainerBlock} setFavoritesToggle={setFavoritesToggle} />}
            </div>
            <div className="nav-right__item">
                <div className="nav-right__item-cart" onClick={() => setCartToggle(!cartToggle)}>
                    <CgShoppingCart className="nav-right__cart-icon" />
                    {countItems > 0 ? <span>{countItems}</span> : ''}
                </div>
                {cartToggle && <Cart setCartToggle={setCartToggle} />}
            </div>
        </div>
    )
}