import React, { useState } from 'react'
import { X } from 'lucide-react'

const App = () => {

  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")

  const [task, setTask] = useState([])

  const submithandler = (e) => {
    e.preventDefault()

    const copyTask = [...task]
    copyTask.push({ title, details })

    setTask(copyTask)

    setTitle("")
    setDetails("")
  }
  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }

  return (
    <div class="h-screen lg:flex bg-black text-white">


      <form onSubmit={submithandler} class="flex gap-4 lg:w-1/2 p-10 flex-col items-start">

        <h1 class="text-4xl mb-2 font-bold">Add Notes</h1>


        <input
          type="text"
          placeholder="Enter Notes Heading"
          class="px-5 w-full font-medium py-2 border-2 outline-none rounded"
          value={title}
          onChange={(e) => { setTitle(e.target.value); }}
        />

        <textarea
          class="px-5 w-full font-medium h-32 py-2 border-2 outline-none rounded"
          placeholder="Write Details here"
          value={details}
          onChange={(e) => { setDetails(e.target.value); }}
        ></textarea>

        <button
          type="submit"
          class="bg-white active:scale-95 font-medium w-full outline-none text-black px-5 py-2 rounded"
        >
          Add Note
        </button>

      </form>


      <div class="lg:w-1/2 lg:border-l-2 p-10">

        <h1 class="text-4xl font-bold">Recent Notes</h1>

        <div class="flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto">

          {task.map(function (elem, idx) {
            return (
              <div key={idx} class="w-[300px] h-[200px] bg-black text-black rounded p-5 flex bg-cover flex-col gap-2 bg-[url('https://img.magnific.com/premium-vector/simple-vector-yellow-note-pad-page_519469-5010.jpg')]">
                <h1 onClick={()=>{
                  deleteNote(idx)
                }}><X /></h1>
                <h1 class="text-2xl font-bold">{elem.title}</h1>
                <p class="text-lg">{elem.details}</p>
              </div>
            )
          })}

        </div>

      </div>

    </div>
  )
}

export default App
