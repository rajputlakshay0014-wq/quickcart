import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <div>
      <h2>Products</h2>

      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}

    </div>
  );
}

export default ProductList;