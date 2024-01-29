import { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  const [jokes , setJokes] = useState([])


useEffect(()=>{
    axios.get("/api/jokes")
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
})

  return (
   <>
   <h1>Chai and Backend</h1>
   <p>Jokes : {jokes.length}</p>
   
   
    {
    jokes.map((joke) =>(
      <div key = {jokes.ID}>
        <h2>{joke.Title}</h2>
        <p>{joke.Content}</p>
      </div>
    ))
    }



   </>
  )
}

export default App
