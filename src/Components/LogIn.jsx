import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";



export const LogIn = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, pass);
    const payload = { email: email, password: pass };

    try {
      const response = await fetch("https://localhost:7275/api/Users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = response.json();
        navigate("/products");
        console.log(data);
      }
      else{
        alert("failed");
      }
    } catch (error) {
      alert(error)
    }
  };

  return (
    <div className="form-container">
      <h2>LogIn</h2>
      <form
        onSubmit={handleSubmit}
        className="login-form">
        <label for="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="yourmail@gmail.com"
          id="email"
          name="email"
        />
        <label for="password">password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="******"
          id="password"
          name="password"
        />
        <button type="submit">Log In</button>
      </form>
      <button
        className="link-btn"
        onClick={() => {
          navigate("/register");
        }}>
        Don't have an account? Register Here
      </button>
    </div>
  );
};
