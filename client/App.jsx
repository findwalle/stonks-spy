import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<Home />} />
    </Routes>
  </BrowserRouter>
);

export default App;