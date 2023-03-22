import './styles.css'

const Sale = ({clientName, value, date, contact, id}: {clientName: string, value: number, date: string, contact: string, id: number}) => {
  return (
    <div className="sale">
      <p className="client-name">{clientName}</p>
      <p className="value">{value}</p>
      <p className="date">{date}</p>
      <p className="contact">{contact}</p>
    </div>
  )
}

export default Sale