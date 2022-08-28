import React, { useState } from 'react';

import '../App.css';

const Register = ({ props }) => {
    const [user, setUser] = useState('');

    // NEEDS FURTHER SETUP W/ DATABASE
    const handleRegistration = e => {
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
    //     password: {
    //         required: "Password is required",
    //         minLength: {
    //             value: 8,
    //             message: "Password must have at least 8 characters"
    //         }
    //     }
    // };

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
                            <form style={{ width: '23rem' }} onSubmit={handleRegistration}>
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
                                    <button type="submit" className="btn btn-danger btn-lg btn-block">Sign In</button>
                                </div>

                                {/* REGISTER ROUTING */}
                                <div className="container d-flex justify-content-center">
                                    <a href="/signin" className='routing text-center'>Already have an account? <span className="link-danger">Sign in here</span></a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Register;

