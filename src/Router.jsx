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
import ProductPage from './components/ProductPage/ProductPage';
import Cart from './components/Cart/Cart';
import { CartProvider } from './utils/context/CartContext';

function Router() {
  return (
    <CartProvider>
        <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/all" element={<AllProducts />}></Route>
                    <Route path="/category/:categoryName" element={<Products />} />
                    <Route path="/logout" element={<Logout />}></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                    <Route path="/product/:id" element={<ProductPage />} /> {/* Ajoutez cette ligne */}

                </Routes>
        </BrowserRouter>
    </CartProvider>
)
}

export default Router