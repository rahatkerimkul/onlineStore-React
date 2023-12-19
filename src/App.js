import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./pages/Posts/Posts";
import Navbar from "./components/navbar/Navbar";
import Cart from "./pages/CartPage/Cart";
import News from "./pages/NewsPage/News";
import Footer from "./components/footer/Footer";
import Login from "./pages/LoginPage/Login";
import Register from "./pages/RegisterPage/Register";

function App() {
  const [items, setItems] = useState([]);
  const addItem = (Item) => {
    const newItem = {
      id: Item.id,
      name: Item.name,
      price: Item.price,
      urlimage: Item.urlimage,
      url: Item.url,
    };

    setItems([...items, newItem]);
  };
  const updateItems = (updatedItems) => {
    setItems(updatedItems);
  };
  const [location, setLocation] = useState("");
  const changeLocation = (location) => {
    setLocation(location);
    console.log(location);
  };

  return (
    <BrowserRouter>
      <Navbar setLocation={changeLocation} />

      <Routes>
        <Route
          path="/cart"
          element={
            <Cart
              products={items}
              updateItems={updateItems}
              location={location}
            />
          }
        />
        <Route path="/posts" element={<Posts addItem={addItem} />} />
        <Route path="/" element={<News />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
