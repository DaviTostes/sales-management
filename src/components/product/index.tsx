import { useState } from 'react'
import './styles.css'

const Product = ({productName, value, quantity}: {productName: string, value: number, quantity: number}) => {

  return (
    <div className="product">
      <p className="client-name">Name: {productName}</p>
      <p className="value">{value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</p>
      <div className="quantity-wrapper">
        <button>-</button>
        <p>{quantity}</p>
        <button>+</button>
      </div>
    </div>
  )
}

export default Product