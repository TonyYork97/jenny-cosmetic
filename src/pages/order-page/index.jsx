import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { CartItem } from '../../components/cart-item'
import './order.scss'

export const OrderPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [shippingCost, setShippingCost] = useState('2500')
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  return (
    <div className='order-page'>
      <div className='wrapper'>
        <div className="order">
          <h3 className="title white f-mak">Оформление заказа</h3>
          <div className="flex-block">
            <div className="contact-block">
              <div className="info">
                <div className="info-title">
                  <div className="number">1</div>
                  <h3>Контактная информация</h3>
                </div>
                <div className="input-block">
                  <input type="text" placeholder='Ф.И.О.' />
                  <input type="tel" placeholder='Номер телефона' />
                  <input type="email" placeholder='Эл. почта' />
                </div>
              </div>
              <div className="info">
                <div className="info-title" onClick={() => setIsOpen(!isOpen)}>
                  <div className="number">2</div>
                  <h3>Доставка</h3>
                </div>
                <div className={`input-block ${isOpen ? 'open' : ''}`}>
                  <input type="text" placeholder='Город' />
                  <input type="text" placeholder='Улица' />
                  <input type="text" placeholder='Дом' />
                  <input type="text" placeholder='Квартира' />
                </div>
              </div>
              <div className="info">
                <div className="info-title">
                  <div className="number">3</div>
                  <h3>Оплата</h3>
                </div>
                <div className="input-block">
                  <input type="text" placeholder='Номер карты' />
                  <input type="text" placeholder='Срок карты' />
                  <input type="text" placeholder='CVV' />
                </div>
              </div>
            </div>
            <div className="cart-block">
              <h3>Ваш Заказ</h3>
              <div className='order-goods'>
                {cartItems.map(item => <CartItem
                  // setCartToggle={setCartToggle}
                  key={item.id}
                  {...item}
                />)}

              </div>
              <div className="price-block">
                <div className='price'>
                  <div className='price-title'>Стоимость заказа</div>
                  <div className='price-title'>{totalPrice} р.</div>
                </div>
                <div className='price'>
                  <div className='price-title'>Стоимость доставки</div>
                  <div className='price-title'>{shippingCost} р.</div>
                </div>
                <div className='price'>
                  <div className='price-title bold'>Итого</div>
                  <div className='price-title'>{totalPrice + +shippingCost} р.</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
