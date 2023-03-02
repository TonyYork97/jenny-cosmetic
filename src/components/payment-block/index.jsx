import React from 'react'

export const PaymentBlock = ({ contactBlock, onChange }) => {
  return (
    <div className='input-block'>
      <input
        name='cardNum'
        type='text'
        placeholder='Номер карты'
        onChange={onChange}
        value={contactBlock.cardNum}
      />
      <input
        name='cardDate'
        type='text'
        placeholder='Срок карты'
        onChange={onChange}
        value={contactBlock.cardDate}
      />
      <input
        name='cvv'
        type='text'
        placeholder='CVV'
        onChange={onChange}
        value={contactBlock.cvv}
      />
      <button type='submit'>Оплатить</button>
    </div>
  )
}
