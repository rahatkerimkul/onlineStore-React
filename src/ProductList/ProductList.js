import React, { useState } from "react";
import "./Productlist.css";

function ProductList({ products, addItem }) {
  const [addingToBoxIndex, setAddingToBoxIndex] = useState(null);

  const handleAddItem = (id, name, price, urlimage, url, index) => {
    const newItem = { id, name, price, url, urlimage };
    setAddingToBoxIndex(index);
    onAdditem3(newItem);
    console.log(newItem);
  };

  const onAdditem3 = (Item) => {
    addItem(Item);
    setTimeout(() => {
      setAddingToBoxIndex(null);
    }, 500);
  };

  return (
    <div className="products-container">
      {products.map((product, index) => (
        <div
          key={product.id}
          className={`product-card ${
            addingToBoxIndex === index ? "adding-to-box" : ""
          }`}
        >
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
          </div>
          <img
            className="addtoboximage"
            src="https://cdn-icons-png.flaticon.com/512/32/32339.png"
            onClick={() =>
              handleAddItem(
                product.id,
                product.name,
                product.price,
                product.urlimage,
                product.url,
                index
              )
            }
            style={{ cursor: "pointer" }}
          />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
