import './styles.css'

const Sale = ({clientName, value, date, contact}: {clientName: string, value: number, date: string, contact: string}) => {
  return (
    <div className="sale">
      <p className="client-name">Name: {clientName}</p>
      <p className="value">{value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</p>
      <p className="date">{date}</p>
      <p className="contact">Contact: {contact}</p>
    </div>
  )
}

export default Sale