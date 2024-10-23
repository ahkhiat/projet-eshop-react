import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from "../../utils/context/CartContext";
import useCategories from '../../utils/hooks/useCategories'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart();
  const { categories, isLoaded, error } = useCategories(); 

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl">Mon Shop</h1>

        {/* Menu pour les grands écrans */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-400">Home</Link>
          <Link to="/all" className="text-white hover:text-gray-400">All</Link>
          {categories.map((categorie, index) => (
                <Link  key={index} to={`/category/${categorie}`} className="text-white hover:text-gray-400">{capitalizeFirstLetter(categorie)}</Link>
              ))}
          <Link to="/cart" className="relative text-white hover:text-gray-400">
            <i className="fas fa-shopping-cart"></i>
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartItems.length}
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
            {cartItems > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartItems}
              </span>
            )}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
