// Login.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    navigate("/");

    if (username === "yourUsername" && password === "yourPassword") {
      navigate("/");
    } else {
      console.log("Invalid login credentials");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>

      <p>
        If you're not signed up,{" "}
        <Link className="register" to="/register">
          click here to register
        </Link>
        .
      </p>
    </div>
  );
};

export default Login;
