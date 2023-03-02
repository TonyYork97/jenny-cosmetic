import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { CartItem } from '../../components/cart-item'
import { PaymentForm } from '../../components/payment-form'
import { useResize } from '../../hooks/useResize'
import './order.scss'

export const OrderPage = () => {
  const [shippingCost] = useState('2500')
  const [currentMenu, setCurrentMenu] = useState(1)

  const { width } = useResize()
  const cartItems = useSelector((state) => state.cart.cartItems)
  const totalPrice = useSelector((state) => state.cart.totalPrice)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='order-page'>
      <div className='wrapper'>
        <div className='order'>
          <h3 className='title white f-mak'>Оформление заказа</h3>
          <div className='flex-block'>
            <PaymentForm
              currentMenu={currentMenu}
              setCurrentMenu={setCurrentMenu}
            />
            {width > 768 || (width < 769 && currentMenu === 1) ? (
              <div className='cart-block'>
                <h3>Ваш Заказ</h3>
                <div className='order-goods'>
                  {cartItems.map((item) => (
                    <CartItem
                      // setCartToggle={setCartToggle}
                      key={item.id}
                      {...item}
                    />
                  ))}
                </div>
                <div className='price-block'>
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
                    <div className='price-title'>
                      {totalPrice + +shippingCost} р.
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
