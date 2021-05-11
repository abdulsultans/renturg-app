import React, { useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import "./styles.css"

export default ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

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
        Become a Host! <strong>Join RentUrg</strong> to post available
        <strong> rooms for short stays</strong> at affordable prices!!
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Name *</label>
        <input
          type="name"
          id="email"
          placeholder="Enter Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="email">E-mail *</label>
        <input
          type="email"
          id="email"
          placeholder="Enter E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="phone">Phone *</label>
        <input
          type="phone"
          id="email"
          placeholder="Enter phone number"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />

        <label htmlFor="password">Password *</label>
        <input
          type="password"
          id="email"
          placeholder="Enter Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button className="btn" type="submit">
          JOIN
        </button>
        </form>
        <h4>
          Already A Member? Login <Link to="/login">HERE</Link>
        </h4>
    </>
  );
};
