import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, pass, name);
    const payload = {username:name, email: email, password: pass };
    try {
      const response = await fetch("https://localhost:7275/api/Users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = response.json();
        navigate("/login");
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
      <h2>Register</h2>
      <form
        onSubmit={handleSubmit}
        className="register-form">
        <label for="name">Full Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="your name"
          id="name"
          name="name"
        />
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
        <button type="submit">Register</button>
      </form>
      <button
        className="link-btn"
        onClick={() => {
          navigate("/login");
        }}>
        Already have an account? Log In Here
      </button>
    </div>
  );
};
