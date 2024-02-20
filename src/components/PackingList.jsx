import { useState } from 'react'
import Item from './Item'
import style from './packingList.module.css'
import Card from './ui/Card'

const PackingList = ({ items, onDeleteItem, onToggleItems, onClearList }) => {
  const [sortBy, setSortBy] = useState('input')
  let sortedItems

  if (sortBy === 'input') sortedItems = items

  if (sortBy === 'description')
    sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description))

  if (sortBy === 'packed')
    sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed))

  return (
    <div className={style.packinglist__container}>
      <Card>
        {sortedItems.map((items) => (
          <Item
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
      <div className={style.packinglist__form}>
        <select
          style={{ width: '200px', marginRight: '13px' }}
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value='input'>Sort by input order</option>
          <option value='description'>Sort by description</option>
          <option value='packed'>Sort by packed status</option>
        </select>
        <button onClick={onClearList} disabled={sortedItems.length === 0}>
          CLEAR LIST
        </button>
      </div>
    </div>
  )
}

export default PackingList
