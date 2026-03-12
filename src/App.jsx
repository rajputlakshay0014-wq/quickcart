import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CartSidebar from "./components/CartSidebar";
import HomePage from "./components/HomePage";
import CategoryPage from "./components/CategoryPage";
import CartPage from "./components/CartPage";

import { products } from "./data/products";

import "./styles/App.css";

function App() {

  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {

    const existing = cart.find(item => item.id === product.id);

    if (existing) {
      setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, qty) => {

    if (qty <= 0) {
      removeFromCart(id);
    } else {

      setCart(
        cart.map(item =>
          item.id === id ? { ...item, quantity: qty } : item
        )
      );

    }

  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (

    <BrowserRouter>

      <div>

        <Header
          cartItemCount={getTotalItems()}
          onCartClick={toggleCart}
        />

        <main className="main-content">

          <Routes>

            <Route
              path="/"
              element={
                <HomePage
                  products={products}
                  onAddToCart={addToCart}
                />
              }
            />

            <Route
              path="/category/:category"
              element={
                <CategoryPage
                  products={products}
                  onAddToCart={addToCart}
                />
              }
            />

            <Route
              path="/cart"
              element={
                <CartPage cart={cart} />
              }
            />

          </Routes>

        </main>

        <CartSidebar
          isOpen={isCartOpen}
          onClose={toggleCart}
          cart={cart}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeFromCart}
        />

      </div>

    </BrowserRouter>

  );

}

export default App;