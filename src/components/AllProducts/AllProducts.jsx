import useFetchProducts from '../../utils/hooks/useFetchProducts.jsx';
import ProductGrid from '../ProductGrid/ProductGrid.jsx';

function AllProducts() {
  const { products, isLoading, error } = useFetchProducts(); 

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <ProductGrid titre="Tous les produits" products={products} />
    </div>
  );
}

export default AllProducts;
