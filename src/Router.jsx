import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/NavBar/NavBar';
import Login from './components/Login/Login'
import Logout from './components/Logout/Logout'
import AllProducts from './components/AllProducts/AllProducts';
import Products from './components/Products/Products';

function Router() {
  return (
    <BrowserRouter>

        <Navbar />

        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/all" element={<AllProducts />}></Route>
            <Route path="/category/:categoryName" element={<Products />} />
            <Route path="/logout" element={<Logout />}></Route>
        </Routes>

    </BrowserRouter>
)
}

export default Router