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
        <Route exact path="/zovy/" element={<Landing />} />
        <Route exact path="/zovy/signin" element={<SignIn />} />
        <Route exact path="/zovy/register" element={<Register />} />
        <Route exact path="/zovy/browse" element={<Streaming />} />
      </Routes>
    </Router>
  );

}

export default App;
