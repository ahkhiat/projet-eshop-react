import { useNavigate } from "react-router-dom"

function PaymentCancel() {

  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-900">Le paiement a été annulé</h1>
      <p>Vous ne serez pas débité</p>
      <button
        onClick={() => navigate('/')}
        className="mt-6 text-white bg-blue-700 px-4 py-2 rounded-lg"
      >
        Retourner à l'accueil
      </button>
    </div>
  )
}

export default PaymentCancel