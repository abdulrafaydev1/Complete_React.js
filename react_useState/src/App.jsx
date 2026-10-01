const App = () => {

  const a = 20;

  function changeAValue(){
    a = 30
  }
  
  return (
    <div>

          <h1>value a is {a}</h1>
          <button onClick={changeAValue}>Click</button>
    </div>
  )
}

export default App
