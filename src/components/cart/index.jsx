import React from "react";
import { CartItem } from '../cart-item'
import { VscChromeClose } from 'react-icons/vsc'
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRef } from "react";
import { CartEmpty } from "../cart-empty";
import { Link } from "react-router-dom";
import './cart.scss';

export const Cart = ({ setCartToggle }) => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalPrice = useSelector(state => state.cart.totalPrice);
    const cartBlockRef = useRef();

    const handleClick = (e) => {
        if (e.target !== cartBlockRef.current) return
        setCartToggle(false);
    }

    useEffect(() => {
        cartBlockRef.current.addEventListener('click', handleClick)
    }, [])

    return (
        <div className="cart__block" ref={cartBlockRef}>


            <div className="cart">
                {cartItems.length !== 0 ?

                    <div className="cart__cart-items">
                        <div className="cart__close">
                            <VscChromeClose size={24} color='white' cursor='pointer' onClick={() => setCartToggle(false)} />
                        </div>
                        <div className="cart__title white">
                            ВАШ ЗАКАЗ:
                        </div>
                        {cartItems.map(item => <CartItem setCartToggle={setCartToggle} key={item.id} {...item} />)}

                        <div className="cart_total-price white">
                            ИТОГО: <span>{totalPrice} <span>руб.</span></span>
                        </div>
                        <div className="cart__order">
                            <Link
                                to={'/order'}
                                onClick={() => setCartToggle(false)}
                            >Оформить заказ</Link>
                        </div>
                    </div>
                    : <CartEmpty setCartToggle={setCartToggle} />}

            </div>
        </div>
    )
}