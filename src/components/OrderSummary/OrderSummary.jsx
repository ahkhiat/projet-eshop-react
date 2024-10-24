import { useCart } from "../../utils/context/CartContext";
import { Link } from "react-router-dom";

const OrderSummary = () => {
  const { cartItems, totalItemsInCart } = useCart();

//   const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-900">Récapitulatif de la commande</h1>
      
      {cartItems.length === 0 ? (
        <p className="text-lg text-gray-700">Votre panier est vide.</p>
      ) : (
        <div className="flex flex-col md:flex-row md:space-x-8">
          <ul className="space-y-4 mb-6">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between border-b pb-4">
                <div className="flex items-center">
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-contain mr-4" />
                  <div>
                    <h3 className="text-gray-900 font-semibold">{item.title}</h3>
                    <p>{item.quantity} x {item.price}€</p>
                  </div>
                </div>
                <span className="text-gray-900 font-semibold">
                  {item.price * item.quantity}€
                </span>
              </li>
            ))}
          </ul>

          

          

        <div className="total-container w-full md:w-1/3 bg-slate-100 shadow-lg rounded-lg p-6 md:self-start ">
          <div className="flex justify-between ">
            <span><h2 className="text-lg  text-gray-900">Total Produit</h2></span>
            <span>{totalItemsInCart}</span>
          </div>
          <div className="mt-3 flex justify-between items-end">
            <p className=" text-gray-700 text-lg">Prix total :</p>
            <span className="text-xl text-gray-900">
              {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)} €
            </span>
          </div >
          <div className="">
            {/* Bouton Commander */}
            {/* <Link to="/order-summary" className="block w-full text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-m px-5 py-2.5 mt-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Commander
            </Link> */}

            <div className="flex justify-end">
            <Link to="/payment" className="block w-full text-center text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-m px-5 py-2.5 mt-5 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">
              Payer
            </Link>
          </div>

          </div>
        </div>

          
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
