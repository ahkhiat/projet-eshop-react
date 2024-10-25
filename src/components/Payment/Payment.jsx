import { useState } from 'react';
import { useCart } from '../../utils/context/CartContext';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const stripePromise = loadStripe('pk_test_51OlduADNCIi7yha21ixaofRcEnxuaW9cMHrnMKF53LvJzuVlYOatqDD9TbGQEfaeK9WUi7luYlbgNfWElGHNU52500CEhNsetU');

const Payment = () => {
  const { cartItems } = useCart();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handlePayment = async () => {
    setLoading(true);
    setError(null);

    try {
      const stripe = await stripePromise;

      // Créer une session de paiement sur votre serveur
      const response = await axios.post('http://localhost:5000/create-checkout-session', {
        items: cartItems,
      });

      // Rediriger l'utilisateur vers la page de paiement Stripe
      const result = await stripe.redirectToCheckout({
        sessionId: response.data.id,
      });

      if (result.error) {
        setError(result.error.message);
      }
    } catch (err) {
      setError('Une erreur s\'est produite lors de la création de la session de paiement.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6 text-black">Paiement</h1>
      {cartItems.length === 0 ? (
        <p className="text-lg text-gray-700">Votre panier est vide.</p>
      ) : (
        <div>
          <h2 className="text-lg text-black">Total à payer : {totalAmount}€</h2>
          <button
            onClick={handlePayment}
            disabled={loading}
            className={`mt-4 text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg ${loading ? 'opacity-50' : ''}`}
          >
            {loading ? 'Chargement...' : 'Payer'}
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      )}
    </div>
  );
};

export default Payment;

