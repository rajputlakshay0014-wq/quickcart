import "../styles/CartSidebar.css";

function CartSidebar({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem
}) {

  const total = cart.reduce(
    (t, item) => t + item.price * item.quantity,
    0
  );

  return (
    <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>

      <div className="cart-header">
        <h2>Your Cart</h2>
        <button onClick={onClose}>X</button>
      </div>

      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map((item) => (
        <div key={item.id} className="cart-item">

          <p>{item.name}</p>

          <button
            onClick={() =>
              onUpdateQuantity(item.id, item.quantity - 1)
            }
          >
            -
          </button>

          {item.quantity}

          <button
            onClick={() =>
              onUpdateQuantity(item.id, item.quantity + 1)
            }
          >
            +
          </button>

          <button
            onClick={() => onRemoveItem(item.id)}
          >
            Remove
          </button>

        </div>
      ))}

      <h3>Total: ${total.toFixed(2)}</h3>

    </div>
  );
}

export default CartSidebar;