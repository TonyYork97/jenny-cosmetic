import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { CartItem } from '../../components/cart-item'
import { useResize } from '../../hooks/useResize';
import './order.scss'

export const OrderPage = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [shippingCost, setShippingCost] = useState('2500')
  const [currentMenu, setCurrentMenu] = useState(1);
  const { width } = useResize()
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalPrice = useSelector(state => state.cart.totalPrice);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='order-page'>
      <div className='wrapper'>
        <div className="order">
          <h3 className="title white f-mak">Оформление заказа</h3>
          <div className="flex-block">
            <div className="contact-block">
              {currentMenu === 1
                ? <div className="info">
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
                :
                currentMenu === 2
                  ? <div className="info">
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
                  : <div className="info">
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
              }
              <div className='contact-btns'>
                <div className='btn-group'>
                  {currentMenu > 1 ? <button onClick={() => {
                    setCurrentMenu(currentMenu - 1)
                    window.scrollTo(0,0)
                  }}>Назад</button> : ''}
                  {currentMenu < 3 ? <button onClick={() => {
                    setCurrentMenu(currentMenu + 1)
                    window.scrollTo(0,0)
                  }}>Далее</button> : ''}
                  {currentMenu === 3 ? <button>Оплатить</button> : ''}
                </div>
              </div>


            </div>
            {width > 768 || (width < 769 && currentMenu === 1)
              ? <div className="cart-block">
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
              : ''
            }


          </div>
        </div>
      </div>
    </div>
  )
}
