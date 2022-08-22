import React, { Component } from 'react';
import Register from './components/Register';
import SignIn from './components/SignIn';
import Landing from './components/Landing';
import Streaming from './components/Streaming';

const initialState = {
  route: '',
  isSignedIn: false,
  user: {
    id: '',
    email: '',
    joined: ''
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        email: data.email,
        joined: data.joined,
      }
    })
  }


  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route });
  }


  render() {
    const { isSignedIn, route } = this.state;
    return (
      <>
        <Landing isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        {route === 'home'
          ? <Streaming />
          : (
            route === 'signin'
              ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
              : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
          )
        }
      </>
    )
  }
}

export default App;
