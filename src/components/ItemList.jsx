import styles from './itemList.module.css'
import iconBook from '../assets/book.svg'

const ItemList = ({ description, quantity, packed }) => {
  return (
    <div className={styles.itemList_container}>
      <div className={styles.itemList_content}>
        <img src={iconBook} alt='book.svg' />
        <p style={packed ? { textDecoration: 'line-through' } : {}}>
          {quantity}- {description}
        </p>
      </div>
      <div>
        <button className='close'>DELETE</button>
      </div>
    </div>
  )
}

export default ItemList
