import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites } from "../../redux/cart/reducer";
import { CgHeart } from 'react-icons/cg';

export const ButtonFavorite = ({ item }) => {
    const dispatch = useDispatch();
    const isFav = useSelector(state => state.cart.favorites.find(obj => obj.id === item.id))
    const addFav = isFav ? 'favorites_active' : '';
    const addFavBack = isFav ? 'favorites_active-back' : '';
    const clickToFav = () => {
        dispatch(addToFavorites(item))
    }
    return (
        <div className={`list-item__favourites ${addFavBack}`}>
            <CgHeart className={`list-item__icon-heart ${addFav}`} onClick={clickToFav} size={30} />
        </div>
    )
}
