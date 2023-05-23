import React from 'react'
import './button.css'

const Button = ({btnName}) => {
  return (
    <div className='bt'><button>{btnName}</button>
    </div>
  )
}

export default Button;