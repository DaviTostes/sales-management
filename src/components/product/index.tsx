import { useEffect, useState } from 'react'
import './styles.css'

const Product = ({productName, value, quantity}: {productName: string, value: number, quantity: number}) => {
  const [quantityChanger, setQuantityChanger] = useState(quantity)

  const handleSubtractQuantity = () => {
    if(quantityChanger>0) {
      let quantity = quantityChanger-1
      setQuantityChanger(quantity)
    }
  }

  const handleAddQuantity = () => {
    let quantity = quantityChanger+1
    setQuantityChanger(quantity)
  }

  return (
    <div className="product">
      <p className="client-name">Name: {productName}</p>
      <p className="value">{value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</p>
      <div className="quantity-wrapper">
        <button onClick={handleSubtractQuantity}>-</button>
        <p>{quantityChanger}</p>
        <button onClick={handleAddQuantity}>+</button>
      </div>
    </div>
  )
}

export default Product