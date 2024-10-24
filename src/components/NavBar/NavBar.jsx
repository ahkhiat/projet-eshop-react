import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from "../../utils/context/CartContext";
import useCategories from '../../utils/hooks/useCategories'
import SearchBar from '../SearchBar/SearchBar';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems, totalItemsInCart } = useCart();
  const { categories, isLoaded, error } = useCategories(); 

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl">Mon Shop</h1>

        {/* Menu pour les grands écrans */}
        
        {/* SearchBar */}
        {/* <form className="max-w-md mx-auto hidden md:flex">   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <input type="search" id="default-search" className="block w-full p-2 ps-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search product..." required />
                <button type="submit" className="text-white absolute  end-0.5 bottom-0.5 text-xs bg-gray-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-800 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </form> */}
        <SearchBar />

        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-400">Home</Link>
          <Link to="/all" className="text-white hover:text-gray-400">All</Link>
          {categories.map((categorie, index) => (
                <Link  key={index} to={`/category/${categorie}`} className="text-white hover:text-gray-400">{capitalizeFirstLetter(categorie)}</Link>
              ))}
          <Link to="/cart" className="relative text-white hover:text-gray-400">
            <i className="fas fa-shopping-cart"></i>
            {totalItemsInCart > 0 && (
              <span className="absolute -top-1 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalItemsInCart}
              </span>
            )}
          </Link>
        </div>

        {/* Bouton burger pour les petits écrans */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {/* Menu déroulant pour les petits écrans */}
      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <Link to="/" className="block px-4 py-2 text-white hover:bg-gray-600">Home</Link>
          <Link to="/all" className="block px-4 py-2 text-white hover:bg-gray-600">All</Link>
          <Link to="/cart" className="block px-4 py-2 text-white hover:bg-gray-600 relative">
            Mon Panier
            {totalItemsInCart > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalItemsInCart}
              </span>
            )}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
