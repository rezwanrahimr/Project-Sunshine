import React from 'react';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Button from 'react-bootstrap/Button';
import Loding from '../Loding/Loding';
const SignUp = () => {
    const navigate = useNavigate();

    // Google sign-up
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

    
    // Email and Password
    const handleLogin = event => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password)

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                if(user){
                    navigate('/home')
                }
               
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

    }
    return (
        <div>
            <div className="Auth-form-container">
                <form className="Auth-form" onSubmit={handleLogin}>
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Registration</h3>
                        <div className="text-center">
                            Already registered?{" "}
                            <span className="link-primary">
                                <a href="/login">Login</a>
                            </span>
                        </div>
                        <div className="form-group mt-3">
                            <label>Full Name</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="e.g Jane Doe"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                name='email'
                                className="form-control mt-1"
                                placeholder="Email Address"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                name='password'
                                className="form-control mt-1"
                                placeholder="Password"
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                        <p className="text-center mt-2">
                            <Button variant="primary" onClick={()=>signInWithGoogle()}>Google</Button>{' '}
                        </p>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default SignUp;