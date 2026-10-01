import React from 'react'

const App = () => {

  function handleFruit(fruitName) {
      console.log(fruitName)

  }

  return (
    <>
      <button onClick={() => {
        handleFruit('Apple')
      }}>Apple</button>
      <button onClick={() => {
        handleFruit('Banana')
      }}>banana</button>
      <button onClick={() => {
        handleFruit('Mango')
      }}>mongo</button>
    </>
  )
}

export default App
