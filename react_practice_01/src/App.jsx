import Counter from './components/Counter'
import Parent from './components/Parent'

const App = () => {
  return (
    <div>
      <Parent
        name='Abdul Rafay'
        age={18}
        city='Karachi'
      />
    </div>
  )
}

export default App