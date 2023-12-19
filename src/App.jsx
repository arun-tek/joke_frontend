import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([
    {
        "id": 1,
        "title": "first joke",
        "content": "This is first joke"
    },
    {
        "id": 2,
        "title": "second joke",
        "content": "This is second joke"
    },
    {
        "id": 3,
        "title": "third joke",
        "content": "This is third joke"
    },
    {
        "id": 4,
        "title": "fourth joke",
        "content": "This is fourth joke"
    },
    {
        "id": 5,
        "title": "Fifth joke",
        "content": "This is Fifth joke"
    }
])

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
