import React, { useEffect } from 'react';
import { VscChromeClose } from 'react-icons/vsc'
import { FavoriteItem } from '../favorite-item';
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import './favorites.scss'

export const Favorites = ({ isActiveFav, setFavoritesToggle, isActiveContainerBlock }) => {
    const items = useSelector(state => state.cart.favorites);
    const favoritesRef = useRef();


    return (
        <>
            <div className={`favorites__container ${isActiveContainerBlock}`} onClick={() => setFavoritesToggle(false)}></div>
            <div className={`favorites ${isActiveFav}`} ref={favoritesRef}>
                <div className="favorites__close">
                    <VscChromeClose className='white' onClick={() => setFavoritesToggle(false)} size={30} />
                </div>
                <div className="favorites__name">
                    <h3 className='white'>Избранное:</h3>
                </div>
                <div className="favorites__block">
                    {items.map(item => <FavoriteItem key={item.id} setFavoritesToggle={setFavoritesToggle} {...item} />)}
                </div>
            </div>
        </>
    )
}
