import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './pages/Auth/Login'
import Home from './pages/Home/'
import About from './pages/About/'
import SignUp from './pages/Auth/SignUp'
import PageError from './pages/PageError'

export default function RouteComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<PageError></PageError>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
