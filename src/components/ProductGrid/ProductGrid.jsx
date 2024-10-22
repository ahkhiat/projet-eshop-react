import { useEffect } from 'react'
import { useState } from 'react';
import './ProductGrid.css';

function ProductGrid(props) {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjI5NTI3ZjU3NjQ4OTE5MzU5YThlM2EzNGZhZDEyMSIsIm5iZiI6MTcyNjY0OTExMC44Njg2NzYsInN1YiI6IjY2ZTk4ODJlMWJlY2E4Y2UwN2QyZTYzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DiBcCQalz7EIIuk852QklQk_bBBSjfR8-Lk_2McaCKI'
      }
    };

    useEffect(() => {
      fetch(`${props.url}`, options)
          .then(response => response.json())
          .then((result) => {
            console.log(result)
            setIsLoaded(true);
            setItems(result);
          })
          .catch(err => console.error(err));
      return () => {
        
      }
    }, [])
    

    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Chargement...</div>;
    } else {
    return (
    <>
      <div className="container">
        {items.map(item => (
          <div key={item.id} className="w-64 text-center border rounded-lg p-4 flex flex-col items-center justify-between h-full">
            <a href="{{ path('app_product', {slug: product.slug}) }}" className="text-decoration-none flex-grow">
                <img src={item.image} className="rounded-lg max-w-full h-48 object-contain mx-auto" alt={item.title} />
                <span className="d-block font-normal text-sm text-black mt-2">{ item.title }</span>
            </a>
            <div className="flex items-center justify-between w-full mt-2">
              <button className="text-xs py-1 px-2 bg-blue-500 text-white rounded">Ajouter au panier</button>
              <span className="text-black font-semibold">{item.price}€</span>
            </div>
          </div>
        ))}
      </div>



      
    </>
    )
  }
}

export default ProductGrid