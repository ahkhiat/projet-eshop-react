import { useCart } from "../../utils/context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, addToCart, totalItemsInCart } = useCart();

  return (
    <div className="container mx-auto p-8">
    <h1 className="text-2xl font-bold mb-6 text-gray-900">Mon Panier</h1>

      <div className="flex flex-col md:flex-row md:space-x-8">
        {/* Panier à gauche */}
        <div className="cart-container w-full md:w-2/3 bg-white shadow-lg rounded-lg p-6">
          {cartItems.length === 0 ? (
            <p className="text-gray-700 text-lg">Votre panier est vide.</p>
          ) : (
            <div className="space-y-6">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center justify-between border-b pb-4">
                  {/* Image produit */}
                  <div className="flex items-center space-x-4">
                    <img src={item.image} alt={item.title} className="w-16 h-16 rounded-lg object-contain" />
                    <div>
                      <h3 className="text-gray-900 font-semibold text-sm">{item.title}</h3>
                      <p className="text-gray-600">{item.price}€</p>
                    </div>
                  </div>

                  {/* Quantité */}
                  <div className="flex items-center space-x-4 ml-auto">
                    <button 
                      onClick={() => removeFromCart(item.id)} 
                      className="px-3 py-1 bg-slate-200 rounded-full text-sm hover:bg-red-600"
                    >
                      -
                    </button>
                    <span className="text-gray-900">{item.quantity}</span>
                    <button 
                      onClick={() => addToCart(item)} 
                      className="px-3 py-1 bg-slate-200 rounded-full text-sm hover:bg-green-600"
                    >
                      +
                    </button>
                  </div>

                  {/* Prix total de la ligne */}
                  <div>
                    <span className="text-gray-900 font-semibold mx-10">
                      {item.price * item.quantity}€
                    </span>
                  </div>

                  {/* Bouton supprimer */}
                  <button 
                    onClick={() => removeFromCart(item.id)} 
                    className="bg-slate-200 text-xs"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              ))}
            </div>
          )}

          {cartItems.length > 0 && (
            <div className="mt-6">
              <button 
                onClick={clearCart} 
                className="bg-slate-100 text-slate-500 py-2 rounded-lg hover:bg-red-600"
              >
                Vider le panier
              </button>
            </div>
          )}
        </div>

        {/* Total produit à droite */}
        <div className="total-container w-full md:w-1/3 bg-slate-100 shadow-lg rounded-lg p-6 md:self-start ">
          <div className="flex justify-between ">
            <span><h2 className="text-lg  text-gray-900">Total Produit</h2></span>
            <span>{totalItemsInCart}</span>
          </div>
          <div className="mt-3 flex justify-between items-end">
            <p className=" text-gray-700 text-lg">Prix total :</p>
            <span className="text-xl text-gray-900">
              {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}€
            </span>
          </div >
          <div className="">
            {/* Bouton Commander */}
            {/* <a href="" className="block w-full text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-m px-5 py-2.5 mt-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Commander
            </a> */}
            <Link to="/order-summary" className="block w-full text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-m px-5 py-2.5 mt-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Commander
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Cart;
