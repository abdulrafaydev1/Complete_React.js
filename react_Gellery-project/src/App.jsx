import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {

  const [userData, setUserData] = useState([])

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list?page=1&limit=100')
    setUserData(response.data)
    console.log(response.data);
  }

  let checkUser = 'User is not avaible'

  if (userData.length > 0) {
    checkUser = userData.map(function (elem) {
      return (
        <div >
          <img className="h-20" src={elem.download_url} alt="" />
        </div>
      )
    })
  }


  return (
    <div className='h-full h-screen w-full overflow-auto bg-black text-white'>
      <button onClick={getData} className='bg-green-600 active:bg-green-700 active:scale-80 mb-3 px-6 py-2 rounded text-white'>Get data</button>
      <div className="flex flex-wrap gap-2">
        {checkUser}
      </div>
    </div>
  )
}

export default App
