import React, { Component } from 'react';

import '../App.css';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }

    onSubmitSignIn = () => {
        fetch('', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user)
                    this.props.onRouteChange('home');
                }
            })
    }

    render() {
        const { onRouteChange } = this.props;
        return (
            <section className="vh-100 bg-light" >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 px-0 d-none d-md-block">
                            <img src="https://media.giphy.com/media/l0MYGb1LuZ3n7dRnO/giphy.gif"
                                alt="Login image" className="w-100 vh-100" style={{ objectFit: 'cover', objectPosition: 'left' }} />
                        </div>
                        <div className="col-sm-12 col-md-6 text-black d-flex justify-content-sm-center">
                            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                                <form style={{ width: '23rem' }}>

                                    <h2 className="fw-bold display-6 mb-3 pb-3" style={{ letterSpacing: '1px' }}>Welcome to Zovy!</h2>
                                    <p className='lead'>Register to start streaming all of your 80's & 90's favorites!</p>

                                    <div className="form-outline mb-4">
                                        <input type="email" id="email" className="form-control form-control-lg" onChange={this.onEmailChange} />
                                        <label className="form-label" for="email">Email address</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="password" id="password" className="form-control form-control-lg" onChange={this.onPasswordChange} />
                                        <label className="form-label" for="password">Password</label>
                                    </div>

                                    <div className="pt-1 mb-4 d-flex justify-content-center">
                                        <button className="btn btn-danger btn-lg btn-block" type="button" onClick={this.onSubmitSignIn}>Register</button>
                                    </div>

                                    <p className='text-center'>Already have an account? <a href="#" onClick={() => onRouteChange('signin')} className="link-danger">Sign In here</a></p>

                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Register;