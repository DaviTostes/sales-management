import { useEffect, useState } from 'react'
import Sale from '../sale'
import './styles.css'

const SalesCard = () => {
  const [sales, setSales] = useState(Array<{clientName: string, value: number, date: string, contact: string}>)

  const handleChangeDisplay = (state : string) => {
    const input = document.querySelector<HTMLElement>('.input')
    input != null ? input.style.display = state : ''
  }
  
  const handleAddNewSale = () => {
    handleChangeDisplay('block')
  }

  const handleSaveSale = () => {
    const input = document.querySelector<HTMLElement>('.input')
    let newSale = {
      clientName: (input?.children[0] as HTMLInputElement).value, 
      value: parseFloat((input?.children[1] as HTMLInputElement).value), 
      date: (input?.children[2] as HTMLInputElement).value, 
      contact: (input?.children[3] as HTMLInputElement).value,
    }
    setSales([newSale, ...sales])

    handleChangeDisplay('none')
  }

  useEffect(() => {
    handleChangeDisplay('none')
  }, [])

  return (
    <div className="salesCard">
      <div className="input-wrapper">
        <button onClick={handleAddNewSale}>Add new sale</button>
        <div className="input">
          <input type="text" placeholder='Client name' id='clientName' required />
          <input type="number" placeholder='Value' id='value' required />
          <input type="date" id='date' required />
          <input type="text" placeholder='contact' id='contact' />
          <button onClick={handleSaveSale}>Submit</button>
        </div>
      </div>
      <div className="output-wrapper">
        {sales.map((sale, index) =>         
          <Sale 
            key={index} 
            clientName={sale.clientName}
            value={sale.value}
            date={sale.date}
            contact={sale.contact}
          />)}
      </div>
    </div>
  )

}

export default SalesCard