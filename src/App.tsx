import { useState } from 'react'
import './App.css'
import RouteComponent from './routes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<<<<<<< HEAD
        <RouteComponent></RouteComponent>
=======
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
>>>>>>> 3a0a8ed6c7c99449d65c1c7b21d79a15f0da80bd
    </>
  )
}

export default App
