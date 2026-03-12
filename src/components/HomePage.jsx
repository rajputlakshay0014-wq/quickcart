import ProductList from "./ProductList";

function HomePage({ products, onAddToCart }) {

  return (

    <div>

      <h2>All Products</h2>

      <ProductList
        products={products}
        onAddToCart={onAddToCart}
      />

    </div>

  );

}

export default HomePage;