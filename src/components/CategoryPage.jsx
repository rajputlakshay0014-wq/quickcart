import { useParams } from "react-router-dom";
import ProductList from "./ProductList";

function CategoryPage({ products, onAddToCart }) {

  const { category } = useParams();

  const filteredProducts =
    products.filter((p) => p.category === category);

  return (

    <div>

      <h2>{category} Products</h2>

      <ProductList
        products={filteredProducts}
        onAddToCart={onAddToCart}
      />

    </div>

  );

}

export default CategoryPage;