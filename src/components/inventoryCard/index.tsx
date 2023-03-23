import { useEffect, useState } from 'react'
import './styles.css'

import Product from '../product'

const InventoryCard = () => {
  const [products, setProducts] = useState(Array<{productName : string, value : number, quantity: number}>)

  const handleChangeDisplay = (state : string) => {
    const input = document.querySelector<HTMLElement>('.input')
    input != null ? input.style.display = state : ''
  }

  const handleAddNewProduct = () => {
    handleChangeDisplay('block')
  }

  const handleSaveProduct = () => {
    const input = document.querySelector<HTMLElement>('.input')
    let newProduct = {
      productName: (input?.children[0] as HTMLInputElement).value, 
      value: parseFloat((input?.children[1] as HTMLInputElement).value), 
      quantity : parseInt((input?.children[2] as HTMLInputElement).value)
    }
    setProducts([newProduct, ...products])

    handleChangeDisplay('none')
  }

  useEffect(() => {
    handleChangeDisplay('none')
  }, [])

  return (  
    <div className="inventoryCard">
      <div className="input-wrapper">
        <button onClick={handleAddNewProduct}>Add new sale</button>
        <div className="input">
          <input type="text" placeholder='Product name:' />
          <input type="number" placeholder='Value:' />
          <input type="number" placeholder='Quantity:' />
          <button onClick={handleSaveProduct}>Submit</button>
        </div>
      </div>
      <div className="output-wrapper">
        {products.map((product, index) => 
          <Product 
            key={index}
            productName={product.productName}
            value={product.value}
            quantity={product.quantity}
          />
        )}
      </div>
    </div>
  )
}

export default InventoryCard