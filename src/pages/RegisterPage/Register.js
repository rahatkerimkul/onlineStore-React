// Register.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Perform registration logic here
    console.log("Registration logic goes here");
    navigate("/");
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>

      <p>
        Already have an account?{" "}
        <Link to="/login" style={{ color: "#007bff" }}>
          Login here
        </Link>
      </p>
    </div>
  );
};

export default Register;
