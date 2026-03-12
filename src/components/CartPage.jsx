function CartPage({ cart }) {

  return (

    <div>

      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map(item => (
          <div key={item.id}>
            {item.name} - {item.quantity}
          </div>
        ))
      )}

    </div>

  );

}

export default CartPage;