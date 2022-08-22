import React, { Component } from 'react';

import '../App.css';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({ signInEmail: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ signInPassword: event.target.value })
    }

    onSubmitSignIn = () => {
        fetch('', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
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
                        <div className="col-sm-12 col-md-6 text-black d-flex justify-content-sm-center">
                            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                                <form style={{ width: '23rem' }}>

                                    <h2 className="fw-bold display-6 mb-3 pb-3" style={{ letterSpacing: '1px' }}>We knew you'd be back!</h2>

                                    <div className="form-outline mb-4">
                                        <input type="email" id="email" className="form-control form-control-lg" onChange={this.onEmailChange} />
                                        <label className="form-label" for="email">Email address</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="password" id="password" className="form-control form-control-lg" onChange={this.onPasswordChange} />
                                        <label className="form-label" for="password">Password</label>
                                    </div>

                                    <div className="pt-1 mb-4 d-flex justify-content-center">
                                        <button className="btn btn-danger btn-lg btn-block" type="button" onClick={this.onSubmitSignIn}>Sign In</button>
                                    </div>

                                    <p className='text-center'>Don't have an account? <a onClick={() => onRouteChange('register')} className="link-danger">Register here</a></p>

                                </form>
                            </div>

                        </div>
                        <div className="col-md-6 px-0 d-none d-md-block">
                            <img src="https://media.giphy.com/media/3oEjI5XK4wgxFqKbDi/giphy.gif"
                                alt="Login image" className="w-100 vh-100" style={{ objectFit: 'cover', objectPosition: 'left' }} />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SignIn;