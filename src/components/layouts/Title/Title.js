import React from 'react'
import './title.css'
export const Title = ({title}) => {
  return (
    <div className='title'>
      <h1 className='main-title'>
        {title}
      </h1>
    </div>
  )
}
