import React, { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { register, auth } from "../lib/firebase";

import '../App.css';

const Register = () => {
    const [error] = useAuthState(auth);
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleRegistration() {
        try {
            await register(emailRef.current.value, passwordRef.current.value)
                .then(() => {
                    navigate("/browse");
                })
        } catch {
            alert(error.message);
        }
    }


    return (
        <section className="vh-100 bg-light" >
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 px-0 d-none d-md-block">
                        <img src="https://media.giphy.com/media/l0MYGb1LuZ3n7dRnO/giphy.gif"
                            alt="Loginimg" className="w-100 vh-100" style={{ objectFit: 'cover', objectPosition: 'left' }} />
                    </div>
                    <div className="col-sm-12 col-md-6 text-black d-flex justify-content-sm-center">
                        <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                            <div style={{ width: '23rem' }}>
                                <h2 className="fw-bold display-6 mb-3 pb-3 text-center" style={{ letterSpacing: '1px' }}>Welcome to Zovy!</h2>
                                <p className='lead text-center mb-5'>Register to start streaming all of your 80's & 90's favorites!</p>

                                {/* EMAIL */}
                                <div className="form-group mb-4">
                                    <label className="form-label" for="email">Email address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        ref={emailRef}
                                    />
                                </div>

                                {/* PASSWORD */}
                                <div className="form-group mb-4">
                                    <label className="form-label" for="password">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        ref={passwordRef}
                                    />
                                </div>

                                {/* REGISTER BUTTON */}
                                <div className="pt-1 mb-4 d-flex justify-content-center">
                                    <button type="submit" className="btn btn-danger btn-lg btn-block" onClick={handleRegistration} >Register</button>
                                </div>

                                {/* SIGN IN ROUTING */}
                                <div className="container d-flex justify-content-center">
                                    <p className='routing text-center'>Already have an account? <a href="/signin" className="link-danger">Sign in here</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Register;

