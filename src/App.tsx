import { useState } from 'react'
import './App.css'
import RouteComponent from './routes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <RouteComponent></RouteComponent>
    </>
  )
}

export default App
