import { useCart } from "../../utils/context/CartContext"

import './ProductGrid.css';

function ProductGrid({ titre, products }) {

  
    const {addToCart}  = useCart();
  
    return (
    <>
      <div>
        <h1>{titre}</h1>
        <div className="container">
          {products.map(product => (
            <div key={product.id} className="w-56 border text-left rounded-lg p-4 flex flex-col   h-full">
            <a href={`/product/${product.id}`} className="text-decoration-none flex-grow">
                <img src={product.image} className="rounded-lg max-w-full h-48 object-contain mx-auto productImg" alt={product.title} />
                <div className="text-black text-lg">{product.price}€</div>
                <span className="block font-normal text-xs text-black mt-2 text-left truncate">{ product.title }</span>
            </a>
            {/* <div className="flex items-center justify-between w-full mt-2">
              <button onClick={() => addToCart(product)} 
                      className="text-xs py-1 px-2 bg-blue-500 text-white rounded">
                Ajouter au panier
              </button>
            </div> */}
          </div>
          ))}
        </div>
      </div>
    </>
    )
  }


export default ProductGrid