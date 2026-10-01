import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState("")
  
  const submithandler = (e) => {
    e.preventDefault()
    console.log('form submit hoo raha hai sahi hai bahi', title)
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
          onChange={(e) => { console.log(e.target.value); }}
        />

        <textarea
          class="px-5 w-full font-medium h-32 py-2 border-2 outline-none rounded"
          placeholder="Write Details here"
          value={title}
          onChange={(e) => { console.log(e.target.value); }}
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


          <div
            class="flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"
          >

            <div>
              <h3 class="leading-tight text-lg font-bold">
                Learn React
              </h3>

              <p class="mt-2 leading-tight text-xs font-semibold text-gray-600">
                Learn components, props, state and events.
              </p>
            </div>

            <button
              class="w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white"
            >
              Delete
            </button>

          </div>


          <div
            class="flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"
          >

            <div>
              <h3 class="leading-tight text-lg font-bold">
                JavaScript Practice
              </h3>

              <p class="mt-2 leading-tight text-xs font-semibold text-gray-600">
                Practice functions, arrays and objects.
              </p>
            </div>

            <button
              class="w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white"
            >
              Delete
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default App
