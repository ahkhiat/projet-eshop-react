import { useCart } from "../../utils/context/CartContext"

import './ProductGrid.css';

function ProductGrid({ titre, products }) {

  
    const {addToCart}  = useCart();
  
    return (
    <>
      {/* <div>
        <h1>{titre}</h1>
        <div className="container">
          {products.map(product => (
            <div key={product.id} className="w-56 border text-left rounded-lg p-4 flex flex-col h-full">
            <a href={`/product/${product.id}`} className="text-decoration-none flex-grow">
                <img src={product.image} className="rounded-lg max-w-full h-48 object-contain mx-auto productImg" alt={product.title} />
                <div className="text-black text-lg">{product.price}€</div>
                <span className="block font-normal text-sm text-black mt-2 text-left truncate">{ product.title }</span>
            </a>


            <div className="flex items-center justify-between w-full mt-2">
              <button onClick={() => addToCart(product)} 
                      className="text-xs py-1 px-2 bg-blue-500 text-white rounded">
                Ajouter au panier
              </button>
            </div>
          </div>
          ))}
        </div>
      </div> */}

<div>
      <h1 className="text-2xl font-bold mb-4">{titre}</h1>
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative w-56 border text-left rounded-lg p-4 flex flex-col h-full group hover:shadow-lg transition-shadow"
          >
            <a href={`/product/${product.id}`} className="text-decoration-none flex-grow">
              <img
                src={product.image}
                className="rounded-lg max-w-full h-48 object-contain mx-auto productImg transform transition-transform duration-300 group-hover:scale-105"
                alt={product.title}
              />
              <div className="text-black text-lg mt-2">{product.price}€</div>
              <span className="block font-normal text-sm text-black mt-2 text-left truncate">
                {product.title}
              </span>
            </a>

            {/* Aperçu rapide au survol */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
              <h2 className="text-white text-md font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-200 text-sm mb-4">{product.price}€</p>
              <button
                onClick={() => addToCart(product)}
                className="bg-blue-600 text-white py-1 px-3 rounded-lg hover:bg-blue-500"
              >
                Add to cart
              </button>
              <a
                href={`/product/${product.id}`}
                className="text-white underline hover:text-gray-300 mt-2"
              >
                View details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>

    </>
    )
  }


export default ProductGrid