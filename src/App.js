import React from 'react';
import { Route, Routes } from "react-router-dom";

import Landing from './components/Landing';
import SignIn from './components/SignIn';
import Streaming from './components/Streaming';
import Register from './components/Register';

function App() {

  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/signin" element={<SignIn />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/browse" element={<Streaming />} />
    </Routes>
  );

}

export default App;
