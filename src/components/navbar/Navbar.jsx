import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar({ setLocation }) {
  const [selectedCity, setSelectedCity] = useState("");

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    settingLocation(selectedCity);
  };
  const settingLocation = (location) => {
    setLocation(location);
  };
  return (
    <header>
      <Link to="/">
        <img
          className="logo"
          src="https://www.freeiconspng.com/uploads/blue-shopping-cart-icon-20.png"
          alt="Logo"
        />
      </Link>
      <nav>
        <ul className="nav_links">
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/posts">Items</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <select value={selectedCity} onChange={handleCityChange}>
              <option value="">My location</option>
              <option value="Almaty">Almaty</option>
              <option value="Turkestan">Turkestan</option>
              <option value="Shymkent">Shymkent</option>
              <option value="Astana">Astana</option>
              <option value="Aktau">Aktau</option>
              <option value="Aktobe">Aktobe</option>
              <option value="Semei">Semei</option>
              <option value="Oskemen">Oskemen</option>
            </select>
          </li>
        </ul>
      </nav>
      <a className="cta" href="#">
        <button>Contact</button>
      </a>
    </header>
  );
}

export default Navbar;
