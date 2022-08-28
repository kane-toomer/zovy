import React, { useState } from 'react';

import '../App.css';

const SignIn = ({ props }) => {
    const [user, setUser] = useState('');


    // NEEDS FURTHER SETUP W/ DATABASE
    const handleSignIn = (e) => {
        e.preventDefault()
        fetch('', {
            method: 'POST',
            body: JSON.stringify({ user }),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(user => {
                props.loadUser(user)
                props.onRouteChange('streaming')
            })
    };

    // const authOptions = {
    //     email: { required: "Email is required" },
    //     password: { required: "Password is required" }
    // };

    return (
        <section className="vh-100 bg-light" >
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-6 text-black d-flex justify-content-sm-center">
                        <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                            <form style={{ width: '23rem' }} onSubmit={handleSignIn}>
                                <h2 className="fw-bold display-6 mb-3 pb-3" style={{ letterSpacing: '1px' }}>We knew you'd be back!</h2>

                                {/* EMAIL */}
                                <div className="form-group mb-4">
                                    <label className="form-label" for="email">Email address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        value={user.email}
                                        onChange={e => setUser({ ...user, email: e.target.value })}
                                    />
                                </div>

                                {/* PASSWORD */}
                                <div className="form-group mb-4">
                                    <label className="form-label" for="password">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        value={user.password}
                                        onChange={e => setUser({ ...user, password: e.target.value })}
                                    />

                                </div>

                                {/* SIGN IN BUTTON */}
                                <div className="pt-1 mb-4 d-flex justify-content-center">
                                    <button type="submit" className="btn btn-danger btn-lg btn-block" >Sign In</button>
                                </div>

                                {/* REGISTER ROUTING */}

                                <div className="container d-flex justify-content-center">
                                    <a href="/register" className="routing">Don't have an account? <span className="link-danger">Register here</span></a>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6 px-0 d-none d-md-block">
                        <img src="https://media.giphy.com/media/3oEjI5XK4wgxFqKbDi/giphy.gif"
                            alt="Login gif" className="w-100 vh-100" style={{ objectFit: 'cover', objectPosition: 'left' }} />
                    </div>
                </div>
            </div >
        </section >
    );
}

export default SignIn;