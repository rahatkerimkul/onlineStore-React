import React, { useState, useEffect } from "react";
import "./Cart.css";

function Cart({ products, updateItems, location }) {
  const [cartProducts, setCartProducts] = useState(products);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartProducts(products);
  }, [products]);

  useEffect(() => {
    const newTotalPrice = cartProducts.reduce(
      (total, product) => total + product.price,
      0
    );
    setTotalPrice(newTotalPrice);
  }, [cartProducts]);

  const handleDeleteProduct = (product) => {
    const updatedItems = cartProducts.filter((item) => item.id !== product.id);
    updateItems(updatedItems);
  };

  return (
    <body>
      <div className="cart-page">
        {cartProducts.length === 0 ? (
          <h2 className="empty-cart-message">The Cart is empty</h2>
        ) : (
          <div>
            <div className="products-container">
              {cartProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <img
                    src="https://resources.cdn-kaspi.kz/yml/static/assets/badges/l24.svg"
                    className="image-0024"
                    alt="Badge"
                  />
                  <img
                    src={product.urlimage}
                    alt={product.name}
                    className="product-image"
                  />
                  <div className="product-details">
                    <a href={product.url}>
                      <h3>{product.name}</h3>
                    </a>
                  </div>
                  <div className="product-prices">
                    <p>{product.price} $</p>
                    <button onClick={() => handleDeleteProduct(product)}>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <h1 className="TotalPrice">Total price: {totalPrice}$</h1>
          </div>
        )}
      </div>
    </body>
  );
}

export default Cart;
