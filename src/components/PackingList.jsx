import ItemList from './ItemList'
import style from './packingList.module.css'
import Card from './ui/Card'

const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: true },
]

const PackingList = () => {
  return (
    <div className={style.packinglist__container}>
      <Card>
        {initialItems.map((items) => (
          <ItemList
            key={items.id}
            description={items.description}
            quantity={items.quantity}
            packed={items.packed}
          />
        ))}
      </Card>
      <form className={style.packinglist__form}>
        <select name='' id='' style={{ width: '200px', marginRight: '13px' }}>
          <option defaultValue='selected' value='0'>
            Sort by input order
          </option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
        <button>CLEAR LIST</button>
      </form>
    </div>
  )
}

export default PackingList
