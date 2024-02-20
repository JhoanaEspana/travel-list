import { useState } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import PackingList from './components/PackingList'
import Stats from './components/Stats'

function App() {
  const [items, setItems] = useState([])

  const handleAddItems = (item) => {
    setItems((items) => [...items, item])
  }

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id))
  }

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item))
    )
  }

  const handlerClearList = () => {
    const confirmed = window.confirm('Are you sure you want to delete all items?')

    if (confirmed) setItems([])
  }

  return (
    <>
      <Header />
      <main>
        <Form onAddItems={handleAddItems} />
        <PackingList
          items={items}
          onDeleteItem={handleDeleteItem}
          onToggleItems={handleToggleItem}
          onClearList={handlerClearList}
        />
      </main>
      <footer>
        <Stats items={items} />
      </footer>
    </>
  )
}

export default App
