import Form from './components/Form'
import Header from './components/Header'
import PackingList from './components/PackingList'
import Stats from './components/Stats'

function App() {
  return (
    <>
      <Header />
      <main>
        <Form />
        <PackingList />
      </main>
      <footer>
        <Stats />
      </footer>
    </>
  )
}

export default App
