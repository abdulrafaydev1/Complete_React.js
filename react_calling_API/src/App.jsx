import axios from "axios"

const App = async () => {

  const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
  console.log(response)

}
return (
  <div>
    <button onClick={getData}>Get Data</button>
  </div>
)


export default App
