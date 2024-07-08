"use client";
import React, { useState } from "react";
import { apiPost } from "./Api";

function RegisterForm() {
  const [data, setdata] = useState({
    username: "",
    gmail: "",
    age: "",
    phonenumber: "",
    password: "",
  });

  const [error, seterror] = useState({
    username: "",
    gmail: "",
    age: "",
    phonenumber: "",
    password: "",
  });

  const dataChange = (e) => {
    const { name, value } = e.target;
    setdata({
      ...data,
      [name]: value,
    });

    seterror({
      ...error,
      [name]: "",
    });
  };

  const [succes, setsucces] = useState("");

  const createUser = async () => {
    try {
      const response = await apiPost(data);
      seterror({});
      setsucces(response.data.message);
      setTimeout(() => {
      setsucces("");
      }, 3000);
      setdata({
        username: "",
        gmail: "",
        age: "",
        phonenumber: "",
        password: "",
      })
    } catch (e) {
        if (e.data && e.data.errors) {
            seterror(e.data.errors);
          } else {
            console.log(e.message); 
          }
    }
  };

  return (
    <div className="container mt-5">
      <h1>Register Product</h1>
      {succes && (
        <div className="alert alert-success" role="alert">
          {succes}
        </div>
      )}
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
          value={data.username}
          onChange={dataChange}
        />
        {error.username && (
          <div className="text-danger">{error.username[0]}</div>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="gmail" className="form-label">
          Gmail
        </label>
        <input
          type="email"
          className="form-control"
          id="gmail"
          name="gmail"
          value={data.gmail}
          onChange={dataChange}
        />
        {error.gmail && <div className="text-danger">{error.gmail[0]}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          type="number"
          className="form-control"
          id="age"
          name="age"
          value={data.age}
          onChange={dataChange}
        />
        {error.age && <div className="text-danger">{error.age[0]}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="phonenumber" className="form-label">
          Phone Number
        </label>
        <input
          type="tel"
          className="form-control"
          id="phonenumber"
          name="phonenumber"
          value={data.phonenumber}
          onChange={dataChange}
        />
        {error.phonenumber && (
          <div className="text-danger">{error.phonenumber[0]}</div>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={data.password}
          onChange={dataChange}
        />
        {error.password && (
          <div className="text-danger">{error.password[0]}</div>
        )}
      </div>
      <button type="submit" className="btn btn-primary" onClick={createUser}>
        Register
      </button>
    </div>
  );
}

export default RegisterForm;
