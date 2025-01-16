import React from "react";
import "./header.css";



const Header = () => {
  return (
    <header>
      {/* BLACK HEADER */}
      <div className="sign-up">
        <p>
          Sign up and get 20% off to your first order.
          <a href="#"> Sign Up Now</a>
        </p>
      </div>

      {/* WHITE HEADER WITH NAVBAR */}
      <div className="navbar-flex">
        <div className="navbar-logo">
          <a href="/">
            <h2>SHOP.CO</h2>
          </a>
        </div>

        <ul className="navbar-item">
          <li>
            <a href="">Shop</a>
          </li>
          <li>
            <a href="">On Sale</a>
          </li>
          <li>
            <a href="">New Arrivals</a>
          </li>
          <li>
            <a href="">Brands</a>
          </li>
        </ul>

        <div className="search-bar">
          <div className="search-input">
            <input type="text" placeholder="Search for products" />
          </div>
          <a href="#">
            <i id="search-icon-navbar" className="fas fa-search"></i>
          </a>
        </div>

        <div className="cart-user-icon">
          <a href="">
            <img
              src="	https://ajay-lokhande455.github.io/e-commerce/assets/cart.svg"
              alt="cart"
            />
          </a>
          <a href="#">
            <img
              src="https://ajay-lokhande455.github.io/e-commerce/assets/account.svg"
              alt="user"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
