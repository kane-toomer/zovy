import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Landing from './components/Landing';
import SignIn from './components/SignIn';
import Streaming from './components/Streaming';
import Register from './components/Register';

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/browse" element={<Streaming />} />
      </Routes>
    </Router >
  );

}

export default App;
