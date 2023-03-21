import { useState } from 'react'
import './App.css'

import InventoryCard from './components/inventoryCard'
import SalesCard from './components/salesCard'

function App() {
  const [option, setOption] = useState('')

  const handleChangeToSales = () => {
    setOption('sales')
  }

  const handleChangeToInvnetory = () => {
    setOption('inventory')
  }

  return (
    <div className="App">
      <header>
        <h1>Inventory and Sales Manangement</h1>
        <p>Made by <a target="_blank" href="https://github.com/davitostes">Davi Tostes</a></p>
      </header>
      <main>
        <div className="option-wrapper">
          <button onClick={handleChangeToSales}>Sales</button>
          <button onClick={handleChangeToInvnetory}>Inventory</button>
        </div>
        <div className="option">
          {option === 'sales' ? <SalesCard/> : ''}
          {option === 'inventory' ? <InventoryCard/> : ''}
        </div>
      </main>
    </div>
  )
}

export default App
