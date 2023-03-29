import React, { useState,useContext } from "react";
import { AccountContext } from './Accounts';
import Status from "./Status";
import {Link, useNavigate } from 'react-router-dom';
import Signup from "./Signup";


export default function Login () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { authenticate } = useContext(AccountContext);
  const navigate = useNavigate();

  const onSubmit = event => {
    event.preventDefault();

    authenticate(email, password)
      .then(data => {
        console.log('Logged in!', data);
        navigate('/settings')
        window.location.reload();

      })
      .catch(err => {
        console.error('Failed to login!', err);
      })
  };

  return (
   

    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={onSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={email} onChange={event => setEmail(event.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"

              value={password}
              onChange={event => setPassword(event.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Login 
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
          <label className="label">
                  <Link className="label-text-alt link link-hover" to={'/register'}> sign up</Link>
          </label>
          </p>
        </div>
      </form>
    </div>




    


  );
};