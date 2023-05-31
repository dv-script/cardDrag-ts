import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './pages/Auth/Login'
import Home from './pages/Home/'
import About from './pages/About/'
import Register from './pages/Auth/Register'
import PageError from './pages/PageError'

export default function RouteComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/sobre' element={<About></About>}></Route>
        <Route path='/registrar' element={<Register></Register>}></Route>
        <Route path='*' element={<PageError></PageError>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
