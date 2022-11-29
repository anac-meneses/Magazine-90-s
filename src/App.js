import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../src/components/navbar';
import Home from '../src/views/home';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        
      </Routes>
  
    
  </BrowserRouter>
  );
}

export default App;
