import ItemList from './ItemList'
import style from './packingList.module.css'
import Card from './ui/Card'

const PackingList = ({ items, onDeleteItem, onToggleItems }) => {
  return (
    <div className={style.packinglist__container}>
      <Card>
        {items.map((items) => (
          <ItemList
            onDeleteItem={onDeleteItem}
            onToggleItems={onToggleItems}
            key={items.id}
            description={items.description}
            quantity={items.quantity}
            packed={items.packed}
            id={items.id}
            checked={items.checked}
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
