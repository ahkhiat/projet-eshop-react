import ProductGrid from '../ProductGrid/ProductGrid.jsx'
import { useParams } from 'react-router-dom';


function Products() {

  const { categoryName } = useParams()

  return (
    <div>
        <ProductGrid 
          titre={`Produits pour la catégorie: ${categoryName}`} 
          url={`https://fakestoreapi.com/products/category/${categoryName}`} />
    </div>
  )
}

export default Products