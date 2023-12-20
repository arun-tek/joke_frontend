import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  useEffect(() =>{
    axios.get("/api/jokes").then((response) => {
      setJokes(response.data);
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  const [jokes, setJokes] = useState([])

  return (
    <>
      <h1>The Joke Show</h1>
      <p>{jokes.length}</p>
      {
        jokes.map((joke, index, arr) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
