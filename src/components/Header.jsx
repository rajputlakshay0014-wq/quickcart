import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header({ cartItemCount, onCartClick }) {

  return (

    <header className="header">

      <Link to="/" className="logo">
        <h1>🛒 QuickCart</h1>
      </Link>

      <nav>

        <Link to="/">Home</Link>

        <Link to="/category/Electronics">
          Electronics
        </Link>

        <Link to="/category/Accessories">
          Accessories
        </Link>

        <Link to="/category/Home">
          Home
        </Link>

      </nav>

      <button
        className="cart-btn"
        onClick={onCartClick}
      >
        Cart ({cartItemCount})
      </button>

    </header>

  );

}

export default Header;