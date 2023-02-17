import React from 'react';
import { GoPlus } from 'react-icons/go';
import { HiMinus } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, minusClick, addToCart } from '../../redux/cart/reducer';

export const CartItem = (
    {
        id,
        image,
        title, count,
        price,
        category,
        subCategory,
        subTitle,
        setCartToggle
    }) => {


    const dispatch = useDispatch();
    const removeClick = () => {
        dispatch(removeFromCart(id))
    }
    const clickToMinus = () => {
        dispatch(minusClick(id))

    }
    const clickToAdd = () => {
        dispatch(addToCart({
            id,
            image,
            title,
            count,
            price,
            category,
            subCategory,
            subTitle
        }))
    }
    return (
        <div className="cart__item">
            <div className="cart__item-image">
                <Link
                    to={`/goods/${id}`}
                    onClick={() => setCartToggle(false)}>
                    <img src={image} alt="" />
                </Link>
            </div>
            <div className="cart__item-block">
                <div className="cart__item-title ">
                    <Link
                        to={`/goods/${id}`}
                        className="white"
                        onClick={() => setCartToggle(false)}>
                        {title}
                    </Link>
                </div>
                <div className="cart__item-price-count">
                    <div className="cart__item-count-block">
                        <div className="cart__item-minus">
                            <HiMinus
                                className='white'
                                onClick={clickToMinus}
                                size={20}
                                cursor='pointer'
                            />
                        </div>
                        <div className="cart__item-count white">{count}</div>
                        <div className="cart__item-plus">
                            <GoPlus
                                className='white'
                                onClick={clickToAdd}
                                size={20}
                                cursor='pointer'
                            />
                        </div>
                    </div>
                    <div className="cart__item-price white">
                        {count * price}<span>руб.</span>
                    </div>

                </div>
            </div>
            <div className="cart__item-delete">
                <MdClose
                    className='white'
                    onClick={removeClick}
                    size={25}
                    cursor='pointer'
                />
            </div>
        </div >
    )
}
