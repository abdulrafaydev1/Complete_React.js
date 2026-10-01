import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(response.data)
    console.log(response.data);
  }

  useEffect(() => {
    getData()
  }, [index])


  let checkUser = 'User is not avaible Wait'

  if (userData.length > 0) {
    checkUser = userData.map(function (elem) {
      return (
        <div>
          <a href={elem.url} target="_blank" rel="noopener noreferrer">
            <div className="h-20 w-30 rotate-0 hover:rotate-180 transition-all duration-500 ease-in-out overflow-hidden rounded">
              <img className="h-20 active:scale-90" src={elem.download_url} alt="" />
            </div>
          </a>
          <h1 className="text-[10px] bg-white text-black text-center">{elem.author}</h1>
        </div>
      )
    })
  }


  return (
    <div className='h-full h-screen w-full overflow-auto bg-black text-white'>
      <div className="flex flex-wrap gap-2">
        {checkUser}
      </div>
      <h1>{index}</h1>
      <div id="rafay" className="flex justify-center items-center p-4 gap-5">
        <button onClick={() => {
          if (index > 1) {
            setIndex(index - 1)
          }
        }} className="bg-gray-500 w-15 h-7 text-center rounded-2xl text-[14px] active:scale-90 active:bg-amber-500 active: cursor-pointer">Prev</button>
        <button onClick={() => {
          if (index < 5) {
            setIndex(index + 1)
          }
        }} className="bg-gray-500 w-15 h-7 text-center rounded-2xl text-[14px] active:scale-90 active:bg-amber-500 active: cursor-pointer">Next</button>
      </div>
    </div>
  )
}

export default App
