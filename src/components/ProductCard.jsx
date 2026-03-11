function ProductCard({ product }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
    </div>
  );
}

export default ProductCard;