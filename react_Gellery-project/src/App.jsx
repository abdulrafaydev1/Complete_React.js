import axios from "axios";

const App = () => {

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
    console.log(response.data)
  }

  return (
    <div className='h-screen bg-black text-white'>
      <button onClick={getData} className='bg-green-600 active:bg-green-700 active:scale-80 mb-3 px-6 py-2 rounded text-white'>Get data</button>
    </div>
  )
}

export default App
