import React from 'react'
import axios from 'axios'

const App = () => {

  const gatData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(response);
  }

  return (
    <div>
      <button onClick={gatData}>Get Data</button>
    </div>
  )
}

export default App
