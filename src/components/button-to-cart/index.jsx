import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from "../../redux/cart/reducer";

export const Button = ({ item }) => {
    const dispatch = useDispatch();
    const countItem = useSelector(state => state.cart.cartItems.find(obj => obj.id === item.id))
    const addedCount = countItem ? countItem.count : '';
    const clickToAdd = () => {
        dispatch(addToCart(item));
    }
    return (
        <div className="list-item__in-cart">
            <button onClick={clickToAdd}>В корзину
            </button>
            {addedCount > 0 ? <span className='button__count'>{addedCount}</span> : ''}
        </div>

    )
}
