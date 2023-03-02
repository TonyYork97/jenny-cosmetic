import React, { useState } from 'react'
import { ContactInfo } from '../contact-info-block'
import { DeliveryBlock } from '../delivery-block'
import { PaymentBlock } from '../payment-block'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clearCart } from '../../redux/cart/reducer'

export const PaymentForm = ({ currentMenu, setCurrentMenu }) => {
  const [contactBlock, setContactBlock] = useState({
    name: '',
    tel: '',
    email: '',
    city: '',
    street: '',
    house: '',
    flat: '',
    cardNum: '',
    cardDate: '',
    cvv: '',
  })
  const [error, setError] = useState('')
  const [successful, setSuccessful] = useState(false)
  const [time, setTime] = useState(3)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const name = e.target.name
    setContactBlock({
      ...contactBlock,
      [name]: e.target.value,
    })
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      !contactBlock.name.trim() ||
      !contactBlock.tel.trim() ||
      !contactBlock.email.trim() ||
      !contactBlock.city.trim() ||
      !contactBlock.street.trim() ||
      !contactBlock.house.trim() ||
      !contactBlock.flat.trim() ||
      !contactBlock.cardNum.trim() ||
      !contactBlock.cardDate.trim() ||
      !contactBlock.cvv.trim()
    ) {
      setError('Заполните все данные')
      return
    }

    setSuccessful(true)
    const timeNavigate = setInterval(() => {
      setTime((time) => time - 1)
      if (time === 0) clearInterval(timeNavigate)
    }, 1000)
    const rmOrder = setTimeout(() => {
      clearOrder()
    }, 3000)
    // clearTimeout(rmOrder)
  }

  const clearOrder = () => {
    setSuccessful(false)
    navigate('/', { replace: true })
    dispatch(clearCart())
  }

  return (
    <div className='order-form'>
      <form onSubmit={handleSubmit}>
        {successful && (
          <div className='payment-successful'>
            <div className='payment-successful-block'>
              <div className='payment-successful-title'>
                <span>Спасибо за заказ!</span>
              </div>
              <div>
                <span>{time}</span>
              </div>
              <button onClick={clearOrder}>Перейти на главную</button>
            </div>
          </div>
        )}
        {error && <div className='payment-error'>{error}</div>}
        <div className='contact-block'>
          {currentMenu === 1 ? (
            <div className='info'>
              <div className='info-title'>
                <div className='number'>1</div>
                <h3>Контактная информация</h3>
              </div>
              <ContactInfo
                contactBlock={contactBlock}
                setContactBlock={setContactBlock}
                onChange={handleChange}
              />
            </div>
          ) : currentMenu === 2 ? (
            <div className='info'>
              <div className='info-title'>
                <div className='number'>2</div>
                <h3>Доставка</h3>
              </div>
              <DeliveryBlock
                contactBlock={contactBlock}
                onChange={handleChange}
              />
            </div>
          ) : (
            <div className='info'>
              <div className='info-title'>
                <div className='number'>3</div>
                <h3>Оплата</h3>
              </div>
              <PaymentBlock
                contactBlock={contactBlock}
                onChange={handleChange}
              />
            </div>
          )}
        </div>
      </form>
      <div className='contact-btns'>
        <div className='btn-group'>
          {currentMenu > 1 ? (
            <button
              onClick={() => {
                setCurrentMenu(currentMenu - 1)
                window.scrollTo(0, 0)
              }}
            >
              Назад
            </button>
          ) : (
            ''
          )}
          {currentMenu < 3 ? (
            <button
              onClick={() => {
                setCurrentMenu(currentMenu + 1)
                window.scrollTo(0, 0)
              }}
            >
              Далее
            </button>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}
