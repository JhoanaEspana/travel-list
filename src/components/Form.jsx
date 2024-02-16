import { useState } from 'react'
import styles from './form.module.css'
import Card from './ui/Card'

const Form = () => {
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState(1)

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!description) return

    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    }
    setDescription('')
    setQuantity(1)
    console.log(newItem)
  }

  return (
    <div className={styles.form__container}>
      <Card>
        <p>What do you need for your trip?</p>
        <div className={styles.form__content}>
          <form onSubmit={handleSubmit}>
            <select
              name=''
              id=''
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            >
              <option defaultValue='selected' value='0'>
                #
              </option>
              {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                <option value={num} key={num}>
                  {num}
                </option>
              ))}
            </select>
            <input
              type='text'
              placeholder='Item...'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button>ADD</button>
          </form>
        </div>
      </Card>
    </div>
  )
}

export default Form
