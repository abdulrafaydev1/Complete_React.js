import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {

  const [userData, setUserData] = useState([])

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
    setUserData(response.data)
    console.log(response.data);

  }

  return (
    <div className='h-full bg-black text-white'>
      <button onClick={getData} className='bg-green-600 active:bg-green-700 active:scale-80 mb-3 px-6 py-2 rounded text-white'>Get data</button>
      <div>
        {userData.map(function (elem) {
          return <img src={elem.download_url} alt="" />
        })}
      </div>
    </div>
  )
}

export default App
