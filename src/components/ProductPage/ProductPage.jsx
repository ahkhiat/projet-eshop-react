import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from "../../utils/context/CartContext";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    // <div classNameName="product-page-container">
    //   <h1 classNameName="text-2xl font-bold">{product.title}</h1>
    //   <img src={product.image} alt={product.title} classNameName="w-1/2" />
    //   <p classNameName="mt-2">{product.description}</p>
    //   <p classNameName="mt-2 font-semibold">{product.price}€</p>
    //   <button onClick={() => addToCart(product)} classNameName="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
    //     Ajouter au panier
    //   </button>
    // </div>

    <div className="product-page-container">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row -mx-4">
                <div className="md:flex-1 px-4">
                    <div className="h-[460px] rounded-l">
                        <img className="w-full h-full object-contain" src={product.image} alt="Product Image" />
                    </div>
                    
                </div>
                <div className="md:flex-1 px-4">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Product Name</h2>
                    <p className="text-gray-600 ">
                        {product.title}
                    </p>
                   
                    
                    <div className="mt-10">
                        <span className="font-bold text-gray-700 d">Product Description:</span>
                        <p className="text-gray-600 text-sm mt-2">
                            {product.description}
                        </p>
                    </div>

                    <div className="flex flex-col mb-4 mt-10">
                        <div className="mr-4">
                            <span className="text-gray-600 font-semibold text-xl">{product.price} €</span>
                        </div>
                        <div>
                            {/* <span className="font-bold text-gray-700 ">Availability:</span> */}
                            {/* <span className="text-gray-600 dark:text-gray-300">In Stock</span> */}

                        </div>
                        <div className="w-full mt-4">
                            <button 
                            onClick={() => addToCart(product)} 
                            className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                            Add to Cart
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>


  );
};

export default ProductPage;
