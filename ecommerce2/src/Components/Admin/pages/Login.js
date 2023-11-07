import React from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


export const Login = (props) => {
  let history = useNavigate();

  const [lstate, setlstate] = useState({
    email: "",
    password: "",
  });

  
//   making a onChange function 

const onChange = (e) => {
  setlstate({ ...lstate, [e.target.name]: e.target.value });
};

//   calling api using fetch method
const login = async (email, password) => {
  const response = await fetch("http://localhost:3002/user/login", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const json = await response.json();
  console.log(json);
  if ( json.user.role === "admin"){
     props.showAlert("success", "your are successfully logged in ")
      localStorage.setItem("token", json.authtoken)
      
      history("/admin/dashboard")

  }
  else if (json.user.role === "user") {
    props.showAlert("success", "your are successfully logged in ")
    localStorage.setItem("token", json.authtoken)
    history("/")
   
  }
  else{
    props.showAlert("danger", json.error)
  }
 
    
  };
  const handleClick = (e) => {
    e.preventDefault();
    
    login(lstate.email, lstate.password);
    setlstate({ email: "", password: "" });
};
  return (
    <>
    <form onSubmit={handleClick}>
        <div className="form-outline mb-4">
          <input
            type="email"
            id="email"
            name="email"
            onChange={onChange}
            value={lstate.email}
            className="form-control"
            required
          />
          <label className="form-label" htmlFor="form2Example1">
            Email address
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="password"
            name="password"
            onChange={onChange}
            value={lstate.password}
            className="form-control"
            minLength={8}
          />
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
        </div>

        <button
          type="submit"
          
          className="btn  btn-outline-light btn-warning btn-block mb-4"
        >
          Sign in
        </button>
      </form>
    </>
  )
}
