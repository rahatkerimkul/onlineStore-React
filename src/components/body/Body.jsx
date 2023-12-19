import React from "react";
import "./Body.css";
import ProductList from "../../ProductList/ProductList";
function Body({ products, onAdditem }) {
  const onAdditem2 = (Item) => {
    onAdditem(Item);
  };
  return (
    <body>
      <div className="products">
        <ProductList products={products} addItem={onAdditem2} />
      </div>
    </body>
  );
}

export default Body;
