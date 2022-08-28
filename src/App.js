import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from './components/Landing';
import SignIn from './components/SignIn';
import Streaming from './components/Streaming';
import Register from './components/Register';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/browse">
          <Streaming />
        </Route>
      </Switch>
    </Router >
  );

}

export default App;
