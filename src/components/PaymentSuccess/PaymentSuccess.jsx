import { useEffect } from 'react';
import { useCart } from '../../utils/context/CartContext';
import { useNavigate } from 'react-router-dom';

function PaymentSuccess() {

  const { clearCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-900">Merci pour votre achat !</h1>
      <p className="text-gray-900">Votre paiement a été confirmé et votre commande est en préparation.</p>
      <button
        onClick={() => navigate('/')} // Retourner à la page d'accueil
        className="mt-6 text-white bg-blue-700 px-4 py-2 rounded-lg"
      >
        Retourner à l'accueil
      </button>
    </div>
  )
}

export default PaymentSuccess