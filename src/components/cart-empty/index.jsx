import React from 'react';
import { Link } from 'react-router-dom';
import './cart-empty.scss';

export const CartEmpty = ({ toggleModal }) => {
    return (
        <div className='cart-empty'>
            <p className='cart-empty__title white'>В корзине пусто 🙁</p>
            <p className='cart-empty__text white'>
                Чтобы добавить товар в корзину перейдите в <Link onClick={toggleModal} to='/all-catalog'>каталог</Link>
            </p>
        </div>
    )
}
