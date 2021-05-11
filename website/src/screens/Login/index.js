import React, { useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import "./styles.css"

export default ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await api.post("/sessions", { email, password });

    const { _id } = response.data;

    localStorage.setItem("user", _id);

    history.push("/dashboard");
  };
  return (
    <>
      <p>
        Offer <strong>rooms</strong> for urgent short days
        <strong> for individuals & groups</strong> at affordable prices!
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail *</label>
        <input
          type="email"
          id="email"
          placeholder="Enter E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="email"
          placeholder="Enter Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button className="btn" type="submit">
          Log in
        </button>
      </form>
      <h4>
        Not A Member? Join <Link to="/join">HERE</Link>
      </h4>
    </>
  );
};
