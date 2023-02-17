import React from 'react'
import { removeFromFavorites } from '../../redux/cart/reducer';
import { useDispatch } from 'react-redux';
import { VscChromeClose } from 'react-icons/vsc'
import { Link } from 'react-router-dom';

export const FavoriteItem = ({ setFavoritesToggle, id, title, price, image, categoty, subCategory, description }) => {
    const dispatch = useDispatch();

    const deleteFavorites = () => {
        dispatch(removeFromFavorites(id))
    }
    return (
        <div className="favorites__item">
            <Link to={`/goods/${id}`} onClick={() => setFavoritesToggle(false)}>
                <div className="favorites__image">
                    <img src={image} alt={title} />
                </div>
            </Link>
            <div className="favorites__title-block">

                <div className="favorites__title">
                    <Link to={`/goods/${id}`} className="white" onClick={() => setFavoritesToggle(false)}>
                        {title}
                    </Link>
                </div>
                <div className="favorites__price white">
                    {price} руб.
                </div>
            </div>
            <div className="favorites__delete">
                <VscChromeClose className='white' onClick={deleteFavorites} size={20} />
            </div>
        </div>
    )
}
