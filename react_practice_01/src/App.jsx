import Parent from './components/Parent'

const App = () => {
  function handleMessage(message) {
   console.log("child",message)
  }
  return (
    <div>
 
      <Parent message={handleMessage} />
    </div>
  )
}

export default App