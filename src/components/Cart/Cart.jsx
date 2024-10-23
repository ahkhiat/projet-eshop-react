import { useCart } from "../../utils/context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, addToCart } = useCart();

  return (
    <div className="cart-container max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Mon Panier</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-700 text-lg">Votre panier est vide.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between border-b pb-4">
              {/* Product Image */}
              <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.title} className="w-16 h-16 rounded-lg object-cover" />
                <div>
                  <h3 className="text-gray-900 font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.price}€</p>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => removeFromCart(item.id)} 
                  className="px-3 py-1 bg-red-500 text-white rounded-full text-sm hover:bg-red-600"
                >
                  -
                </button>
                <span className="text-gray-900">{item.quantity}</span>
                <button 
                  onClick={() => addToCart(item)} 
                  className="px-3 py-1 bg-green-500 text-white rounded-full text-sm hover:bg-green-600"
                >
                  +
                </button>
              </div>

              {/* Total Price for this item */}
              <div>
                <span className="text-gray-900 font-semibold">
                  {item.price * item.quantity}€
                </span>
              </div>

              {/* Remove Button */}
              <button 
                onClick={() => removeFromCart(item.id)} 
                className="text-red-600 hover:text-red-700 text-sm"
              >
                Supprimer
              </button>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="mt-6">
          <button 
            onClick={clearCart} 
            className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
          >
            Vider le panier
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
