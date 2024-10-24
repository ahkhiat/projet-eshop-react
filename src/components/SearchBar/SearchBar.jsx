import { useState, useEffect } from 'react';
import useFetchProducts from '../../utils/hooks/useFetchProducts';
import { Link } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { products, isLoading, error } = useFetchProducts(); // Récupérer tous les produits
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  useEffect(() => {
    if (searchTerm) {
      // Filtrer les produits uniquement si un terme de recherche est présent
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
      setIsDropdownVisible(true); // Afficher le menu déroulant lorsque la recherche est active
    } else {
      // Si le champ de recherche est vide, cacher le menu déroulant
      setFilteredProducts([]);
      setIsDropdownVisible(false);
    }
  }, [searchTerm, products]);

  const handleBlur = () => {
    // Retarder le masquage du menu pour laisser le temps de cliquer
    setTimeout(() => setIsDropdownVisible(false), 150);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setIsDropdownVisible(false);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Rechercher un produit..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setIsDropdownVisible(true)}
        onBlur={handleBlur} 
        className="p-2 border rounded w-full"
      />

        {/* Symbole de la croix */}
        {searchTerm && (
            <button
                onClick={handleClearSearch}
                className="w-4 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 flex items-center justify-center"
                >
                <i className="fa-solid fa-xmark h-4 w-4"></i>
          </button>
          
        )}

        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
      
        {/* Menu déroulant */}
        {isDropdownVisible && filteredProducts.length > 0 && (
            <ul className="absolute z-10 bg-white border text-black border-gray-300 w-full max-h-60 overflow-auto shadow-lg">
            {filteredProducts.map(product => (
                <li
                key={product.id}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onMouseDown={() => setSearchTerm(product.title)} 
                >
                    <Link
                        to={`/product/${product.id}`} 
                        className="block text-gray-800 hover:text-blue-500"
                    >{product.title}</Link>
                
                </li>
            ))}
            </ul>
        )}
    </div>
  );
};

export default SearchBar;
