import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Login from './pages/Page1';
import Home from './pages/Page2';
import Information from './pages/Page3';
import Register from './pages/Page4';
import PageError from './pages/Page5';

export default function RouteComponent () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login></Login>}></Route>
                <Route path='/home' element={<Home></Home>}></Route>
                <Route path='/informacao' element={<Information></Information>}></Route>
                <Route path='/registro' element={<Register></Register>}></Route>
                <Route path='*' element={<PageError></PageError>}></Route>
            </Routes>
        </BrowserRouter>        
    )
}