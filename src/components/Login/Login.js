import React from 'react';
import LoginCss from './LoginCss.css';
import {  signInWithEmailAndPassword } from "firebase/auth";
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Button } from 'react-bootstrap';
import Loding from '../Loding/Loding';
const Login = () => {
  const navigate = useNavigate();

  // Google Login
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if(user){
      navigate('/home');
  }
  if(loading){
      return <Loding></Loding>
  }
  if(error){
      alert(error.message);
  }
  
  // Email and Passworld Login
  const handleLogin = event => {
    event.preventDefault()
    const email = event.target.email.value;
    const password = event.target.password.value;

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigate('/home')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  }

  return (
    <div className='container'>
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleLogin}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Login</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                name='email'
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                name='password'
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              Go to Sign Up <a href="/signUP">Sign-Up</a>
            </p>
            <p className="forgot-password text-right mt-2">
            <Button variant="primary" onClick={()=>signInWithGoogle()}>Google</Button>{' '}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;