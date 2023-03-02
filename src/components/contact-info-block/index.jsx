import React from 'react'

export const ContactInfo = ({ contactBlock, onChange }) => {
  return (
    <div className='input-block'>
      <input
        name='name'
        type='text'
        placeholder='Ф.И.О.'
        value={contactBlock.name}
        onChange={onChange}
      />
      <input
        name='tel'
        type='tel'
        placeholder='Номер телефона'
        value={contactBlock.tel}
        onChange={onChange}
      />
      <input
        name='email'
        type='email'
        placeholder='Эл. почта'
        value={contactBlock.email}
        onChange={onChange}
      />
    </div>
  )
}
