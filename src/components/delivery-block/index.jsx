import React from 'react'

export const DeliveryBlock = ({ contactBlock, onChange }) => {
  return (
    <div className='input-block'>
      <input
        name='city'
        type='text'
        placeholder='Город'
        onChange={onChange}
        value={contactBlock.city}
      />
      <input
        name='street'
        type='text'
        placeholder='Улица'
        onChange={onChange}
        value={contactBlock.street}
      />
      <input
        name='house'
        type='text'
        placeholder='Дом'
        onChange={onChange}
        value={contactBlock.house}
      />
      <input
        name='flat'
        type='text'
        placeholder='Квартира'
        onChange={onChange}
        value={contactBlock.flat}
      />
    </div>
  )
}
